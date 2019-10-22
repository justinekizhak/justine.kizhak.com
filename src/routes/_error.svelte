<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<svelte:head>
	<title>{status} | Justine kizhakkinedath</title>
</svelte:head>

<div class="m-24">
  <h1 class="text-4xl mb-2">{status}</h1>

  <p class="mb-8">{error.message}</p>

  {#if dev && error.stack}
	<pre>{error.stack}</pre>
  {/if}

</div>
