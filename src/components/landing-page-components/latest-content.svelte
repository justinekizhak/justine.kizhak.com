<!-- <script context="module"> -->
<!-- console.log("content.svelte"); -->
<!-- export function preload({ params, query }) { -->
<!-- console.log("1"); -->
<!-- return this.fetch(`../../routes/blog.json`).then(r => r.json()).then(blogs => { -->
<!-- console.log("2"); -->
<!-- return { blogs }; -->
<!-- }); -->
<!-- } -->
<!-- </script> -->

<!-- <script> -->
<!-- import ArticleBlock from "./article-block.svelte"; -->
<!-- import ArticleGroup from "./article-group.svelte"; -->
<!-- export let blogs; -->
<!-- </script> -->

<div class="my-12">
    <h4 class="font-light">I'm a Computer engineer</h4>
    <h5 class="font-light">I design and create websites, Python apps and other cool stuff.</h5>
</div>

<!-- <ArticleGroup title="Read my latest blog" link="blog" > -->
<!-- <ArticleBlock name="New blog 1" link="#"></ArticleBlock> -->
<!-- <ArticleBlock name="New blog 2" link="#"></ArticleBlock> -->
<!-- <ArticleBlock name="New blog 3" link="#"></ArticleBlock> -->
<!-- </ArticleGroup><!--  --><!--  --><!--  --><!--  --><!--  --><!--  -->

<!-- <ArticleGroup title="Read my latest project" link="project" > -->
<!-- <ArticleBlock name="New project 1" link="#"></ArticleBlock> -->
<!-- <ArticleBlock name="New project 2" link="#"></ArticleBlock> -->
<!-- <ArticleBlock name="New project 3" link="#"></ArticleBlock> -->
<!-- </ArticleGroup> -->

<style>
</style>


<div class="flex justify-around">
    <div class="flex justify-start md:justify-between w-full md:w-640 flex-col md:flex-row border-t-b-600">
        <div class="body-link-container hover:shadow-main">
            <a class="body-link-special" href="project">Read my projects</a>
        </div>
        <div class="body-link-container hover:shadow-main">
            <a class="body-link-special" href="blog">Read my blogs</a>
        </div>
    </div>

</div>
