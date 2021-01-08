<script>
  import Image from "svelte-image";
import { resumeScrollControl } from "../utils/resumeScrollControl";
  import LeftPaneNavItem from "./LeftPaneNavItem.svelte";
  import SocialBar from "./SocialBar.svelte";

	let windowY, activeId = 'questions';

  $: {
    activeId = resumeScrollControl(windowY)
    // console.log(activeId, windowY)
  }

  export let mobileMode;
</script>

<svelte:window bind:scrollY={windowY}/>

<style>
  .left-pane-container {
    background-color: var(--primary);
    width: 280px;
    flex-basis: 280px;
    height: 100%;
    padding: 16px;
  }

  #chomtana.left-pane-container {
    width: 100%;
    background-color: var(--primary-light);
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
    border-top: 1px solid var(--primary-light);
  }
</style>

<div class="left-pane-container" id={mobileMode ? "chomtana" : "left-pane-container"}>
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
  {#if !mobileMode}
    <nav class="nav-container">
      <LeftPaneNavItem active={activeId == 'questions'} href={"#questions"}>
        <div slot="icon" class="image-circle"><img src="/g/images/icons/question-64.png" width={36} height={36} alt="Questions" /></div>
        <div slot="content">Questions</div>
      </LeftPaneNavItem>

      <LeftPaneNavItem active={activeId == 'working-experience'} href={"#working-experience"}>
        <div slot="icon"><img src="/g/images/icons/work-64.png" width={36} height={36} alt="Work" /></div>
        <div slot="content">Work experience</div>
      </LeftPaneNavItem>

      <LeftPaneNavItem active={activeId == 'projects'} href={"#projects"}>
        <div slot="icon"><img src="/g/images/icons/rank-64.png" width={36} height={36} alt="Rank" /></div>
        <div slot="content">Competitions / Projects</div>
      </LeftPaneNavItem>

      <LeftPaneNavItem active={activeId == 'education'} href={"#education"}>
        <div slot="icon"><img src="/g/images/icons/education-64.png" width={36} height={36} alt="Education" /></div>
        <div slot="content">Education</div>
      </LeftPaneNavItem>

      <LeftPaneNavItem active={activeId == 'skills'} href={"#skills"}>
        <div slot="icon"><img src="/g/images/icons/skill-64.png" width={36} height={36} alt="Skills" /></div>
        <div slot="content">Skills</div>
      </LeftPaneNavItem>
    </nav>
  {/if}
</div>
