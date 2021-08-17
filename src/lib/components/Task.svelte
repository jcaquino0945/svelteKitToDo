<script lang="ts">
    import { taskService } from '../services/taskService';
    import type { Task } from '../models/task';
    import { createEventDispatcher } from 'svelte';
    import  CommentDialog from './CommentDialog.svelte';
    import TaskView from './TaskView.svelte';
    export let task;

    const dispatch = createEventDispatcher();
    
    function deleteTask(task: Task) : Task {
        taskService.deleteTask(task)
        dispatchMsg();
        return task;
    }

    function checkTask(task : Task) : Task {
        taskService.checkTask(task)
        dispatchMsg();
        return task;
    }

    function unCheckTask(task : Task) : Task {
        taskService.unCheckTask(task)
        dispatchMsg();
        return task;
    }

    function dispatchMsg() {
		dispatch('message', {
			text: 'Updated Task Status!'
		});
	}
</script>

<div class="task">
<div class="task-container">
    <div class="task-container-left">
        {#if task.status == 'Pending'}<!-- unchecked -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click={() => checkTask(task)}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        {:else if task.status == 'Completed'}<!-- checked -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor" on:click={() => unCheckTask(task)}>
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
          {/if}
    </div>
    <div class="task-container-mid">
        <div class="description">
            {#if task.status == 'Pending'}<!-- unchecked -->
            <h3 class="description-title">{task.title}</h3>
            <p class="description-info">{task.description}</p>
            {:else if task.status == 'Completed'}<!-- checked -->
            <h3 class="description-title-checked">{task.title}</h3>
            <p class="description-info-checked">{task.description}</p>
            {/if}
        </div>
        <div class="comment">
            {#if task.comments.length != 0}<!-- unchecked -->
                {#if task.comments.length == 1}
                <p><span class="comment-author">Miguel Aquino </span>{task.comments[0]}</p>
                {/if}
                {#if task.comments.length == 2}
                    {#each {length: 2} as _, i}
                    <p><span class="comment-author">Miguel Aquino </span>{task.comments[i]}</p>
                    {/each}
                {/if}
                {#if task.comments.length > 2}
                    {#each {length: 2} as _, i}
                    <p><span class="comment-author">Miguel Aquino </span>{task.comments[i]}</p>
                    {/each}
                    <TaskView task={task}></TaskView>
                {/if}
            {/if}
        </div>
    </div>
    <div class="task-container-right">
        {#if task.comments.length == 0}
        <p>0 comments</p>
        {:else if task.comments.length != 0}
        <p>{task.comments.length} comments</p>
        {/if}
    </div>
    <div class="task-container-right">
        <CommentDialog taskInfo={task} on:message={dispatchMsg}></CommentDialog>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-1" viewBox="0 0 20 20" fill="currentColor" on:click={() => deleteTask(task)}>
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
        </svg>
    </div>
</div>
<!--
<div class="comment-container">
    <div class="comment-container-mid">
        {#each task.comments as comments}
        <p><span class="comment-author">Miguel Aquino </span>{comments}</p>
        {/each}
    </div>
</div>
-->
</div>

<style lang="postcss">
.task {
    @apply shadow mb-1;
}
.task-container {
    @apply flex justify-center items-center py-2 ;
}

.task-container-left {
    @apply w-1/6 flex justify-center items-center pl-7;
}
.task-container-mid {
    @apply w-4/6 flex justify-start items-start flex-col;
}
.description {
    @apply h-2/3;
}
.description-title {
    @apply text-xl font-medium;
    font-family: 'Antonio', sans-serif;
}
.description-title-checked {
    @apply text-xl font-medium line-through;
    font-family: 'Antonio', sans-serif;
}
.description-info {
    @apply text-sm mt-1;
    font-family: 'Abel', sans-serif;
}
.description-info-checked {
    @apply text-sm line-through mt-1;
    font-family: 'Abel', sans-serif;
}
.comment {
     @apply mt-2 h-1/3 text-sm;
}
.comment-author {
    @apply font-bold pr-4;
    font-family: 'Abel', sans-serif;
}

.task-container-right {
    @apply w-1/6 flex justify-center items-center pr-7;
}
.task-section .text-base {
    font-family: 'Antonio', sans-serif;
}

.task-section .text-sm {
    font-family: 'Abel', sans-serif;
}
.task-section>div:nth-child(even){
    background-color:rgb(243, 243, 243);
}
</style>
