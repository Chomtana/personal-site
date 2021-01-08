<script>
import SocialBar from "./SocialBar.svelte";
</script>

<style>
  .bottom-pane-container {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;

    padding: 10px;

    display: flex;

    background-color: var(--primary);
    border-top: 1px solid var(--primary-dark);
  }

  .bottom-pane-container > :global(.social-container) {
    width: 100%;
  }
</style>

<div class="bottom-pane-container">
  <SocialBar></SocialBar>
</div>