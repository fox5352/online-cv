<script>
	import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";

  export let list = ["default"];
  const dispatch = createEventDispatcher();
  let value;

  let selected;

  // toggle options
  let display = false;

  function toggleOptions() {
    display = !display;
  }

  // value management
  function setValue(event) {
    value = event.target.textContent;

    for (let index = 0; index < list.length; index++) {
      
      if (list[index] == event.target.textContent.trim()) {
        dispatch("selectChange", {
          value: list[index]
        });
      }
    }
    
    setTimeout(()=>{
      toggleOptions()
    }, 350);
  }

  function closeMenu(event) {
    if (display && !selected.contains(event.target)) {
      toggleOptions()
    }
  }

  onMount(()=>{
    value = list[0];
  });

</script>

<div class="select-container" bind:this={selected}>
    
  <button class="select-menu" on:click={toggleOptions}>
    {value}
    <span class={`custom-arrow ${display ? "active": ""}`} aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </span>
  </button>

  <div class="options-container" class:display>

    {#each list as item}
      <button class="options-btn" on:click={setValue}>
        {item}
      </button>
    {/each}

  </div>
</div>

<svelte:window on:click={closeMenu}/>

<style>
  .select-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: start;

    min-width: 90px;
    min-height: 28px;

    font-size: 1rem;

    border: 0;
    border-radius: 0.25em;
    background-color: var(--ac-two);
  }
  .select-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100%;
    width: 100%;

    padding-left: 5px;

    font-size: 1rem;

    border: 0;
    border-radius: 0.25em;
    background-color: var(--ac-two);

    cursor: pointer;
  }
  .select-menu:focus {
    outline-offset: 2px;
  }

  .custom-arrow {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 23%;
    height: 100%;

    margin-left: 4px;

    font-size: 1rem;
    color: var(--fg-two);

    border: 0px;
    border-radius: 0 0.25em 0.25em 0;
    background: var(--ac-two);
    transition: all var(--duration) var(--zip);

    pointer-events: none;
  }
  .active {
    transform: rotate(180deg);
    
    border-radius: 0.25em 0 0 0.25em;
    background-color: var(--ac-one);
  }
  
  .options-container {
    position: absolute;
    top: calc(100% + 2px);

    width: 100%;

    display: none;
    flex-direction: column;

    padding: 0.1875em 0.125em;

    font-size: inherit;

    border: 0;
    border-radius: 0.25em;
    background-color: var(--ac-two);

    transition: all var(--duration) var(--bounce-ease);
  }
  .options-btn {
    display: inline;

    padding: 4px;

    text-align: start;
    font-size: inherit;

    border: 0;
    border-radius: 0.25em;
    background-color: inherit;
  }
  .options-btn:hover {
    background-color: var(--ac-one);
  }

  .display {
    display: flex;
  }
</style>