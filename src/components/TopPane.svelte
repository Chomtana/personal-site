<script>
  import Image from "svelte-image";
  import { resumeScrollControl } from "../utils/resumeScrollControl";
  import TopPaneNavItem from "./TopPaneNavItem.svelte"

	let windowY, activeId = 'questions';

  $: {
    activeId = resumeScrollControl(windowY)
    // console.log(activeId, windowY)
  }
</script>

<svelte:window bind:scrollY={windowY}/>

<style>
  .top-pane-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-around;

    background-color: var(--primary);
    border-bottom: 1px solid var(--primary-dark);

    z-index: 1000;
  }
</style>

<div class="top-pane-container">
  <TopPaneNavItem active={activeId == 'chomtana'} href={"#chomtana"}>
    <img src="/g/images/myself-64.jpg" width={32} height={32} alt="Chomtana" style="border-radius: 50%; object-fit: cover;" />
  </TopPaneNavItem>
  
  <TopPaneNavItem active={activeId == 'questions'} href={"#questions"}>
    <img src="/g/images/icons/question-64.png" width={32} height={32} alt="Question" />
  </TopPaneNavItem>

  <TopPaneNavItem active={activeId == 'working-experience'} href={"#working-experience"}>
    <img src="/g/images/icons/work-64.png" width={32} height={32} alt="Work" />
  </TopPaneNavItem>

  <TopPaneNavItem active={activeId == 'projects'} href={"#projects"}>
    <img src="/g/images/icons/rank-64.png" width={32} height={32} alt="Rank" />
  </TopPaneNavItem>

  <TopPaneNavItem active={activeId == 'education'} href={"#education"}>
    <img src="/g/images/icons/education-64.png" width={32} height={32} alt="Education" />
  </TopPaneNavItem>

  <TopPaneNavItem active={activeId == 'skills'} href={"#skills"}>
    <img src="/g/images/icons/skill-64.png" width={32} height={32} alt="Skills" />
  </TopPaneNavItem>
</div>

