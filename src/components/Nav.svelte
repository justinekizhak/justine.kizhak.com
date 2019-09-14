<script>
	import MenuIcon from "./menuIcon.svelte";
</script>

<style>
	.nav-bar {
		@apply bg-red-500;
		height: 80px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-left: 32px;
		padding-right: 32px;
		position: fixed;
		width: 100vw;
		top: 32px;
	}
</style>

<nav class="nav-bar">
		<a class="text-2xl" href='.'>Justine Kizhakkinedath</a>
		<MenuIcon/>
</nav>