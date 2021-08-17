<script lang="ts">
    import { onMount } from 'svelte';
    import { taskService } from '../services/taskService';
    import Task from './Task.svelte'
    import NewTaskDialog from './NewTaskDialog.svelte'
    import {dndzone} from "svelte-dnd-action";

    let myTasks = [];

    onMount(async () => {
		myTasks = taskService.getAll();
        taskSort();
    })

    function taskSort() {
        myTasks.sort((a,b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0));
    }

    function refresh(event) {
		myTasks = taskService.getAll();
        taskSort();
        console.log(event.detail.text);
	}

</script>

<div class="task-section">
    {#each myTasks as task}
        <Task task={task} on:message={refresh}></Task>
    {/each}
</div>
<NewTaskDialog on:message={refresh}></NewTaskDialog>

<style lang="postcss">
.task-section {
    @apply h-auto;
}
</style>
