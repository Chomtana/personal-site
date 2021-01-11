<script>
import { getContext } from "svelte";
import WorkingExperience from "./WorkingExperience.svelte"
import Education from "./Education.svelte"
import Projects from "./Projects.svelte"

import {COMPETITIONS} from "../utils/resumeData"


  let {openModal, closeModal} = getContext('$MODAL');
</script>

<style>
  .questions-container {
    display: flex;
    flex-wrap: wrap;
  }

  .question-item {
    display: block;
    border-radius: 40px;
    background-color: var(--primary-dark);
    padding: 4px;
    padding-left: 12px;
    padding-right: 12px;
    margin-right: 12px;
    margin-top: 8px;
    color: white;

    transition: background 0.25s;

    text-decoration: none;
  }

  .question-item:hover {
    cursor: pointer;
    background-color: var(--primary-darker);
  }
</style>


  
<div class="questions-container">
  <!-- <div class="question-item">
    Why you must hire me?
  </div> -->

  <a class="question-item" href="#skills">
    What are your skills?
  </a>

  <a class="question-item" href="#working-experience">
    Let me see your working experience
  </a>

  <a class="question-item" href="#education">
    Where did you studying/graduated at?
  </a>

  <div class="question-item" on:click={() => openModal('My GPA', Education)}>
    What is your GPA?
  </div>

  <a class="question-item" href="#projects">
    Have you won some competitions?
  </a>

  <div class="question-item" on:click={() => openModal('Volunteer experience', Projects, {projects: COMPETITIONS.filter(c => c.isVolunteer)})}>
    Do you have volunteer experience?
  </div>

  <div class="question-item" on:click={() => openModal('Open source projects', Projects, {projects: COMPETITIONS.filter(c => c.isOpenSource)})}>
    Do you contribute to open source projects?
  </div>
</div>
