<style>
  .timeline-container {
    display: flex;
  }

  .timeline-line-container {
    width: 50px;
    flex-basis: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-right: 10px;
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

  .line {
    border: 2px solid var(--primary-dark);
    height: 100%;
    margin-top: -5px;
  }

  .timeline-content-container {
    padding-bottom: 16px;
  }
</style>

<script>
  export let level = 0;
</script>

<div class="timeline-container">
  <div class="timeline-line-container">
    <div class={`circle circle-${level}`}></div>
    <div class="line"></div>
  </div>

  <div class="timeline-content-container">
    <slot></slot>
  </div>
</div>

