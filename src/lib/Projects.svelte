<script>
	import { onMount } from "svelte";
  import { fade } from "svelte/transition";
	import Visible from "./utils/visible.svelte";
  import staggerLoading from "./utils/staggerLoad"
	import Loading from "./components/Loading.svelte";
	import CustomSelect from "./components/CustomSelect.svelte";

  let data = null;

  let dataMenu = ["Newest", "Oldest"];
  let languageMenu = ["all", "JavaScript", "TypeScript", "Svelte", "Python", "Rust", "Lua"];

  let curDate = "newest";
  let curLanguage = "all";
  
  let test = []

  async function getAllRepos() {
    let page = 1;
    let allRepos = []
    
    while (true) {
      const res = await fetch(`https://api.github.com/users/fox5352/repos?page=${page}&per_page=100`);

      if (!res.ok) {
        throw Error(`HTTP error! status: ${res.status}`)
      }

      const repos = await res.json();

      if (repos.length === 0) {
        break;
      }

      allRepos = allRepos.concat(repos);

      page++;
    }

    return allRepos;
  }

  async function getRepos() {
    // const response = await fetch("https://api.github.com/users/fox5352/repos?page=1");
    const data = await getAllRepos()
    const filteredData = data.filter(listItem =>!listItem.name.includes("PTO2401"));

    languageMenu = [...(new Set(filteredData.map(data=>data.language).filter(data=> data != null)))]

    return filteredData;
  }

  async function filterRepos(date, language) {
    let data = await getRepos();
    let newList = data;

    // if Language is selected then it filters out all projects other languages
    if (language !== "all") {
      newList = data.filter(listItem => listItem.language?.toLowerCase() == language.toLowerCase());
    }

    // sort by .created_at date
    newList.sort((a, b) => {
      if (date.toLowerCase() == "oldest") {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        // @ts-ignore
        return dateA - dateB;
      } else {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        // @ts-ignore
        return dateB - dateA;
      }
    });

    return newList;
  }

  function updateDate(event) {
    curDate = event.detail.value;
  }

  function updateLanguage(event) {
    curLanguage = event.detail.value;
  }

  // -------------- state management ------------
  onMount(() => {
    data = getRepos();
  })
  
  $: {
    data = filterRepos(curDate, curLanguage)
  }

</script>

<section class="projects">
  
  {#if data}
    <Visible let:visible>
      {#if visible}
        <h2 transition:staggerLoading>My Projects:</h2>
      {/if}
    </Visible>
    <div class="bts-container">
      <!-- Date selection -->
      <CustomSelect list={dataMenu} on:selectChange={updateDate}/>
      <!-- Language selection -->
      <CustomSelect list={languageMenu} on:selectChange={updateLanguage} />
    </div>
    {#await data}
      <Loading />
    {:then repos}
      <div transition:fade class="repo-container" id="projects">
        {#each repos as repo}
          {#if repo.language}
            <a class="repo-cell" href={`https://github.com/fox5352/${repo.name}`} aria-label={`repository to ${repo.name} project`} target="_blank">
              <!-- load name -->
              {#if repo.name.length > 20}
                <h3 class="repo-heading">{repo.name.slice(0, 20)}...</h3>
              {:else}
                <h3 class="repo-heading">{repo.name}</h3>
              {/if}
              <!-- load language -->
              {#if repo.language}
                <h4 class="repo-subheading">{repo.language}</h4>
              {/if}
              <!-- load description -->
              {#if repo.description}
                <p>{repo.description}</p>
              {/if}
            </a>
          {/if}
        {/each}
      </div>
    {:catch error}
      <p>An error occurred: {error.message}</p>
    {/await}
  {/if}
</section>

<style>
  .projects {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 0.9375em;
  }

  /* ------------ control buttons ------------ */
  .bts-container {
    margin-bottom: 0.375em;

    border-radius: 0.25em;
    box-shadow: 0 4px 2px -2px var(--ac-two);
  }

  /* ------------ repository container and items ------------ */
  .repo-container {
    width: 100%;
    max-height: 360px;
    
    margin-bottom: 10px;
    padding: 0.25em;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;

    overflow-x: hidden;
  }
  
  .repo-cell {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    flex-grow: 1;

    width: 250px;
    max-width: 250px;
    height: 110px;
    
    padding: 0.3125em;

    text-decoration: none;

    border-radius: 0.3125rem;
    border: 1px solid var(--ac-one);
    box-shadow: 0 4px 6px -1px var(--ac-one), 0 2px 4px -2px var(--ac-one);

    transition: all var(--duration) var(--zip);
    overflow: hidden;
  }
  .repo-cell:hover {
    color: var(--fg-two);
    background-color: var(--ac-one);
    box-shadow: none;
  }
  .repo-cell:hover .repo-subheading {
    color: var(--fg-two);
  }
  .repo-heading {
    font-weight: 600;
    font-size: 1.1875rem;
    letter-spacing: 1px;
  }
  .repo-subheading {
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: 1px;
    color: var(--ac-one);
  }
  .bts-container {
    display: flex;
    gap: 0.25em;

    padding: 0.25em;
  }
  @media screen and (min-width: 640px) {
    .projects {
      max-width: 70%;
    }
    .repo-container {
      grid-template-columns: auto auto;
      max-height: 375px;

      gap: 16px;
    }
    .repo-cell {
      box-shadow: 0 1px 3px 0 var(--ac-one), 0 1px 2px -1px var(--ac-one);
    }
  }
  @media screen and (min-width: 1024px) {
    .projects {
      max-width: 60%;
    }
    .repo-container {
      grid-template-columns: auto auto auto;
    }
  }
</style>