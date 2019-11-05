<script>
 let active = false;
 function myFunction(x) {
     active = !active;
 }
</script>

<style>
.bar {
    height: 2px;
    transition: 0.2s;
}

.bar1-active {
    -webkit-transform: translate(0px, 7px) rotate(45deg);
    transform: translate(0px, 7px) rotate(45deg);
}

 .bar2-active {
     opacity: 0;
 }

.bar3-active {
    -webkit-transform: translate(0px, -7px) rotate(-45deg);
    transform: translate(0px, -7px) rotate(-45deg);
}

 #menu-container:hover #menu-bar {
     @apply bg-white;
 }
</style>

<div id="menu-container" class="w-8 h-8 flex bg-gray-100 hover:shadow-main hover:bg-main" on:click={myFunction}>
    <div class="w-4 h-4 m-2 flex flex-col justify-between">
        <div id="menu-bar" class="bar bg-main w-4 {active ? 'bar1-active' : '' }"></div>
        <div id="menu-bar" class="bar bg-main w-4 {active ? 'bar2-active' : '' }"></div>
        <div id="menu-bar" class="bar bg-main w-4 {active ? 'bar3-active' : '' }"></div>
    </div>
</div>
