<script>
 import LatestContent from "../components/landing-page/latest-content.svelte";
 import ContactGroup from "../components/landing-page/contact-group.svelte";
</script>

<style>
 .image {
     background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://source.unsplash.com/daily);
     background-size: cover;
 }
</style>

<svelte:head>
	<title>Home | Justine Kizhakkinedath</title>
</svelte:head>

<div class="h-screen flex flex-col justify-center p-8 image">
  <div class="p-4 text-white">
    <h1>Hello</h1>
    <h2>My name is Justine kizhakkinedath</h2>
  </div>
</div>


<div class="px-12">
    <h3 class="py-2 border-t-b-600 md:w-72">Welcome to my site</h3>

    <script src="https://gist.github.com/justinekizhak/bc549af02845c175d489a6be00818f24.js"></script>

  <LatestContent></LatestContent>

</div>


<ContactGroup/>
