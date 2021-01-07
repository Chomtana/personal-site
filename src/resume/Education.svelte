<script context="module">
  export let EDUCATION = [
    {
      title: "Chulalongkorn University",
      major: "Computer Engineering",
      gpa: 3.86,
      from: new Date(2018, 8, 1),
      to: new Date(2022, 5, 1),
      website: "https://www.chula.ac.th/",
      level: 3,
      projects: [
        {
          title: "Practice Human Protein Atlas Image Classification",
          description: "Pratice a multi-label image classification kaggle competition.",
          website: "https://www.kaggle.com/c/human-protein-atlas-image-classification",
          stacks: ["data-science", "computer-vision", "machine-learning"],
        },
        {
          title: "Ja Boom Mine Game",
          description: "A game developed using java. Craft item and use your sword or place bomb to kill enemies.",
          website: "https://github.com/Chomtana/ProgMeth-Project",
          stacks: ["game", "java"],
        },
        {
          title: "CUBlood registration system",
          description: "Frontend and backend for CUBlood registration system.",
          website: "https://cublood.clubs.chula.ac.th",
          stacks: ["react", "loopback"],
        },
      ]
    },
    {
      title: "Kanchanapisek Wittayalai Nakhon Pathom School",
      major: "Middle and High School",
      gpa: 3.93,
      from: new Date(2012, 5, 1),
      to: new Date(2018, 3, 1),
      website: "http://kjn.ac.th/",
      level: 2,
      projects: [
        {
          title: "Speed analyser",
          description: "A high accuracy tool for analysing running time and speed.",
          website: "https://github.com/Chomtana/speed-analyser-web",
          stacks: ["embedding-system", "web"]
        },
        {
          title: "เรื่องของเรา...ไม่รู้ไม่ได้แล้ว",
          description: "An education media focused on learning about health and sexual.",
          website: "https://github.com/Chomtana/highschool-web-anamai",
          stacks: ["web"]
        },
        {
          title: "Force Simulator",
          description: "An education physic simulation focused on force, fiction and slope.",
          website: "https://github.com/Chomtana/force-simulator",
          stacks: ["web"],
        }
      ],
    },
    {
      title: "Konpitacksuksa School",
      major: "Elementary School",
      from: new Date(2003, 5, 1),
      to: new Date(2012, 3, 1),
      website: "http://www.kornpitack.ac.th",
      level: 1,
      projects: [],
    }
  ]
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
