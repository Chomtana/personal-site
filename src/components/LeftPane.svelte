<script>
  import Image from "svelte-image";
import LeftPaneNavItem from "./LeftPaneNavItem.svelte";
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
    margin-bottom: 12px;
  }

  .social-container {
    display: flex;
    justify-content: space-around;
  }

  .social-button :global(*) {
    width: 30px; 
    height: 30px;
  }

  .nav-container {
    margin-left: -16px;
    margin-right: -16px;
    margin-top: 24px;
    border-top: 1px solid #D4AC0D;
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
    <div>Full stack dev, Data sci, AI, ML</div>
  </div>

  <SocialBar></SocialBar>

  <!-- Navigation pane -->
  <nav class="nav-container">
    <LeftPaneNavItem active={true}>
      <div slot="icon" class="image-circle"><Image src="/images/myself.jpg" width={36} height={36} /></div>
      <div slot="content">Summary / Search</div>
    </LeftPaneNavItem>

    <LeftPaneNavItem>
      <div slot="icon"><Image src="/images/icons/work.png" width={36} height={36} /></div>
      <div slot="content">Work experience</div>
    </LeftPaneNavItem>

    <LeftPaneNavItem>
      <div slot="icon"><Image src="/images/icons/rank.png" width={36} height={36} /></div>
      <div slot="content">Competitions / Events</div>
    </LeftPaneNavItem>

    <LeftPaneNavItem>
      <div slot="icon"><Image src="/images/icons/education.png" width={36} height={36} /></div>
      <div slot="content">Education</div>
    </LeftPaneNavItem>

    <LeftPaneNavItem>
      <div slot="icon"><Image src="/images/myself.jpg" width={36} height={36} /></div>
      <div slot="content">Skills</div>
    </LeftPaneNavItem>
  </nav>
</div>
