<script>
  export let name = 'Default blog title';
  export let link = '#';
</script>


<div class="md:hidden w-full mb-8">
  <span class="text-lg">{name}</span>
  <div class="bg-gray-100 my-4 md:pr-4 h-40 overflow-hidden">
    <slot>
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
    </slot>
  </div>
  <div class="flex justify-end mb-4">
    <a class="button-pill h-8 w-24 rounded-full bg-theme text-white leading-loose text-center" rel=prefetch href="{link}">Read more</a>
  </div>
</div>



<div class="hidden md:block w-60">
  <span class="text-lg">{name}</span>
  <div class="bg-gray-100 my-4 md:pr-4 h-40 overflow-hidden">
    <slot>
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
      Risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Dolor sit amet, consectetur adipiscing elit duis tristique sollicitudin nibh sit amet!
    </slot>
  </div>
  <div class="flex justify-end mb-4">
    <a class="button-pill h-8 w-24 rounded-full bg-theme text-white leading-loose text-center" rel=prefetch href="{link}">Read more</a>
  </div>
</div>
