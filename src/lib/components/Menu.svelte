<script lang="ts">
    import { onMount } from 'svelte'
    import { toastService } from '$lib/services/toastService';
    import Toast from './Toast.svelte';
    export let name;
    
    let currentDate = new Date();
    let notifPrompt = false;
    let notif;

    onMount(() => {
        toastService.subscribe((message) => {
            //alert(message);
            notif = message;
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
<Toast notif={notif}></Toast>
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
</style>
