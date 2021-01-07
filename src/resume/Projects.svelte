<script context="module">
  export let COMPETITIONS = [
    {
      title: "13th Thailand Olympaid in Informatics (TOI13)",
      reward: "Silver Medal",
      description: "An thailand olympic competition focusing in algorithm",
      website: "https://kaokonlakao.com",
      stacks: ["algorithm", "c++"],
      level: 3,
    },
    {
      title: "13th FSTT Chatbot Competition",
      reward: "First place",
      description: "A thailand chatbot competition organized by G-Able, FSTT and TOT",
      website: "https://contest.thaifstt.org",
      level: 3,
    },
    {
      title: "Startup Thailand League 2019",
      reward: "Accepted for demo day",
      description: "A biggest startup competition for university students in thailand",
      level: 3,
    },
    {
      title: "Christmas Codewar 2020",
      reward: "First place",
      description: "A annually speed coding competition organized by a member of PyCon Thailand community",
      website: "https://www.facebook.com/events/378389163599006/",
      level: 2,
    },
    {
      title: "Christmas Codewar 2019",
      reward: "First place",
      description: "A annually speed coding competition organized by a member of PyCon Thailand community",
      website: "https://www.facebook.com/events/378389163599006/",
      level: 2,
    },
    {
      title: "Christmas Codewar 2018",
      reward: "First place",
      description: "A annually speed coding competition organized by a member of PyCon Thailand community",
      website: "https://www.facebook.com/events/378389163599006/",
      level: 2,
    },
  ]
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