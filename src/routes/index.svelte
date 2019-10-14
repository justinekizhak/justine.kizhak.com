<script>
	import HeroPattern from "../components/hero-pattern.svelte";
  import ArticleBlock from "../components/landing-page/article-block.svelte";
</script>


<svelte:head>
	<title>Home | Justine Kizhakkinedath</title>
</svelte:head>

<div class="h-screen w-screen flex flex-col justify-center p-12">
  <h1 class="text-4xl">Hello</h1>

  <h2 class="text-2xl">My name is Justine kizhakkinedath</h2>
</div>

<div class="px-12">
  <h3 class="text-xl py-2">Welcome to my site</h3>
  <div class="py-10 border-solid border-b border-gray-600">
    <h4 class="text-lg mb-8">Read my recent blogs</h4>
    <ArticleBlock/>
    <ArticleBlock/>
    <ArticleBlock/>
  </div>

  <div class="py-10 border-solid border-b border-gray-600">
    <h4 class="text-lg mb-8">Read my recent projects</h4>
    <ArticleBlock/>
    <ArticleBlock/>
    <ArticleBlock/>
  </div>
</div>
