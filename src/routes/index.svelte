<script>
	let url
	$: to = url ? `/to/${url.replace(/https?:\/\//,'')}` : undefined
	const selectAll = (e) => e.target.select()
</script>

<div class="flex min-h-screen items-center justify-center">
	<div>
		
		<header class="text-center mb-10 px-4 sm:px-10">
			<h1 class="text-xl sm:text-3xl uppercase font-light mb-4 text-gray-700">Telegrapher</h1>
			<p class="text-2xl sm:text-5xl font-bold text-gray-800 leading-snug">Automatically publish your blog posts for <a class="underline" href="https://telegra.ph" target="_blank">Telegra.ph</a></p>
		</header>

		<div class="flex flex-col sm:flex-row items-center sm:space-x-3 space-x-0 space-y-3 sm:space-y-0 px-2 ">
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
	</div>
</div>



