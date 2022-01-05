<!-- <script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ params, fetch}) {
		const res = await fetch(`/publish/${params.url}`);

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
</script> -->

<script>
	import { onMount} from 'svelte'
	import { goto } from '$app/navigation';	
	import { page } from '$app/stores';

	onMount( async () => {
		const res = await fetch(`/publish/${$page.params.url}`);

		if (res.ok) {
			const article = await res.json()
			goto(article.url)
		}
	})
</script>

<div class="flex h-screen items-center justify-center">
	<div class="text-4xl font-bold animate-pulse text-gray-700">Publishing...</div>
</div>