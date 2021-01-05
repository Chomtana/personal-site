<script>
  export let level = 2;
</script>

<style>
  .timeline-container {
    display: flex;
  }

  .timeline-branch-container {
    width: 75px;
    flex-basis: 75px;
    flex-grow: 0;
    flex-shrink: 0;

    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 16px;

    margin-left: -30px;
  }

  .timeline-content-container {
    flex-grow: 1;
  }

  .timeline-container {
    padding-bottom: 16px;
  }

  .line {
    flex-grow: 1;
    border: 2px solid var(--primary-dark);
  }

  .circle {
    border-radius: 50%;
    background-color: var(--primary-dark);
  }

  .circle-1 {
    width: 15px;
    height: 15px;

    flex: 0 0 15px;
  }

  .circle-2 {
    width: 20px;
    height: 20px;

    flex: 0 0 20px;
  }

  .circle-3 {
    width: 25px;
    height: 25px;

    flex: 0 0 25px;
  }
</style>

<div class="timeline-container">
  <div class="timeline-branch-container">
    <div class="line"></div>
    <div class={`circle circle-${level}`}></div>
  </div>

  <div class="timeline-content-container">
    <slot></slot>
  </div>
</div>
