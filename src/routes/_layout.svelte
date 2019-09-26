<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<style>
</style>

<main>
	<div class="font-display">
		<Nav/>
		<div class="w-screen">
			<div class="mx-12 md:mx-auto mw-1280 md:px-32">
				<slot></slot>
			</div>
		</div>
		<Footer/>
	</div>
</main>