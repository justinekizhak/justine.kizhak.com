<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
</style>

<svelte:head>
	<title>{post.title} | Justine Kizhakkinedath</title>
</svelte:head>

<div class="">
<div class="">
  <span class="block text-xl">{post.title}</span>
  <span class="block text-gray-600 py-2">Justine kizhakkinedath</span>
  <span class="block text-gray-700 pb-2">{post.printDate} ~ {post.printReadingTime}</span>
</div>

<article class="text-base">
  {@html post.html}
</article>
</div>
