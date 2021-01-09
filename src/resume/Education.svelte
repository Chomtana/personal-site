<script context="module">
  import {EDUCATION} from "../utils/resumeData"
</script>

<script>
  import Timeline from "../components/Timeline.svelte"
  import SeeMore from "../components/SeeMore.svelte";
  import TimelineBranch from "../components/TimelineBranch.svelte";
  import Projects from "./Projects.svelte";

  export let educations = EDUCATION;
</script>

<style>

</style>

{#each educations as education}
  <div class={`${education.level >= 3 ? 'above-fold' : ''}`}>
    <Timeline level={education.level}>
      <div class="timeline-title">
        <a href={education.website} target="_blank">{education.title}</a>
      </div>
      <div class="timeline-subtitle">{education.major}</div>
      {#if education.gpa}
        <div class="timeline-subtitle">GPA: {education.gpa} / 4.00</div>
      {/if}
      <div>{education.from.getFullYear()} - {education.to.getFullYear()}</div>
      <!-- <div>{@html education.note}</div> -->

      {#if education.projects && education.projects.length > 0}
        <SeeMore text="See projects while studying..." buttonClass="projects-see-more">
          <Projects projects={education.projects} branchMode={true}></Projects>
        </SeeMore>
      {/if}
    </Timeline>
  </div>
{/each}
