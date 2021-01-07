<script context="module">
  export let COMPETITIONS = [
    {
      title: "13th Thailand Olympaid in Informatics (TOI13)",
      reward: "Silver Medal",
      description: "An thailand olympic competition focusing in algorithm. Passed into a camp before selecting thailand representative to participate in International Olympaid in Informatics (IOI).",
      // website: "https://kaokonlakao.com",
      stacks: ["algorithm", "c++"],
      level: 3,
    },
    {
      title: "Shopee Code League 2020 (Team xXxThailandInwZaxXx)",
      reward: "4th Place of Student Category",
      description: "The biggest 2-month online data science, data analytics and algorithm in asia.",
      website: "https://careers.shopee.sg/codeleague",
      level: 3,
    },
    {
      title: "13th FSTT Chatbot Competition",
      reward: "First place",
      description: "A thailand chatbot competition organized by G-Able, FSTT and TOT.",
      website: "https://contest.thaifstt.org",
      level: 3,
    },
    {
      title: "Startup Thailand League 2019",
      reward: "Accepted for demo day",
      description: "A biggest startup competition for university students in thailand.",
      level: 3,
    },
    {
      title: "PyCon Thailand 2019 Staff",
      reward: "Web Design & Maintenance Support",
      description: "A thailand biggest conference for python programming language",
      website: "https://2019.th.pycon.org/staff",
      level: 2,
    },
    {
      title: "Christmas Codewar 2020",
      reward: "First place",
      description: "A annually speed coding competition organized by a member of PyCon Thailand community.",
      website: "https://www.facebook.com/events/378389163599006/",
      level: 2,
    },
    {
      title: "Christmas Codewar 2019",
      reward: "First place",
      description: "A annually speed coding competition organized by a member of PyCon Thailand community.",
      website: "https://www.ticketmelon.com/codewarfederation/christmascodewar2019",
      level: 2,
    },
    {
      title: "Christmas Codewar 2018",
      reward: "First place",
      description: "A annually speed coding competition organized by a member of PyCon Thailand community.",
      website: "https://www.facebook.com/events/the-company-bangkok/286045502037500/",
      level: 2,
    },
    {
      title: "Data Science Hackathon 2018 by RISE",
      description: "A data science hackathon organized by RISE.",
      website: "https://www.facebook.com/datarockie/posts/2383280655018831/",
      level: 1,
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