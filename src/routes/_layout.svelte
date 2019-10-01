<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<style>
</style>

<div class="font-display min-h-screen justify-between flex flex-col">
	<Nav></Nav>
	<main>
		<slot></slot>
	</main>
	<Footer></Footer>

</div>
