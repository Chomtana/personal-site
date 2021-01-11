<script>
  import Image from "svelte-image";
import Chat from "./Chat.svelte";
import EBusinessCard from "./EBusinessCard.svelte";
</script>

<style>
  .right-pane-container {
    background-color: var(--primary);
    width: 280px;
    flex-basis: 280px;
    height: 100%;
    padding: 16px;

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto;
  }

  .chat-container {
    overflow-y: auto;
  }
</style>

<div class="right-pane-container">
  <div class="e-business-card-container">
    <EBusinessCard></EBusinessCard>

    <hr/>
  </div>

  <div class="chat-container">
    <Chat></Chat>
  </div>
</div>
