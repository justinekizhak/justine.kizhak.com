<script context="module">
 export async function preload() {
		 const posts = await this.fetch(`blog.json`).then(r => r.json());
		 return { posts };
 }
</script>

<script>
	export let posts;
</script>

<style>
</style>

<svelte:head>
	<title>Blog | Justine kizhakkinedath</title>
</svelte:head>

<h1 class="block ">Blog</h1>

<div class="">
  {#each posts as post, index}
    {#if index}
      <hr/>
    {/if}
    <div class="my-8">
      <h2 class="text-gray-900 mb-4">
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <p class="my-4 text-gray-800">{post.excerpt}</p>
        <span class="text-gray-600">— {post.printDate}</span>
    </div>
  {/each}
</div>
