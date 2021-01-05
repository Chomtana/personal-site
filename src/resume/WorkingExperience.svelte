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
          description: "A website for kaokonlakao thailand biggest running event started by P'Toon."
        },
        {
          title: "Kaokonlakao volunteer website",
          description: "A system for volunteer to help checking virtual run submissions whether it is fake or not."
        },
        {
          title: "Tabshier pay",
          description: "A payment gateway system used by Kaokonlakao, Thailand smiles with you and other organizations."
        },
        {
          title: "Thailand smiles with you preorder system",
          description: "A preorder system for buying special limited Leicester City special shirt integrated with Tabshier pay."
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

          <SeeMore text="See projects from working...">
            {#each working.projects as project}
              <div>
                <div>{project.title}</div>
                <div>{project.description}</div>
              </div>
            {/each}
          </SeeMore>
        </Timeline>
      </div>
    {/each}
  </SeeMore>
</div>
