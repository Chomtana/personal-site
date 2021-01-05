<script>
  import Image from "svelte-image"
  import SeeMore from "../components/SeeMore.svelte";
  import Questions from "./Questions.svelte";
  import Timeline from "../components/Timeline.svelte"
  import WorkingExperience from "./WorkingExperience.svelte";
</script>

<style>

</style>

<div>
  <div class="topic-block yellow-block">
    <Questions></Questions>

    <WorkingExperience></WorkingExperience>

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
