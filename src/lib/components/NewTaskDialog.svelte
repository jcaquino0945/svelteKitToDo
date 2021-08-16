<script lang="ts">
    import { taskService } from '../services/taskService';
    import { Task } from '../models/task';
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();

    let newTask = new Task();
    let open = false;

    function openModal() {
        open = true;
    }

    function closeModal() {
        open = false;
    }

    function addTask() {
        taskService.add(newTask);
        sayHello();
        //clear binded fields
        newTask.title = '';
        newTask.description = '';
        //close modal after clear
        closeModal();
    }

    function sayHello() { //change naming convetion (ex. onTaskAdded)
		  dispatch('message', {
			  text: 'Added New Task!'
		  });
	  }

</script>

<div class="addIcon">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" on:click={() => openModal()}>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
</div>


{#if open == true}
<div class="modal-container" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="modal-center">
      <div class="modal-overlay" aria-hidden="true"></div>
      <span class="modal-container-spacing" aria-hidden="true">&#8203;</span>
      <div class="modal">
        <div class="modal-bg">
          <div class="modal-header">
            <div class="modal-header-icon">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="modal-header-title">
              <h3 id="modal-title">
                Add New Task
              </h3>
              <div class="mt-2">
                <p>
                  Input the title and description of your new task!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-form-container">
            <div class="modal-form">
              <div class="mb-4">
                <label for="title">
                  Title
                </label>
                <input id="title" type="text" placeholder="My New Task" bind:value={newTask.title}>
                {#if newTask.title == ''}<!-- unchecked -->
                <p class="error-msg">Please enter the title of your task.</p>{/if} <!-- find form validators-->
              </div>
              <div class="mb-4">
                <label for="description">
                  Description
                </label>
                <input id="description" type="text" placeholder="Description Of My New Task" bind:value={newTask.description}>
                {#if newTask.description == ''}
                <p class="error-msg">Please enter the description of your task.</p>{/if} <!-- find form validators-->
              </div>
            </div>
          </div>
        <div class="modal-buttons">
          <button type="button" class="addBtn" disabled='{newTask.title == '' && newTask.description == ''}' on:click={() => addTask()}>
            Add New Task
          </button>
          <button type="button" class="cancelBtn" on:click={() => closeModal()}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
.modal-container {
    @apply fixed z-10 inset-0 overflow-y-auto;
}
.modal-center {
    @apply flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0 sm:block;
}
.modal-overlay {
    @apply fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity;
}
.modal-container-spacing {
    @apply hidden sm:inline-block sm:align-middle sm:h-screen;
}
.modal {
    @apply inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full;
}
.modal-bg {
    @apply bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4;
}
.modal-header {
    @apply sm:flex sm:items-start;
}
.modal-header-icon {
    @apply mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10;
}
.modal-header-title {
    @apply mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left;
}
.modal-header-title h3 {
    @apply text-lg leading-6 font-medium text-gray-900;
}
.modal-header-title p {
    @apply text-sm text-gray-500;
}
.modal-form-container {
    @apply w-full h-full;
}
.modal-form {
    @apply bg-white rounded px-8 pt-6 pb-8;
}
.modal-form label {
    @apply block text-gray-700 text-sm font-bold mb-2;
}
.modal-form input {
    @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none;
}
.modal-form .error-msg {
    @apply text-red-500 text-xs italic;
}
.modal-buttons {
    @apply bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse;
}
.addBtn {
    @apply w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm;
}
.cancelBtn {
    @apply mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm;
}
.addIcon {
  @apply h-8 w-8 z-50 right-4 bottom-5 text-white fixed bg-blue-500 rounded-full bg-clip-content bg-cover flex justify-center items-center;
}
</style>