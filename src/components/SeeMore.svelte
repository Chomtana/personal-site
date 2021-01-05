<script>
  export let active = false, text = "See more...";

  function makeShow() {
    active = true;
  }
</script>

<style>
  .see-more-container > :global(*) {
    display: none;
  }

  .see-more-container > :global(.above-fold) {
    display: block;
  }

  .see-more-container.below-fold-show > :global(*) {
    display: block;
  }
</style>

<span class={`${active ? 'below-fold-show' : ''} see-more-container`}>
  <slot></slot>
</span>

{#if !active}
  <button class="btn btn-primary" on:click={makeShow}>
    {text}
  </button>
{/if}