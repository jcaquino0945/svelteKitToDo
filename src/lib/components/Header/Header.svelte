<script lang="ts">

</script>

<nav class="navbar"> 
    <div class="navbar-menu">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
    </div>
    <div class="navbar-profile">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
    </div>
</nav>

<style lang="postcss">
 .navbar {
    @apply px-4 my-2 flex absolute w-full;
}
.navbar-menu {
    @apply w-1/2 flex justify-start;
}
.navbar-profile {
    @apply w-1/2 flex justify-end;
}
.icon {
    @apply h-6 w-6;
}
</style>