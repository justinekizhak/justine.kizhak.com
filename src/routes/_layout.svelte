<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<style>
	.mw-1920 {
		max-width: 1920px
	}
</style>

<main>
	<div class="font-display">
		<Nav/>
		<div class="mw-1920 mx-auto">
			<div class="mx-12 h-screen ">
				<slot></slot>
			</div>
		</div>
		<Footer/>
	</div>
</main>