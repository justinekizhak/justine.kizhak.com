<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<style>
	main {
		@apply font-display;
	}
	.main-contents {
		margin-top: 112px;
	}
</style>

<main>
	<Nav/>
	<div class="main-contents">
		<slot></slot>
	</div>
	<Footer/>
</main>