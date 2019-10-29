<script>
 import LatestContent from "./_landing-page-components/latest-content.svelte";
 import ContactGroup from "./_landing-page-components/contact-group.svelte";
</script>

<style>
 .image {
     background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/bg.jpg);
     background-size: cover;
     background-position: center;
 }
</style>

<svelte:head>
	<title>Home | Justine Kizhakkinedath</title>
</svelte:head>

<div class="h-screen w-screen image xl:flex xl:justify-around">
    <div class="w-screen h-screen xl:w-1280 flex flex-col justify-around p-12">
        <div class="text-white">
            <h1 class="font-bold">Hello</h1>
            <h2>
                <div class="inline font-thin">My name is </div>
                <div class="inline font-normal">Justine kizhakkinedath</div>
            </h2>
        </div>
    </div>
</div>

<div class="h-screen w-full xl:flex xl:justify-around absolute top-0">
    <div class="w-screen h-screen xl:w-1280 flex flex-col justify-end p-12">
        <p class="flex justify-end my-0">
            <a class="text-white" href="https://unsplash.com" alt="Go to Unsplash.com" target="_blank">Unsplash image of the day</a>
        </p>
    </div>
</div>


<div class="xl:hidden">
    <div class="">
        <div class="mx-12 my-8">
            <h3 class="py-2 border-t-b-600 md:w-72">Welcome to my site</h3>
            <LatestContent></LatestContent>
        </div>
        <ContactGroup/>
    </div>
</div>

<div class="hidden xl:flex xl:justify-around">
    <div class="block w-1280">
        <div class="mx-12 my-8">
            <h3 class="py-2 border-t-b-600 md:w-72">Welcome to my site</h3>
            <LatestContent></LatestContent>
        </div>

        <ContactGroup/>
    </div>

</div>
