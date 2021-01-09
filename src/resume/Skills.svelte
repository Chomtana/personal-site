<script context="module">
  import {SKILLS} from "../utils/resumeData"
</script>

<script>
  export let skills = SKILLS;
</script>

<ul>
  {#each skills as skill}
    <li>{skill}</li>
  {/each}

  <li>And many more...</li>
</ul>
