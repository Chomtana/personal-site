<script context="module">
  export let WORKING_EXPERIENCE = [
    {
      title: "Full stack developer",
      at: "Siamoutlet",
      note: "(Parallel working and learning)",
      from: new Date(2019, 1, 1),
      to: new Date(),
      website: "https://siamoutlet.com",
      level: 3,
      projects: [
        {
          title: "Kaokonlakao website",
          description: "A website for kaokonlakao thailand biggest running event started by P'Toon.",
          website: "https://kaokonlakao.com",
          stacks: ["vue", "laravel"],
        },
        {
          title: "Tabshier pay",
          description: "A payment gateway system used by Kaokonlakao, Thailand smiles with you and other organizations.",
          stacks: ["entity-framework", "dotnet-core", "payment-gateway"],
        },
        {
          title: "Thailand smiles with you preorder system",
          description: "A preorder system for buying special limited Leicester City special shirt integrated with Tabshier pay and has ability to issue tax invoices.",
          website: "https://preorder.thailandsmileswithyou.com",
          stacks: ["vue", "nuxt", "go"]
        },
        {
          title: "KoyToon wedding registration system",
          description: "A registration system designed to secure KoyToon wedding event from bad person by using QR Code scanning.",
          stacks: ["entity-framework", "dotnet-core", "react"],
        },
        {
          title: "Big mountain music festival 2020 card distribution and preorder system",
          description: "A system designed to distribute BMMF 2020 preorder card quickly using QR Code scanning and handle BMMF 2020 merchandise preorder and tax invoice.",
          stacks: ["entity-framework", "dotnet-core", "vue", "react"],
        },
        {
          title: "Big mountain music festival 2020 refund system",
          description: "A system designed to handle BMMF 2020 refund registration due to COVID-19 outbreak.",
          website: "https://refund.bkkio.com/",
          stacks: ["entity-framework", "dotnet-core", "vue"],
        },
        {
          title: "C-Vitt Ruamkao registration system",
          description: "A registration system for C-Vitt Ruamkao free tutoring at Bitec Bangna.",
          website: "https://c-vittruamkao.com/",
          stacks: ["laravel"],
        },
        {
          title: "Kaokonlakao volunteer website",
          description: "A system for volunteer to help checking virtual run submissions whether it is fake or not.",
          website: "https://volunteer.kaokonlakao.com",
          stacks: ["vue", "nuxt"],
        },
      ]
    },
    {
      title: "Full stack developer",
      at: "Somsritshirt",
      note: "",
      from: new Date(2017, 1, 1),
      to: new Date(2019, 1, 1),
      website: "https://somsritshirt.com",
      level: 2,
      projects: [
        {
          title: "Somsritshirt frontend",
          description: "https://somsritshirt.com responsive and optimized website for a screening company.",
          website: "https://somsritshirt.com",
          stacks: ["pug", "php"]
        },
        {
          title: "Somsritshirt backend",
          description: "Backend of a screening company mainly consist of orders and screening workflow management.",
          stacks: ["laravel"],
        }
      ],
    }
  ]
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
