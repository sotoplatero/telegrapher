<script>
	import { onMount} from 'svelte'
	import { goto } from '$app/navigation';	
	import { page } from '$app/stores';

	let error

	onMount( async () => {
		const res = await fetch(`/publish/${$page.params.url}`);

		if (res.ok) {
			const article = await res.json()
			goto(article.url)
		} else {
			error = res.status
		}

	})

</script>

<div class="flex h-screen items-center justify-center">
{#if !error}
	<div class="text-3xl font-bold animate-pulse text-gray-700">Publishing...</div>
{:else}
	<div class="text-4xl font-bold text-gray-700">
		{#if error == 404}
			Could not load {$page.params.url}
		{:else}
			An error occurred, please try later.
		{/if}
	</div>
{/if}
</div>