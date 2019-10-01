<script>
	import NavLeft from './nav/left.svelte';
	import NavRight from './nav/right.svelte';
</script>

<style>
</style>

<nav class="z-10 bg-red-500 sticky top-0 z-10 shadow-md">
		<div class="mx-auto mw-1280 flex justify-between bg-white px-auto">
			<NavLeft/>
			<NavRight/>
		</div>
</nav>
