<script context="module">
  import {COMPETITIONS} from "../utils/resumeData"
</script>

<script>
  import Timeline from "../components/Timeline.svelte"
  import TimelineBranch from "../components/TimelineBranch.svelte";
import Project from "./Project.svelte";

  export let projects = COMPETITIONS, branchMode = false;
</script>

{#each projects as project}
  <div class={`${!branchMode && project.level >= 3 ? 'above-fold' : ''}`}>
    {#if branchMode}
      <TimelineBranch>
        <Project {project}></Project>
      </TimelineBranch>
    {:else}
      <Timeline level={project.level}>
        <Project {project}></Project>
      </Timeline>
    {/if}
  </div>
{/each}