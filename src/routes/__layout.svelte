<script>
    import { dev } from '$app/env';		
	import '../app.postcss';
	let title = 'Telegrapher - Publish your blog posts on Telegra.ph'
	let url = 'https://telegrapher.vercel.app'
	let image = 'https://mugshotbot.com/m/Yc8vw3HS'
</script>
<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content="{title}">
	<!-- <meta property="og:description" content="{description}"> -->
	<meta property="og:image" content="{image}">
	<meta property="og:url" content="{url}">	
	<meta name="twitter:image" content="{image}">
	<meta property="twitter:card" content="summary_large_image">
	<link rel="canonical" href="{url}" />
	{#if !dev }
		<script async defer data-website-id="1a41babf-515d-494f-9c84-00e651daf85f" src="https://umami.dsoto.dev/umami.js"></script>	
	{/if}	
</svelte:head>

<main class="w-full max-w-screen-sm mx-auto font-semibold text-lg">
	<slot></slot>
</main>
