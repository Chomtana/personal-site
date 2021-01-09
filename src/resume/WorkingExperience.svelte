<script context="module">
  import {WORKING_EXPERIENCE} from "../utils/resumeData"
</script>

<script>
  import Timeline from "../components/Timeline.svelte"
  import SeeMore from "../components/SeeMore.svelte";
  import TimelineBranch from "../components/TimelineBranch.svelte";
  import Projects from "./Projects.svelte";

  export let workings = WORKING_EXPERIENCE;
</script>

<style>

</style>

{#each workings as working}
  <div class={`${working.level >= 3 ? 'above-fold' : ''}`}>
    <Timeline level={working.level}>
      <div class="timeline-title">{working.title}</div>
      <div>At <a href={working.website} target="_blank">{working.at}</a></div>
      <div>{working.from.getFullYear()} - {working.to.getFullYear() == new Date().getFullYear() ? "Now" : working.to.getFullYear()}</div>
      <div>{@html working.note}</div>

      {#if working.projects && working.projects.length > 0}
        <SeeMore text="See projects from working..." buttonClass="projects-see-more">
          <Projects projects={working.projects} branchMode={true}></Projects>
        </SeeMore>
      {/if}
    </Timeline>
  </div>
{/each}
