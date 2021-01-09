<script>
  import Image from "svelte-image"
  import SeeMore from "../components/SeeMore.svelte";
  import Questions from "./Questions.svelte";
  import Timeline from "../components/Timeline.svelte"
  import WorkingExperience from "./WorkingExperience.svelte";
  import Projects from "./Projects.svelte";
  import Skills from "./Skills.svelte";
import Education from "./Education.svelte";
import LeftPane from '../components/LeftPane.svelte';
</script>

<style>

</style>

<div class="top-bottom-body-padding">
  <div class="d-mobile">
    <LeftPane mobileMode={true}></LeftPane>
  </div>

  <div class="topic-block yellow-block">
    <div class="section-block" id="questions">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/question-64.png" width={28} height={28} alt="Question" /></div>
        <h2>Choose your question</h2>
      </div>

      <Questions></Questions>
    </div>

    <div class="section-block" id="working-experience">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/work-64.png" width={32} height={32} alt="Work" /></div>
        <h2>Working experience</h2>
      </div>

      <SeeMore>
        <WorkingExperience></WorkingExperience>
      </SeeMore>
    </div>

    <div class="section-block" id="projects">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/rank-64.png" width={32} height={32} alt="Competition / Projects" /></div>
        <h2>Competitions / Projects</h2>
      </div>

      <SeeMore>
        <Projects></Projects>
      </SeeMore>
    </div>

    <div class="section-block" id="education">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/education-64.png" width={32} height={32} alt="Education" /></div>
        <h2>Education</h2>
      </div>

      <SeeMore>
        <Education></Education>
      </SeeMore>
    </div>

    <div class="section-block" id="skills">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/skill-64.png" width={32} height={32} alt="Skill" /></div>
        <h2>Skills</h2>
      </div>

      <Skills></Skills>
    </div>
  </div>
</div>
