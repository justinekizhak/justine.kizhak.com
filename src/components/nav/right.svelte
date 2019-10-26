<script>
  import MenuIcon from "./icons/menu-v3.svelte";
  import SearchIcon from "./icons/search-v1.svelte";
 import Link from "./Link.svelte";
</script>

<div class="md:hidden flex mr-8 my-4">
  <button class="mr-4"><SearchIcon/></button>
  <button><MenuIcon/></button>
</div>

<div class="hidden md:flex flex mr-8 my-4">
    <Link>My Projects</Link><Link>My Blogs</Link><Link>About Me</Link><Link>Contact Me</Link>
</div>
