<script>
  import Image from "svelte-image";
import EBusinessCard from "./EBusinessCard.svelte";
</script>

<style>
  .right-pane-container {
    background-color: var(--primary);
    width: 280px;
    flex-basis: 280px;
    height: 100%;
    padding: 16px;
  }
</style>

<div class="right-pane-container">
  <EBusinessCard></EBusinessCard>
</div>
