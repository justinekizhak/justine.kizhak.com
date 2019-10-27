
<script>
 export let title = 'Group title';
 export let link = '#';
 import Arrow from './arrow.svelte';
</script>

  <div class="py-10 border-solid border-b border-gray-600">
    <h4 class="mb-8 border-b border-gray-500 md:w-72">
      <a class="flex no-underline items-center" href="{ link }">
        <span class="">{ title }</span>
      <Arrow/>
      </a>
    </h4>
    <div class="md:flex md:justify-between">
        <slot></slot>
    </div>
  </div>
