<script lang="ts">
    import { onMount } from 'svelte';
    import { taskService } from '../services/taskService';
    import Task from './Task.svelte'
    import NewTaskDialog from './NewTaskDialog.svelte'
    import {dndzone} from "svelte-dnd-action";
    import {flip} from "svelte/animate";
    
    let items = taskService.getAll();;

    onMount(async () => {
        
		items = taskService.getAll();
        taskSort();
    })

    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
        taskSort();
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
        console.log(e.detail.items)
        taskSort();
    }

    function taskSort() {
        items.sort((a,b) => (a.status < b.status) ? 1 : ((b.status < a.status) ? -1 : 0));
    }

    function refresh(event) {
		items = taskService.getAll();
        taskSort();
        console.log(event.detail.text);
	}

</script>

<div class="task-section" use:dndzone="{{items, flipDurationMs}}" on:consider="{handleDndConsider}" on:finalize="{handleDndFinalize}">
    {#each items as item(item.id)}
        <Task task={item} on:message={refresh} ></Task>
    {/each}
</div>
<NewTaskDialog on:message={refresh}></NewTaskDialog>

<style lang="postcss">
.task-section {
    @apply h-auto w-full;
}

</style>
