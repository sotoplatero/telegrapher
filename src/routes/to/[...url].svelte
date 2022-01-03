<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch}) {
		const res = await fetch(`/api/convert/${params.url}`);
		const article = await res.json()
		return {
			status: 301,
			redirect: article.url
		}

	}
</script>