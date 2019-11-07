<script>
 import { fadeIn } from "../components/pageFade.js";
</script>

<div in:fadeIn id="content-layout">
    <div class="m-12 mt-16 pt-4 md:flex justify-center">
        <div class="md:w-640">
            <slot></slot>
        </div>
    </div>
</div>
