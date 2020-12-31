<script>
  import Image from "svelte-image";
  import SocialBar from "./SocialBar.svelte";

  export let activePage;
</script>

<style>
  #left-pane-container {
    background-color: var(--primary);
    width: 280px;
    flex-basis: 280px;
    height: 100%;
    padding: 16px;
  }

  .myself-image-container {
    display: flex;
    justify-content: center;
  }

  .myself-image :global(*) {
    border-radius: 50%;
    width: 160px; 
    height: 160px;
    object-fit: cover;
  }

  .name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .social-container {
    display: flex;
    justify-content: space-around;
  }

  .social-button :global(*) {
    width: 30px; 
    height: 30px;
  }
</style>

<div id="left-pane-container">
  <div class="myself-image-container">
    <div class="myself-image">
      <Image
        src="/images/myself.jpg"
        alt="Chomtana's picture"
        width={160}
        height={160}
      />
    </div>
  </div>

  <div class="name-container">
    <h1>Chomtana<br/>Chanjaraswichai</h1>
  </div>

  <SocialBar></SocialBar>
</div>
