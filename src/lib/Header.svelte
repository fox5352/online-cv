<script>
	import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import staggerLoad from "./utils/staggerLoad"

  let displayHeader = false;

  let displayMobileNavMenu = false;

  let active = false;

  onMount(()=>{
    setTimeout(() => {
      displayHeader = !displayHeader;
    }, 500);
  })

  function toggleMobileNavMenu() {
    displayMobileNavMenu = !displayMobileNavMenu;
    active = !active;
  }
</script>

<header class="header" id="header">
  {#if displayHeader}
    <h1 transition:staggerLoad class="header-title">My Portfolio</h1>
  {:else}
    <h1 class="header-title"> </h1>
  {/if}

  <nav class="header-nav">
    <button class="mobile-nav-toggle" aria-label="toggle navigation menu" on:click={toggleMobileNavMenu}>
      <span class="toggle-icon" class:active ></span>
    </button>
    <!-- ----------- mobile nav menu ----------- -->
    {#if displayMobileNavMenu}
      <ul transition:fade class="header-mobile-nav">
        <li>
          <a class="header-mobile-nav-btn" href="/">Home</a>
        </li>
        <li>
          <a class="header-mobile-nav-btn" href="#about">About</a>
        </li>
        <li>
          <a class="header-mobile-nav-btn" href="#projects">Projects</a>
        </li>
        <li>
          <a class="header-mobile-nav-btn" href="#skills">Skills</a>
        </li>
        <li>
          <a class="header-mobile-nav-btn" href="#education">Education</a>
        </li>
        <li>
          <a class="header-mobile-nav-btn" href="#footer">Socials</a>
        </li>
      </ul>
    {/if}

    <!-- ----------- other nav menu ----------- -->
    <ul class="header-nav-menu">
      <li class="header-nav-menu-item">
        <a href="#home">Home</a>
      </li>
      <li class="header-nav-menu-item">
        <a href="#about">About</a>
      </li>
      <li class="header-nav-menu-item">
        <a href="#projects">Projects</a>
      </li>
      <li class="header-nav-menu-item">
        <a href="#skills">Skills</a>
      </li>
      <li class="header-nav-menu-item">
        <a href="#education">Education</a>
      </li>
      <li class="header-nav-menu-item">
        <a href="#footer">Socials</a>
      </li>
    </ul>
  </nav>
</header>


<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    width: 90%;
    min-height: 40px;

    padding: .3em .7em;
    margin: 3px auto;

    color: var(--fg-one);
    
    border-radius: 2px;
    background-color: var(--ac-two);

    box-shadow: 0 1px 3px 0 var(--fg-one), 0 1px 2px -1px var(--fg-one);

    position: relative;
    top: 0;
    left: 0%;
    transform: skewX(-15deg);
    z-index: 30;
  }
  .header>* {
    transform: skewX(15deg);
  }
  .header-title {
    font-size: 1.25rem;

    color: inherit;
  }

  .header-nav {
    position: relative;
  }
  
  /* ----------- toggle nav menu buttons ----------- */
  .mobile-nav-toggle {
    display: flex;
    justify-content: center;
    align-items: center;


    width: 2rem;
    height: 2rem;

    padding: 0.125em;

    border: 1px solid transparent;
    border-radius: 0.25em;
    background: transparent;

    transition: background-color var(--duration) var(--bounce-ease);
  }
  .mobile-nav-toggle:hover {
    background: var(--ac-one);
  }

  /* ----------- toggle nav menu button icon ----------- */
  .toggle-icon {
    display: block;
  
    width: 100%;
    height: 0.1875rem;

    border-radius: 0.1875em;
    background: var(--fg-one);

    transition: all var(--duration) var(--zip);

    position: relative;
  }
  .toggle-icon::before,
  .toggle-icon::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    
    width: 100%;
    height: 0.1875rem;

    border-radius: 0.1875em;
    background: var(--fg-one);

    transition: all var(--duration) var(--zip);
  }
  .toggle-icon::before {
    top: -0.4375rem;
  }
  .toggle-icon::after {
    top: 0.4375rem;
  }

  .mobile-nav-toggle:hover .toggle-icon,
  .mobile-nav-toggle:hover .toggle-icon::after,
  .mobile-nav-toggle:hover .toggle-icon::before {
    background: var(--fg-two);
  }
  
  /* ----------- toggle button active ----------- */
  .active {
    background: transparent !important;

    transition: all var(--duration) var(--zip);
  }
  .active.toggle-icon::before,
  .active.toggle-icon::after {
    background: var(--bg-one);
    top: 0;

    transition: all var(--duration) var(--zip);
  }
  .active.toggle-icon::after {
    rotate: 45deg;
  }
  .active.toggle-icon::before {
    rotate: -45deg;
  }

  /* ----------- mobile nav menu ----------- */
  .header-mobile-nav {
    position: absolute;
    top: calc(100% + 0.25rem);
    right: 0;

    margin: 0;
    margin-top: 2px;
    padding: 0.625em 0.4375em;

    list-style: none;

    border: 1px solid transparent;
    border-radius: 0.25em;
    background-color: var(--ac-two);
    box-shadow: 0 1px 3px 0 var(--fg-one), 0 1px 2px -1px var(--fg-one);
  }
  .header-mobile-nav-btn {
    display: flex;
    justify-content: center;

    margin-top: 0.25em;
    padding: 3px 10px;

    min-width: 92px;

    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.0625em;
    color: var(--bg-one);
    text-decoration: none;

    border: 1px solid var(--bg-one);
    border-radius: 0.25em;
    background-color: transparent;

    transition: all var(--duration) var(--bounce-ease);
  }
  .header-mobile-nav-btn:hover {
    background-color: var(--ac-one);
    border-color: var(--ac-one);
  }

  /* ----------- other nav menu ----------- */
  .header-nav-menu {
    display: none;
    justify-content: center;
    scale: 1;

    height: 100%;

    list-style: none;
  }
  .header-nav-menu-item,
  .header-nav-menu-item a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
  }
  .header-nav-menu-item {
    display: flex;
    align-items: center;

    padding: 0 5px;
    
    color:  var(--fg-one);
    
    border: 1px solid transparent;
    border-right: 1px solid var(--bg-one);
    border-left: 1px solid var(--bg-one);

    transition: all var(--duration) var(--zip);
    background-color: transparent;
  }
  .header-nav-menu-item:nth-child(1) {
    border-left: 1px solid var(--bg-one);
  }
  .header-nav-menu-item:hover {
    color: var(--bg-one);

    border-radius: 4px;
    border-color: var(--ac-one);
    background-color: var(--ac-one);
  }
  .header-nav-menu-item:active {
    scale: 0.95;
  }

  /* media that starts from 640px and greater */
  @media screen and (min-width: 640px) {
    .mobile-nav-toggle {
      display: none;
    }
    .header-mobile-nav {
      display: none;
    }
    .header-nav-menu  {
      display: flex;
    }
  }
</style>