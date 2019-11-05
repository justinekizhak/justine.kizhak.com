<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`project/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
  import { fadeIn } from "../../components/pageFade.js";
	export let post;
</script>

<style>
</style>

<svelte:head>
	<title>{post.title} | Justine Kizhakkinedath</title>
</svelte:head>

<div in:fadeIn class="">
<div class="mb-8">
  <h1 class="block">{post.title}</h1>
  <span class="block text-gray-700 pb-2">{post.printDate} ~ {post.printReadingTime}</span>
</div>

<hr>

<article class="text-base relative">
  {@html post.html}
</article>
</div>
