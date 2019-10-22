<script context="module">
 export function preload({ params, query }) {
		 return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			   return { posts };
		 });
 }
</script>

<script>
 import ArticleBlock from "./article-block.svelte";
 import ArticleGroup from "./article-group.svelte";
</script>

<ArticleGroup title="Read my latest blog" link="blog" >
    <ArticleBlock name="New blog 1" link="#"></ArticleBlock>
    <ArticleBlock name="New blog 2" link="#"></ArticleBlock>
    <ArticleBlock name="New blog 3" link="#"></ArticleBlock>
</ArticleGroup>

<ArticleGroup title="Read my latest project" link="project" >
    <ArticleBlock name="New project 1" link="#"></ArticleBlock>
    <ArticleBlock name="New project 2" link="#"></ArticleBlock>
    <ArticleBlock name="New project 3" link="#"></ArticleBlock>
</ArticleGroup>
