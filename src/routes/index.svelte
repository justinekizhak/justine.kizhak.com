<script>
	import HeroPattern from "../components/hero-pattern.svelte";
  import ArticleBlock from "../components/landing-page/article-block.svelte";
</script>


<svelte:head>
	<title>Home | Justine Kizhakkinedath</title>
</svelte:head>

<img src="/assets/images/bg-home-v2.jpg" class="absolute w-full h-screen -z-1 p-8 object-cover"
     alt="background image">

<div class="h-screen flex flex-col justify-center p-8">
  <div class="p-4 text-white">
    <h1 class="text-4xl">Hello</h1>
    <h2 class="text-2xl">My name is Justine kizhakkinedath</h2>
  </div>
</div>


<div class="px-12">
  <h3 class="text-xl py-2 border-t-b-600 md:w-56">Welcome to my site</h3>

  <div class="py-10 border-solid border-b border-gray-600">
    <h4 class="text-lg mb-8 border-b border-gray-500 md:w-56">
      <a class="flex" href="blog">
        <span>Read my recent blogs</span>
        <img src="/assets/svg/right-arrow.svg" alt="go to my blogs">
      </a>
    </h4>
    <div class="md:flex md:justify-between">
      <ArticleBlock name="New blog 1" link="#"></ArticleBlock>
      <ArticleBlock name="New blog 2" link="#"></ArticleBlock>
      <ArticleBlock name="New blog 3" link="#"></ArticleBlock>
    </div>
  </div>

  <div class="py-10 border-solid border-b border-gray-600">
    <h4 class="text-lg mb-8 border-b border-gray-500 md:w-56">
      <a class="flex" href="project">
        <span>Read my recent projects</span>
        <img src="/assets/svg/right-arrow.svg" alt="go to my projects">
      </a>
    </h4>
    <div class="md:flex md:justify-between">
      <ArticleBlock name="New project 1" link="#"></ArticleBlock>
      <ArticleBlock name="New project 2" link="#"></ArticleBlock>
      <ArticleBlock name="New project 3" link="#"></ArticleBlock>
    </div>
  </div>

</div>

  <div class="md:hidden my-16 m-12 flex justify-between">
    <a class="h-8 w-24 rounded-full bg-theme text-white leading-loose text-center" rel=prefetch href="about-me">About Me</a>
    <a class="h-8 w-24 rounded-full bg-theme text-white leading-loose text-center" rel=prefetch href="contact-me">Contact Me</a>
  </div>

  <div class="hidden md:flex justify-center">
    <div class="my-16 w-640 flex justify-between">
      <a class="h-8 w-24 rounded-full bg-theme text-white leading-loose text-center" rel=prefetch href="about-me">About Me</a>
      <a class="h-8 w-24 rounded-full bg-theme text-white leading-loose text-center" rel=prefetch href="contact-me">Contact Me</a>
    </div>
  </div>
