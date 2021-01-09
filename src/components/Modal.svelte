<script>
import { setContext } from "svelte";
import { fly } from "svelte/transition"

  let title = "Test", component = null, params = {};

  function openModal(_title, _component, _params = {}) {
    title = _title;
    component = _component;
    params = _params;
  }

  function closeModal() {
    component = null;
  }

  setContext('$MODAL', {
    openModal,
    closeModal,
  });
</script>

<style>
  .modal-backdrop {
    position: fixed;
    background-color: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: var(--primary-light);
    border-radius: 10px;

    width: 95%;
    max-width: 600px;
  }

  .modal-title {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    padding-left: 12px;

    border-bottom: 1px solid var(--primary-darker);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: var(--primary);

    font-size: 18px;
  }

  .modal-body {
    max-height: calc(100vh - 75px);
    overflow-y: auto;
    padding: 12px;
  }

  .close-button {
    margin: -12px;
    width: 36px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-button:hover {
    cursor: pointer;
  }
</style>

<slot></slot>

{#if component}
  <div class="modal-backdrop" transition:fly="{{ y: 200, duration: 250 }}">
    <div class="modal-content">
      <div class="modal-title">
        <div class="title-text">{title}</div>
        <div class="close-button" on:click={() => closeModal()}>X</div>
      </div>
      
      <div class="modal-body">
        <svelte:component this={component} {...params}/>
      </div>
    </div>
  </div>
{/if}
