// import { getCache, setCache } from '$lib/upstash'
import { auth, set as setCache, get as getCache } from '@upstash/redis';
import { Readability } from '@mozilla/readability'
import { JSDOM } from 'jsdom'; 

const UPSTASH_REDIS_REST_URL =  import.meta.env.VITE_UPSTASH_REDIS_REST_URL
const UPSTASH_REDIS_REST_TOKEN = import.meta.env.VITE_UPSTASH_REDIS_REST_TOKEN
auth(UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN);	

export async function get({ params }) {
	let {url} = params
	try	{
		let { data: article } = await getCache(url)
		if (!!article) return {
			body: article
		}

		const fullUrl = /^http?/.test(url) ? url : `http://${url}`
		const res = await fetch( fullUrl )

		if (!res.ok) return null

		const html = await res.text()

		const dom = new JSDOM( html, { url: fullUrl });
		const reader = new Readability( dom.window.document );
		article = reader.parse();

		const { window: { document } } = new JSDOM(article.content, { url: fullUrl });
		const nodes = domToNode( document.querySelector('.page') ).children

		const resPost =  await fetch('https://api.telegra.ph/createPage',{
			method: 'POST',
		    headers: { 'Content-Type': 'application/json' },		
				body: JSON.stringify({	
					access_token: await createAccount(article.byline || article.siteName), 
					title: article.title, 
					author_name: article.byline || article.siteName, 
					content: nodes
				}),
		})

		const {result} = await resPost.json()
		await setCache(url,result)

		return {
			header: {
				'Cache-Control': 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000'
			},		
			body: result
		}
	} catch(e) {
		console.log(e)
		return { status: 404 }
	}
}


function domToNode(domNode) {
  if (domNode.nodeType == 3  ) { // TEXT_NODE
    return domNode.data?.trim();
  }

  if (domNode.nodeType != 1) { //ELEMENT_NODE 
    return false;
  }

  var nodeElement = {};
  const tags = ['a', 'aside', 'b', 'blockquote', 'br', 'code', 'em', 'figcaption', 'figure', 'h3', 'h4', 'hr', 'i', 'iframe', 'img', 'li', 'ol', 'p', 'pre', 's', 'strong', 'u', 'ul', 'video']
  const tag = domNode.tagName.toLowerCase()
  nodeElement.tag = tags.includes(tag) ? tag : 'span';

  for (var i = 0; i < domNode.attributes.length; i++) {
    var attr = domNode.attributes[i];
    if (attr.name == 'href' || attr.name == 'src') {
      if (!nodeElement.attrs) {
        nodeElement.attrs = {};
      }
      nodeElement.attrs[attr.name] = attr.value;
    }
  }

  if (domNode.childNodes.length > 0) {
    nodeElement.children = [];
    let childContent 
    for (var i = 0; i < domNode.childNodes.length; i++) {
      	var child = domNode.childNodes[i];
    	childContent = domToNode(child)
      	if ( !!childContent ) {
	      	nodeElement.children.push(childContent);
      	}
    }
  }

  return nodeElement;
}

async function createAccount(author) {
	const res = await fetch(`https://api.telegra.ph/createAccount?short_name=${author}&author_name=${author}`)
	const { result: { access_token } } = await res.json()
	return access_token
}