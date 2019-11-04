<script>
	import NavLeft from './nav/left.svelte';
	import NavRight from './nav/right.svelte';
 import { menuOpen } from "./stores.js";
</script>

<style>
 .active {
     @apply block;
 }

 a {
     @apply my-4 mx-8 text-right no-underline;
 }
 .bg-semi-black {
     background-color: rgba(0,0,0,0.80);
 }
</style>

<nav class="z-10 fixed w-full top-0">
		<div class="mx-auto mw-1280 flex justify-between px-auto
                {$menuOpen ? 'bg-gray-100' : ''} md:bg-transparent">
			<NavLeft/>
			<NavRight/>
		</div>
    <div class=" hidden {$menuOpen ? 'active' : ''}">
        <div class="md:hidden flex flex-col bg-gray-100" >
            <a href="project">My Projects</a>
            <a href="blog">My Blogs</a>
            <a href="about-me">About Me</a>
            <a href="contact-me">Contact Me</a>
        </div>
        <div class="fixed w-full h-full bg-semi-black md:hidden"></div>
    </div>
</nav>
