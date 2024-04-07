<script>
	import { onMount } from "svelte";
  import staggerLoad from "./utils/staggerLoad"

  let displayHeader = false;

  onMount(()=>{
    setTimeout(() => {
      displayHeader = !displayHeader;
    }, 500);
  })

  // ----------- other nav menu -----------
</script>

<header class="header" id="header">
  <!-- svelte-ignore a11y-missing-content -->
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  {#if displayHeader}
    <h1 transition:staggerLoad class="header__title">My Portfolio</h1>
  {:else}
    <h1 class="header__title"></h1>
  {/if}

  <nav class="header__nav">
    <!-- ----------- other nav menu ----------- -->
    <ul class="header__nav--menu">
      <li class="header__nav--menu-item">
        <a href="#home">Home</a>
      </li>
      <li class="header__nav--menu-item">
        <a href="#about">About</a>
      </li>
      <li class="header__nav--menu-item">
        <a href="#projects">Projects</a>
      </li>
      <li class="header__nav--menu-item">
        <a href="#skills">Skills</a>
      </li>
      <li class="header__nav--menu-item">
        <a href="#education">Education</a>
      </li>
      <li class="header__nav--menu-item">
        <a href="#footer">Socials</a>
      </li>
    </ul>
  </nav>
</header>


<style>
  .header {
    display: flex;
    justify-content: space-between;
    
    max-width: 86%;
    min-height: 40px;

    padding: .3em .7em;
    margin: 3px auto;

    border-radius: 2px;
    background-color: var(--accent-100);

    box-shadow: 0 1px 3px 0 var(--primary-200), 0 1px 2px -1px var(--primary-200);

    transform: skewX(-15deg);
  }
  .header>* {
    transform: skewX(15deg);
  }
  .header__nav {
    position: relative;
  }
  /* ----------- Menu toggle button ----------- */
  .header__title {
    font-size: 1.5rem;

    color: var(--bg-200);
  }
  /* ----------- other nav menu ----------- */
  .header__nav--menu {
    display: flex;
      justify-content: center;
      scale: 1;

      height: 100%;

      list-style: none;
  }
  .header__nav--menu-item,
  .header__nav--menu-item a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
  }
  .header__nav--menu-item {
    display: flex;
    align-items: center;

    padding: 0 5px;
    
    color:  var(--bg-200);
    
    border: 1px solid transparent;
    border-right: 1px solid var(--bg-200);

    transition: all var(--duration) var(--zip);
    background-color: transparent;
  }
  .header__nav--menu-item:nth-child(1) {
    border-left: 1px solid var(--bg-200);
  }
  .header__nav--menu-item:hover {
    border-color: var(--primary-200);
    border-radius: 4px;
    background-color: var(--primary-200);
  }
  .header__nav--menu-item:active {
    scale: 0.95;
  }

  @media screen and (max-width: 550px) {
    .header {
      justify-content: center;
    }
    .header__title {
      display: none;
    }
  }
  @media screen and (max-width: 390px) {
    .header {
      max-width: 95%;
    }
    .header__nav--menu-item {
      padding: 0 2px;
    }
  }
</style>