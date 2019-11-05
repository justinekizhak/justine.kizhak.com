<script>
  import MenuIcon from "./icons/menu-v4.svelte";
  import SearchIcon from "./icons/search-v1.svelte";
 import Link from "./Link.svelte";
 import { menuOpen } from "../stores.js";

    let open = false

    function handleClick(){
        $menuOpen = !$menuOpen
    }

</script>

<div class="md:hidden flex mr-8 my-4">
    <!-- <button class="mx-4 shadow-md"><SearchIcon/></button> -->
    <button class="shadow-md" on:click={handleClick} ><MenuIcon/></button>
</div>

<div class="hidden md:flex mr-8 my-4">
    <!-- <button class="mx-4 shadow-md"><SearchIcon/></button> -->
    <div class="flex shadow-md">
        <Link url="project">My Projects</Link><Link url="blog">My Blogs</Link><Link url="about-me">About Me</Link><Link url="contact-me">Contact Me</Link>
    </div>
</div>
