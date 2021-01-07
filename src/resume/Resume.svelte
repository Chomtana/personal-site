<script>
  import Image from "svelte-image"
  import SeeMore from "../components/SeeMore.svelte";
  import Questions from "./Questions.svelte";
  import Timeline from "../components/Timeline.svelte"
  import WorkingExperience from "./WorkingExperience.svelte";
  import Projects from "./Projects.svelte";
</script>

<style>

</style>

<div>
  <div class="topic-block yellow-block">
    <Questions></Questions>

    <div class="section-block">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/work-64.png" width={28} height={28} alt="Work" /></div>
        <h2>Working experience</h2>
      </div>

      <SeeMore>
        <WorkingExperience></WorkingExperience>
      </SeeMore>
    </div>

    <div class="section-block">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/work-64.png" width={28} height={28} alt="Work" /></div>
        <h2>Competitions / Events</h2>
      </div>

      <SeeMore>
        <Projects></Projects>
      </SeeMore>
    </div>

    <div class="section-block">
      <div class="title-with-icon">
        <div class="resume-icon"><img src="/g/images/icons/education-64.png" width={28} height={28} alt="Education" /></div>
        <h2>Education</h2>
      </div>
      <div>Studying computer engineering</div>
      <div>At Chulalongkorn University</div>

      <div style="margin-top: 8px;">
        <SeeMore>
          <div>Hello</div>
        </SeeMore>
      </div>
    </div>
  </div>
</div>
