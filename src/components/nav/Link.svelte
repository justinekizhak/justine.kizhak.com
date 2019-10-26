<script>
 export let url = '#';
</script>

<div class="text-center justify-center text-main bg-white hover:shadow-main hover:text-white hover:bg-main">
    <a href="{url}" class="w-24 h-8 block no-underline leading-loose hover:text-white">
        <slot></slot>
    </a>
</div>
