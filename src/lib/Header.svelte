<script>
  let active = false;

  // TODO: stagger load header title animation

  // ----------- mobile nav menu ----------- 
  function toggleMenu() {
    active = !active;
    // toggle menu after click
    if (active) {
      setTimeout(() => {
        document.addEventListener('click', closeMenuOnClick);
      });
    } else {
      document.removeEventListener('click', closeMenuOnClick);
    }
  }

  function closeMenuOnClick() {
    active = false;
    document.removeEventListener('click', closeMenuOnClick);
  }

  // ----------- other nav menu ----------- -->

</script>

<header class="header" id="header">
  <h1 class="header__title">My Portfolio</h1>

  <nav class="header__nav">
    <!-- ----------- mobile nav menu ----------- -->
    <button on:click={toggleMenu} class="header__button {active? "header__button-active": ""}" aria-label="toggle navbar">
      <span class="header__button--icon {active? "header__button--icon-active": ""}"></span>
    </button>
    <ul class="header__nav--list {active? "header__nav--list-active":""}">
      <li class="header__nav--list-item">
        <a href="#header">Home</a>
      </li>
      <li class="header__nav--list-item">
        <a href="#about">About</a>
      </li>
      <li class="header__nav--list-item">
        <a href="#projects">Projects</a>
      </li>
      <li class="header__nav--list-item">
        <a href="#skills">Skills</a>
      </li>
      <li class="header__nav--list-item">
        <a href="#education">Education</a>
      </li>
      <li class="header__nav--list-item">
        <a href="#footer">Socials</a>
      </li>
    </ul>
    <!-- ----------- other nav menu ----------- -->
  </nav>
</header>


<style>
  .header {
    display: flex;
    justify-content: space-between;
    
    max-width: 86%;

    padding: .3em .7em;
    margin: 3px auto;

    border-radius: 2px;
    background-color: var(--accent-100);

    box-shadow: 0 1px 3px 0 var(--primary-100), 0 1px 2px -1px var(--primary-100);

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

    color: var(--accent-200);
  }
  .header__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;

    border: 2px solid transparent;
    border-radius: 6px;
    background-color: transparent;
    overflow: hidden;
  }
  .header__button:hover{
    background: var(--primary-100);
    transition: all var(--duration) var(--zip);
  }
  /* ----------- Menu toggle buttons active ----------- */
  .header__button-active {
    background: var(--primary-100);
  }
  
  /* ----------- Menu toggle button icon ----------- */
  .header__button--icon {
    display: block;
    
    width: 80%;
    height: 3px;

    border: none;
    border-radius: 2px;
    background: var(--accent-200);

    position: relative;

    transition: all var(--duration) var(--bounce-ease);
  }
  .header__button--icon::before,
  .header__button--icon::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 3px;
    
    border: none;
    border-radius: 2px;
    background: var(--accent-200);

    transition: all var(--duration) var(--bounce-ease);
  }
  .header__button--icon::before {
    top: -6px;
  }
  .header__button--icon::after {
    top: 6px;
  }
  /* ----------- Menu toggle button icons active ----------- */
  
  .header__button--icon-active {
    background-color: transparent;
  }
  .header__button--icon-active::after,
  .header__button--icon-active::before {
    top: 0px !important;
  }
  .header__button--icon-active::after {
    rotate: 45deg;
  }
  .header__button--icon-active::before {
    rotate: -45deg;
  }

  /* ----------- mobile nav menu ----------- */
  .header__nav--list {
    position: absolute;
    top: 120%;
    right: 0;
    z-index: 5;

    padding: .5em;

    color: var(--accent-200);
    list-style: none;

    border: 2px solid transparent;
    border-radius: 4px;
    background-color: var(--accent-100);

    transform: scale(0) translateX(-200%);

    transition: all var(--duration) var(--zip);
  }
  .header__nav--list:hover {
    border-color: var(--primary-100);
    box-shadow: 0 4px 6px -1px var(--accent-100), 0 2px 4px -2px var(--accent-100);;
  }
  .header__nav--list-active {
    transform: scale(1) translateX(0%);
  }

  .header__nav--list-item,
  .header__nav--list-item a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;
  }

  .header__nav--list-item {
    min-width: 82px;

    margin-bottom: 4px;

    font-size: 1rem;
    font-weight: bold;
    text-align: center;

    border: 1px solid var(--accent-200);
    border-radius: 4px;

    transition: all var(--duration) var(--zip);
  }
  .header__nav--list-item:nth-last-child(1){
    margin: 0;
  }

  .header__nav--list-item:hover {
    border-color: var(--primary-100);
    background-color: var(--primary-100);
  }
  /* ----------- other nav menu ----------- */


  /* ----------- 440px up ----------- */
  @media screen and (min-width: 440px){
    .header__title {
      
    }
  }
</style>