<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
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

<span class="block text-2xl ">Blog</span>

<div class="">
  {#each posts as post, index}
    {#if index}
      <hr class="border-gray-600" />
    {/if}
    <div class="my-4">
      <h2 class="text-xl text-gray-900 mb-2">
        <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
      </h2>
      <p class="my-2 text-gray-800">{post.excerpt}</p>
        <span class="text-gray-600">— {post.printDate}</span>
    </div>
  {/each}
</div>
