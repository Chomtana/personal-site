<script>
  export let href, active;
</script>

<style>
  .item-container {
    padding: 8px;

    display: flex;

    flex-grow: 1;

    transition: background 0.25s;
  }

  .item-container.active {
    background-color: rgba(255, 255, 255, 0.36);
  }

  .item-container:not(.active):hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
</style>

<a {href}>
  <div class={"item-container " + (active ? "active" : "")}>
    <slot></slot>
  </div>
</a>