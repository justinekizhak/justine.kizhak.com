<script>
	import HeroPattern from "../components/hero-pattern.svelte";
  import ArticleGroup from "../components/landing-page/article-group.svelte";
  import ContactGroup from "../components/landing-page/contact-group.svelte";
</script>


<svelte:head>
	<title>Home | Justine Kizhakkinedath</title>
</svelte:head>

<img src="/assets/images/bg-home-v2.jpg" class="absolute w-full h-screen -z-1 p-8 object-cover"
     alt="background image">

<div class="h-screen flex flex-col justify-center p-8">
  <div class="p-4 text-white">
    <h1>Hello</h1>
    <h2>My name is Justine kizhakkinedath</h2>
  </div>
</div>


<div class="px-12">
  <h3 class="py-2 border-t-b-600 md:w-72">Welcome to my site</h3>

  <ArticleGroup/>
  <ArticleGroup/>


</div>


<ContactGroup/>
