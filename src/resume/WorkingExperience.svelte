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
        },
        {
          title: "Kaokonlakao volunteer website",
          description: "A system for volunteer to help checking virtual run submissions whether it is fake or not.",
          website: "https://volunteer.kaokonlakao.com",
        },
        {
          title: "Tabshier pay",
          description: "A payment gateway system used by Kaokonlakao, Thailand smiles with you and other organizations.",
        },
        {
          title: "Thailand smiles with you preorder system",
          description: "A preorder system for buying special limited Leicester City special shirt integrated with Tabshier pay.",
          website: "https://preorder.thailandsmileswithyou.com",
        }
      ]
    },
    {
      title: "Full stack developer",
      at: "Somsritshirt",
      note: "",
      from:new Date(2017, 1, 1),
      to: new Date(2019, 1, 1),
      website: "https://somsritshirt.com",
      level: 2,
      projects: [],
    }
  ]
</script>

<script>
  import Timeline from "../components/Timeline.svelte"
  import SeeMore from "../components/SeeMore.svelte";
import TimelineBranch from "../components/TimelineBranch.svelte";
</script>

<style>

</style>


<div class="section-block">
  <div class="title-with-icon">
    <div class="resume-icon"><img src="/g/images/icons/work-64.png" width={28} height={28} alt="Work" /></div>
    <h2>Working experience</h2>
  </div>

  <SeeMore>
    {#each WORKING_EXPERIENCE as working}
      <div class={`${working.level >= 3 ? 'above-fold' : ''}`}>
        <Timeline level={working.level}>
          <div>{working.title}</div>
          <div>At <a href={working.website} target="_blank">{working.at}</a></div>
          <div>{working.from.getFullYear()} - {working.to.getFullYear() == new Date().getFullYear() ? "Now" : working.to.getFullYear()}</div>
          <div>{@html working.note}</div>

          {#if working.projects && working.projects.length > 0}
            <SeeMore text="See projects from working..." buttonClass="projects-see-more">
              {#each working.projects as project}
                <div>
                  <TimelineBranch>
                    {#if project.website}
                      <div><a href={project.website} target="_blank">{project.title}</a></div>
                    {:else}
                      <div>{project.title}</div>
                    {/if}
                    <div>{project.description}</div>
                  </TimelineBranch>
                </div>
              {/each}
            </SeeMore>
          {/if}
        </Timeline>
      </div>
    {/each}
  </SeeMore>
</div>
