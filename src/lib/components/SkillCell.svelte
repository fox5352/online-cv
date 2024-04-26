<script>
  export let name;
  export let detail;
  export let level = 75;

  // @ts-ignore
  import { fade } from "svelte/transition";
  
  let isDisplay = false
  let remainder = 100 - level;

  function toggleDisplay() {
    isDisplay =!isDisplay;
  }

</script>
<div class="cell">
  <div class="head">
    <h3>{name}</h3>
    <button on:click={toggleDisplay}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
      </svg>
    </button>
  </div>
  {#if isDisplay}
    <div class="body" transition:fade>
      <p>{detail}</p>
    </div>
  {/if}
</div>

<style>
  .cell {
    flex-grow: 1;

    color: var(--fg-one);
    
    border: none;
    border-radius: 4px;
    /* background: linear-gradient(145deg, var(--ac-two), var(--ac-one)); */
    box-shadow: -2px 0px 1px var(--ac-two), 0px -2px 1px var(--ac-two), 
    2px 0px 1px var(--ac-one),0px 2px 1px var(--ac-one);

    overflow: hidden;
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    padding: 0.3125em;

    color: var(--fg-one);
    font-weight: 500;
    letter-spacing: 2px;
    font-size: 1.0625rem;
    font-family: inherit;

    box-shadow: 0px 3px 3px -3px black;

    transition: all var(--duration) var(--bounce-ease);
  }
  .head button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 4px;

    color: var(--fg-one);

    border: none;
    border-radius: 0.25em;
    background-color: transparent;

    transition: all var(--duration) var(--bounce-ease);
  }
  .head button:hover {
    color: var(--ac-two);
  }

  .body {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.3125em;
    
    font-size: 1.125rem;
  }
</style>