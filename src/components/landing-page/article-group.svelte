<script>
  import ArticleBlock from "./article-block.svelte";
</script>

  <div class="py-10 border-solid border-b border-gray-600">
    <h4 class="mb-8 border-b border-gray-500 md:w-72">
      <a class="flex no-underline" href="blog">
        <span class="">Read my recent blogs</span>
        <img src="/assets/svg/right-arrow.svg" alt="go to my blogs">
      </a>
    </h4>
    <div class="md:flex md:justify-between">
      <ArticleBlock name="New blog 1" link="#"></ArticleBlock>
      <ArticleBlock name="New blog 2" link="#"></ArticleBlock>
      <ArticleBlock name="New blog 3" link="#"></ArticleBlock>
    </div>
  </div>
