<script>
	let url
	$: to = url ? `/to/${url.replace(/https?:\/\//,'')}` : undefined
	const selectAll = (e) => e.target.select()
</script>

<div class="flex min-h-screen items-center justify-center">
	<div>
		
		<header class="text-center mb-10 px-4 sm:px-16">
			<h1 class="text-xl sm:text-3xl uppercase mb-4 text-gray-700">Telegrapher</h1>
			<p class="text-2xl sm:text-6xl font-extrabold text-gray-800 leading-snug">Publish your blog posts on <a class="underline" href="https://telegra.ph" target="_blank" rel="nofollower noopener">Telegra.ph</a></p>
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
				class="px-9 p-3 border-2 border-gray-700 rounded-lg font-extrabold disabled:bg-gray-200 flex items-center"
			>
				Publish
			</a>
				
		</div>
		<footer class="text-center mt-20">
			<p>Made by <a href="https://twitter.com/sotoplatero" class="text-blue-500">dSoto</a></p>
			<p><a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ftelegrapher.vercel.app&text=I%27m%20publishing%20my%20posts%20with%20Telegrapher" class="font-bold">Tweet it</a>
			</p>
				
		</footer>
	</div>
</div>



