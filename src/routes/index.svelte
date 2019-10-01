<script>
	import HeroPattern from "../components/hero-pattern.svelte";
</script>

<svelte:head>
	<title>Home | Justine Kizhakkinedath</title>
</svelte:head>

<style>
  .mh-75 {
    max-height: 75vh;
  }
  .mw-50 {
    max-width: 50vw;
  }

  .hero-background {
    @apply -z-1 w-full;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23247283' fill-opacity='0.36'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}


</style>

<div class="hero-background border-b border-solid border-gray-500 shadow">
<div class="px-12 md:mx-auto mw-1280 md:px-32">
	<div class="py-12 relative height-remaining flex flex-col lg:flex-row justify-between lg:items-center">
		<h1 class="text-xl">
			Hello <br>
			My name is Justine Kizhakkinedath
		</h1>
    <div class="flex justify-end">
      <img class="mh-75 lg:mw-50" alt="hello" src="assets/svg/hello.svg" />
    </div>
	</div>
</div>
</div>


<div class="p-12 md:px-0 md:mx-auto mw-640">
	<p>
	Lorem Ipsum is simply dummy text of the printing and typesetting indu128sry.
	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
	type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
	electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
	sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
	including versions of Lorem Ipsum.
	</p>
</div>
