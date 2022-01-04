<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch}) {
		const res = await fetch(`/api/convert/${params.url}`);

		if (res.ok) {
			const article = await res.json()
			return {
				status: 301,
				redirect: article.url
			}
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${params.url}`)			
		}

	}
</script>