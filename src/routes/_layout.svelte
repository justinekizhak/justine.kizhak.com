<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte';
</script>

<style>
</style>

<div class="font-display min-h-screen justify-between flex flex-col overflow-x-hidden bg-gray-200">
	<Nav></Nav>
	<main class="flex justify-center">
    <div>
      <slot></slot>
    </div>
	</main>
	<Footer></Footer>

</div>
