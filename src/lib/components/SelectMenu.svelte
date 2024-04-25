<script>
  export let list = undefined;
  
</script>

<div class="select-container">
  <select class="select-menu" name="Data" on:change>
    {#each list as item}
      <option class="selec-btn" value={item}>{item}</option>
    {/each}
  </select>
  <span class="custom-arrow" aria-hidden="true"></span>
</div>

<style>
  .select-container {
  }
  .select-menu {
    min-width: 120px;

    padding: 0.125em;

    font-size: 15px;

    /* border: 1px solid transparent;
    background-color: var(--ac-two); */
  }
  .select-btn {}
</style>