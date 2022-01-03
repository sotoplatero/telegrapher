<script>
	let url
	let data
	async function convert(){
		const res = await fetch(`/api/convert/${url.replace(/https?:\/\//,'')}`)
		data = await res.json()
	}
</script>

<header class="text-center mb-10 mt-24">
	<h1 class="text-6xl font-semibold mb-4">Telegrapher</h1>
	<p class="text-4xl text-gray-700 px-10 leading-snug">Publish your blog posts for <a href="https://telegra.ph">Telegraph</a> for free</p>
</header>

<form on:submit|preventDefault={convert} class="space-y-4">
	<input type="text" name="url" bind:value={url} class="w-full p-3 border-2 border-gray-400 rounded-lg">
	<div class="text-center">
		<button type="submit" class="px-9 p-3 border-2 border-gray-700 rounded-lg font-semibold">Publish</button>
		
	</div>
</form>

{#if data}
	<p class="text-center mt-10 text-xl">
		<a href="{data.url}" class="text-blue-500 text" target="_blank" rel="nofollower noopener">
			{data.title}
		</a>
	</p>
{/if}

