<script lang="ts">
    export let task;
    let open = false;

    function triggerModal() {
        open = !open;
    }
</script>

<p class="see-more" on:click={() => triggerModal()}>View all {task.comments.length} comments...</p>

{#if open == true}
<div class="modal-container" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="modal-center">
      <div class="modal-overlay" aria-hidden="true"></div>
      <span class="modal-container-spacing" aria-hidden="true">&#8203;</span>
      <div class="modal">
        <div class="modal-bg">
          <div class="modal-header">
            <div class="modal-header-title">
              <h3 id="modal-title">
                {task.title}
              </h3>
              <div class="mt-2">
                <p>
                  {task.description}
                </p>
              </div>
              <div class="comments-container">
                <h3>
                  Comments:
                </h3>
                {#each task.comments as comments}
                <p><span class="comment-author">Miguel Aquino </span>{comments}</p>
                {/each}
              </div>
            </div>
          </div>
        </div>
        <div class="modal-buttons">
            <button type="button" class="cancelBtn" on:click={() => triggerModal()}>
              Cancel
            </button>
          </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
.see-more {
    @apply text-sm text-gray-500 mt-1;
    font-family: 'Abel', sans-serif;
}
.modal-container {
    @apply fixed z-10 inset-0 overflow-y-auto ;
}
.modal-center {
    @apply flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0;
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
    @apply text-3xl leading-6 font-medium text-gray-900;
    font-family: 'Antonio', sans-serif;
}
.modal-header-title p {
    @apply text-base text-gray-500;
    font-family: 'Abel', sans-serif;
}
.comments-container {
    @apply mt-4;
}
.comments-container h3{
    @apply text-black text-base mb-1;
}
.comment-author {
    @apply font-bold pr-4 text-black;
    font-family: 'Abel', sans-serif;
}
.modal-buttons {
    @apply bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse;
}
.cancelBtn {
    @apply mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm;
}
</style>