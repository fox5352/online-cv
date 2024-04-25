<script>
  export let list = undefined;
  export let height = "auto";
  export let width = "120px";

  let selected;

</script>

<div class="select-container">
  <select class="select-menu"style="width: {width}; height: {height};" name="Data" on:change bind:value={selected}>
    {#each list as item}
      <option class="select-btn" value={item}>{item}</option>
    {/each}
  </select>
  <span class="custom-arrow" aria-hidden="true">&#11167;</span>
</div>

<style>
  .select-container {
    position: relative;
  }
  .select-menu {

    padding: 4px 0 4px 4px;

    font-size: 1rem;

    border: 0;
    border-radius: 0.25em;
    background-color: var(--ac-two);
  }
  .select-menu:focus {
    outline-offset: 2px;
  }
  .select-btn {
    padding: 4px;
    width: 100%;

    background-color: var(--ac-two);
  }
  .custom-arrow {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;

    width: 23%;
    height: 100%;

    color: var(--fg-two);
    font-size: 1rem;

    border: 0px;
    border-radius: 0 0.25em 0.25em 0;
    background: var(--ac-two);
    transition: all var(--duration) var(--zip);

    pointer-events: none;
  }
  /* TODO: make better */
  .select-menu:focus ~ .custom-arrow {
    rotate: 180deg;
    
    background-color: var(--ac-one);
    border-radius: 0.25em 0 0 0.25em;
  }
</style>