<script>
 import { fadeIn } from "../components/pageFade.js";
</script>

<div in:fadeIn id="content-layout">
    <div class="md:hidden m-12 mt-16 pt-4">
        <slot></slot>
    </div>

    <div class="hidden md:flex justify-center mb-12 mt-16 pt-4">
        <div class="w-640">
            <slot></slot>
        </div>
    </div>

</div>
