<script>
  import MenuIcon from "./icons/menu-v3.svelte";
  import SearchIcon from "./icons/search-v1.svelte";
</script>

<div class="md:hidden flex mr-8">
  <button class="m-4">
    <SearchIcon/>
  </button>
  <button class="my-4">
    <MenuIcon/>
  </button>
</div>

<div class="hidden md:block flex mr-8">
  <button class="m-4">
    <SearchIcon/>
  </button>
  <button class="my-4">
    <MenuIcon/>
  </button>
</div>
