<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
		return {
			props: {
				status, message: error.message 
			}
		};
	}
</script>

<script>
	export let status;
	export let message;
</script>

<div class="h-screen flex items-center justify-center px-2">
	<div class="text-center">
		<h1 class="text-8xl">{status}</h1>
		<p class="text-2xl">{message}</p>
		<p><a href="/">Home</a></p>
	</div>
</div>