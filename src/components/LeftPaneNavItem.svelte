<script>
  import Image from "svelte-image";

  export let icon, href = "#", active = false;
</script>

<style>
  a {
    text-decoration: none;
  }

  .item-container {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border-bottom: 1px solid #D4AC0D;
    display: flex;
    align-items: center;
  }

  .item-container.active {
    background-color: rgba(255, 255, 255, 0.36);
  }

  .icon-container {
    flex-basis: 50px;
    flex-grow: 0;
    flex-shrink: 0;
  }

  .icon-container :global(*) {
    width: 36px;
    height: 36px;
    object-fit: cover;
  }

  .content-container {
    flex-grow: 1;
  }
</style>

<a {href}>
  <div class={"item-container " + (active ? "active" : "")}>
    <div class="icon-container">
      <slot name="icon"></slot>
    </div>
    <div class="content-container">
      <slot name="content"></slot>
    </div>
  </div>
</a>