<script lang="ts">
    import { onMount } from 'svelte'
    import { toastService } from '$lib/services/toastService';
	import { fade } from 'svelte/transition';

    export let name;
    let currentDate = new Date();
    let notifPrompt = false;

    onMount(() => {
        toastService.subscribe((message) => {
            //alert(message);
            setTimeout(function() {
                notifPrompt = true;
                setTimeout(function() {
                    notifPrompt = false;
                }, 2500);
            }, 300);
        });
    })
</script>

{#if notifPrompt == true}
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
         You have uploaded a comment!
       </div>
     </div>
</div>
{/if}

<div class="banner">
    <div class="banner-overlay">
        <div class="banner-container">
            <h1>What Will You Do Today {name}?</h1>
            <p>{currentDate}</p>
        </div>
    </div>
</div>

<style lang="postcss">
.banner {
    @apply bg-cover bg-no-repeat h-80 w-full;
    background-image: url('../../../static/assets/images/80622072_818311235304313_8533843013643087754_n.jpg');
}
.banner-overlay {
    @apply h-full w-full;
    background-color: #0568c5ad;
}
.banner h1 {
    @apply text-4xl text-white font-thin mb-2;
    font-family: 'Antonio', sans-serif;
}
.banner p {
    @apply text-xl text-white font-thin mb-2;
    font-family: 'Abel', sans-serif;
}
.banner-container {
    @apply container mx-auto h-full flex justify-end px-4  flex-col;
}
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
