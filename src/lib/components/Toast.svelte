<script>
    import { fade } from 'svelte/transition';

    export let notif;
</script>

<div class="notif-container" transition:fade>
    <!-- Toast Notification Success-->
    <div class="notif">
        <!-- icons -->
       <div class="notif-icons">
         <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"/>
         </svg>
       </div>
       <!-- message -->
       <div class="notif-text">
         {notif}
       </div>
     </div>
</div>

<style lang="postcss">
.notif-container {
    @apply flex flex-col justify-center fixed w-full;
}
.notif {
    @apply flex items-center bg-green-500 border-l-4 border-green-700 py-2 px-3 shadow-md mb-2;
}
.notif-icons {
    @apply text-green-500 rounded-full bg-white mr-3;
}
.notif-text {
    @apply text-white max-w-xs;
}
</style>