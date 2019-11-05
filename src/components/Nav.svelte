<script>
 import NavLeft from './nav/left.svelte';
 import NavRight from './nav/right.svelte';
 import { menuOpen } from "./stores.js";
 import { fade } from 'svelte/transition';
</script>

<style>
 a {
     @apply my-4 mx-8 text-right no-underline;
 }
 .bg-semi-black {
     background-color: rgba(0,0,0,0.80);
 }
</style>

<nav class="z-10 fixed w-full top-0">
    {#if $menuOpen }
        <div transition:fade class="-z-5 fixed w-full h-16 bg-gray-100 md:bg-transparent"></div>
    {/if}
    <div class="mx-auto mw-1280 flex justify-between px-auto">
			<NavLeft/>
			<NavRight/>
		</div>
    {#if $menuOpen }
        <div transition:fade class="md:hidden">
            <div class="flex flex-col bg-gray-100" >
                <a class="animated slideInRight" href="project">My Projects</a>
                <a class="animated slideInRight" href="blog">My Blogs</a>
                <a class="animated slideInRight" href="about-me">About Me</a>
                <a class="animated slideInRight" href="contact-me">Contact Me</a>
            </div>
            <div class="fixed w-full h-full bg-semi-black"></div>
        </div>
    {/if}
</nav>
