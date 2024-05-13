<script>
  export let list = undefined;
  export let height = "auto";
  export let width = "120px";

  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let isActive = false;

  let selected;
  let selectElement; 

  function toggleSelect() {
    isActive = !isActive;
  }

  function checkSelect(event) {
    console.log(event.currentTarget);
    dispatch("selectChange", {
      value: event.target.value
    });
  }
  function handleDocumentClick(event) {
    if (selectElement && !selectElement.contains(event.target)) {
      isActive = false;
    }
  }

</script>

<!-- ------------ TODO: make own select menu mobile is broken no matter what i try ------------ -->

<div class="select-container">
  <select 
    class="select-menu" 
    style="width: {width}; height: {height};" 
      on:click={toggleSelect} on:blur={toggleSelect} on:change={checkSelect} 
      bind:value={selected} bind:this={selectElement}>
    {#each list as item}
      <option class="select-btn" value={item}>{item}</option>
    {/each}
  </select>
  <span class:isActive class="custom-arrow" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
    </svg>
  </span>
</div>

<svelte:window on:click={handleDocumentClick} />

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

    cursor: pointer;
  }
  .select-menu:focus {
    outline-offset: 2px;
  }
  .select-btn {
    padding: 4px;
    width: 100%;

    background-color: var(--ac-one);
  }
  .custom-arrow {
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;

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
  .isActive {
    rotate: 180deg;
    
    background-color: var(--ac-one);
    border-radius: 0.25em 0 0 0.25em;
  }
</style>