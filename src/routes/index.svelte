<script>
	let url
	$: to = url ? `/to/${url.replace(/https?:\/\//,'')}` : undefined
	const selectAll = (e) => e.target.select()
</script>

<header class="text-center mb-10 mt-24">
	<h1 class="text-6xl font-semibold mb-4">Telegrapher</h1>
	<p class="text-4xl text-gray-700 px-10 leading-snug">Publish your blog posts to <a href="https://telegra.ph">Telegraph</a> for free</p>
</header>

<div class="flex items-center space-x-3">
	<input 
		type="text" 
		name="url" 
		bind:value={url} 
		on:focus={selectAll}
		class="w-full p-3 border-2 border-gray-400 rounded-lg disabled:bg-gray-100 focus:select-all" 
		placeholder="Post URL"
	>

	<a 
		href={to} 
		disabled={!to}  
		type="submit" 
		target="_blank" 
		rel="nofollower noopener"
		class="px-9 p-3 border-2 border-gray-700 rounded-lg font-semibold disabled:bg-gray-200 flex items-center"
	>
		Publish
	</a>
		
</div>



