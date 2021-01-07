<script>
  export let project;
</script>

{#if project.website}
  <div class="timeline-title">
    <a href={project.website} target="_blank">{project.title}</a>
  </div>
{:else}
  <div class="timeline-title">{project.title}</div>
{/if}

{#if project.reward}
  <div class="timeline-subtitle">{project.reward}</div>
{/if}

<div>{project.description}</div>
