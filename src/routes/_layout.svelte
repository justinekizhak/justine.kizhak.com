<script>
	import Nav from '../components/Nav.svelte';
</script>

<style>
	main {
		@apply font-display;
	}
</style>

<main>
	<Nav/>
	<slot></slot>
</main>