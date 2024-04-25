<script>
	import { onMount } from "svelte";
  import { fade } from "svelte/transition";
	import Loading from "./components/Loading.svelte";
	import SelectMenu from "./components/SelectMenu.svelte";

  let data = null;

  let dataMenu = ["newest", "oldest"];
  let languageMenu = ["all", "javascript", "python", "rust", "lua"];

  let curDate = "newest";
  let curLanguage = "all";
  
  let test = []

  async function getRepos() {
    const response = await fetch("https://api.github.com/users/fox5352/repos");
    const data = await response.json();
    return data.filter(listItem =>!listItem.name.includes("PTO2401"));
  }

  async function filterRepos(date, language) {
    let data = await getRepos();
    let newList = data;

    // if Language is selected then it filters out all projects other languages
    if (language !== "all") {
      newList = data.filter(listItem => listItem.language?.toLowerCase() == language);
    }

    // sort by .created_at date
    newList.sort((a, b) => {
      if (date == "oldest") {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateA - dateB;
      } else {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        return dateB - dateA;
      }
    });

    return newList;
  }

  function updateDate(event) {
    curDate = event.target.value;
  }
  function updateLanguage(event) {
    curLanguage = event.target.value;
  }

  // -------------- state management ------------
  onMount(() => {
    data = getRepos();
  })
  
  $: {
    data = filterRepos(curDate, curLanguage)
  }

</script>

<section id="projects" class="projects">
  {#if data}
    <div class="bts-container">
      <!-- Date selection -->
      <SelectMenu list={dataMenu} on:change={updateDate}/>
      <!-- Language selection -->
      <SelectMenu list={languageMenu} on:change={updateLanguage} />
    </div>
    {#await data}
      <Loading />
    {:then repos}
      <div transition:fade class="repo-container">
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
    border-radius: 0.25em;
    box-shadow: 0 4px 2px -2px gray;
  }

  /* ------------ repository container and items ------------ */
  .repo-container {
    width: 100%;
    max-height: 230px;
    
    margin-bottom: 10px;
    padding: 0.25em;
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4px;

    overflow-x: hidden;
  }
  .loader {
    width: 100%;
  }
  .repo-cell {
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    flex-grow: 1;

    min-width: 250px;
    max-width: 260px;
    height: 110px;
    
    padding: 0.3125em;

    text-decoration: none;

    border: 1px solid var(--ac-two);
    border-radius: 0.3125rem;
    box-shadow: 0 4px 6px -1px var(--ac-two), 0 2px 4px -2px var(--ac-two);

    transition: all var(--duration) var(--zip);
    overflow: hidden;
  }
  .repo-cell:hover {
    background-color: var(--ac-two);
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
      max-height: 230px;
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