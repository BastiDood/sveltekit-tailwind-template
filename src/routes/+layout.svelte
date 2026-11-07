<script>
	import './app.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>SvelteKit</title>
</svelte:head>

{@render children()}
