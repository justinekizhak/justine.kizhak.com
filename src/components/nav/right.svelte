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
    <Link url="project">My Projects</Link><Link url="blog">My Blogs</Link><Link url="about-me">About Me</Link><Link url="contact-me">Contact Me</Link>
</div>
