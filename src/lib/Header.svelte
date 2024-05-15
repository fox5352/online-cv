<script>
	import { onDestroy, onMount } from "svelte";
  import { fade } from "svelte/transition";
  
  // local
  import staggerLoad from "./utils/staggerLoad"
	import Visible from "./utils/visible.svelte";
  import { theme, toggleTheme } from "./utils/toggleTheme";

  let displayMobileNavMenu = false;
  let displayHeader = false;
  let active = false;
  let currentTheme;

  // theme button vars
  let icon;


  const themeSub = theme.subscribe(value => currentTheme = value);

  onMount(()=>{
    if (icon) {
			const height = icon.offsetHeight;
			icon.style.width = `${height}px`;
		}
    
    setTimeout(() => {
      displayHeader = !displayHeader;
    }, 500);
  })

  function toggleMobileNavMenu() {
    displayMobileNavMenu = !displayMobileNavMenu;
    active = !active;
  }
  
  onDestroy(themeSub)

</script>

<header class="header" id="header">
  <Visible let:visible>
    {#if displayHeader && visible}
      <h1 transition:staggerLoad class="header-title">My Portfolio</h1>
    {:else}
      <h1 class="header-title"> </h1>
    {/if}
  </Visible>

  <nav class="header-nav">
    <button class="mobile-nav-toggle" aria-label="toggle navigation menu" 
      on:blur={()=>setTimeout(()=>toggleMobileNavMenu(), 500)} on:click={toggleMobileNavMenu}>
      <span class="toggle-icon" class:active ></span>
    </button>
    <!-- ----------- mobile nav menu ----------- -->
    {#if displayMobileNavMenu}
      <ul transition:fade class="header-mobile-nav">
        <li>
          <button class="header-mobile-nav-btn" on:click={toggleTheme}>
            {#if currentTheme === "light"}
              Dark
            {:else}
              Light
            {/if}
          </button>
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
      </ul>
    {/if}

    <!-- ----------- other nav menu ----------- -->
    <ul class="header-nav-menu">
      <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <li>
        <button class="theme-btn" on:click={toggleTheme}>
          <span class={`cover ${currentTheme == "light" && "cover-slide"}`}>
            <span class={`icon ${currentTheme == "light" && "icon-slide"}`} bind:this={icon}></span>
          </span>
        </button>
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
    margin-bottom: 20px;

    color: var(--fg-one);
    
    border-radius: 2px;
    background: linear-gradient(36deg, var(--ac-one), var(--ac-two));

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

    color: var(--fg-two);
    transform: skewX(15deg);
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
    background: var(--fg-two);

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
    background: var(--fg-two);

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
    top: calc(100% + 0.3125rem);
    right: 0;

    margin: 0;
    margin-top: 2px;
    padding: 0.625em 0.4375em;

    list-style: none;

    border: 1px solid transparent;
    border-radius: 0.25em;
    background: linear-gradient(36deg, var(--ac-one), var(--ac-two));
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
    color: var(--fg-two);
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
    gap: 0.375em;
    scale: 1;

    height: 100%;

    list-style: none;
  }

  .theme-btn {
    display: flex;
    justify-content: center;
    
    margin-top: 0.25em;
    padding: 3px 10px;
    
    width:  60px;
    min-height: 26px;
    
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.0625em;
    color: var(--fg-two);
    text-decoration: none;

    border: 1px solid var(--ac-two);
    border-radius: 20px;

    background: rgb(90,178,255);
    background: linear-gradient(186deg, rgba(90,178,255,1) 36%, rgba(160,222,255,1) 72%, rgba(202,244,255,1) 100%); 

    transition: all var(--duration) var(--bounce-ease);
    
    cursor: pointer;
    
    position: relative;
    overflow: hidden;
  }
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    

    height: 100%;
    width: 100%;

    border-radius: 20px;
    background-image: url("/night.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    transition: all var(--duration) var(--zip);
  }
  .cover-slide {
    left: 60px;
    transform: translateX(-44%);
  }
  .icon {
    position: absolute;
    top: 0;
    left: 0;
    
    height: 100%;
    /* width: 30%; */
    
    border: none;
    border-radius: 50%;
    background-color: #EEEE;
  }
  .icon-slide {
    background-color: #FFF917;
  }

  .header-nav-menu-item,
  .header-nav-menu-item a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
    text-align: center;

    cursor: pointer;
  }
  .header-nav-menu-item {
    display: flex;
    align-items: center;

    padding: 0 5px;
    
    color:  var(--fg-two);
    text-align: center;
    
    border: 1px solid transparent;
    background-color: transparent;
    
    transition: all var(--duration) var(--zip);

    position: relative;
  }
  .header-nav-menu-item::after,
  .header-nav-menu-item::before {
    content: "";
    position: absolute;
    height: 2px;
    width: 0%;

    border: none;
    border-radius: 0.25em;
    background-color: var(--fg-two);
    transition: all 400ms var(--bounce);
  }
  .header-nav-menu-item::before {
    top: 0px;
    left: 0px;
  }
  .header-nav-menu-item::after {
    bottom: 0px;
    right: 0px;
  }
  .header-nav-menu-item:hover::before,
  .header-nav-menu-item:hover::after {
    width: 100%;
  }
  /* .header-nav-menu-item:hover {
    
  } */
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