<script>
	import MenuIcon from "./menuIcon.svelte";
</script>

<style>
	.mw-1920 {
		max-width: 1920px
	}
	.top-4 {
		top: 16px;
	}
</style>

<nav class="z-10 top-4 w-screen fixed bg-grey-4">
	<div class="mw-1920 flex align-center justify-between mx-auto">
		<a class="flex align-center" href='.'>
			<div class="p-3 w-12 h-12">
				<img class="w-6 h-6" alt="logo" src="icons/favicon.ico">
			</div>
			<div class="text-base text-white py-3">Justine Kizhakkinedath</div>
		</a>
		<MenuIcon/>
	</div>
</nav>