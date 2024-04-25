<script>
	import { onMount } from "svelte";
  import { fade } from "svelte/transition";
	import Loading from "./components/Loading.svelte";
	import SelectMenu from "./components/SelectMenu.svelte";

  let data = null;

  let dataMenu = ["newest", "oldest"];
  let languageMenu = ["javascript", "html", "css", "python", "rust", "cpp"];
  
  async function getRepos() {
    const response = await fetch("https://api.github.com/users/fox5352/repos");
    const data = await response.json();
    let test =await setTimeout(() => {}, 3000);
    return data;
  }

  onMount(()=>{
    data = getRepos();
  })

</script>

<section id="projects" class="projects">
  {#if data}
    {#await data}
      <Loading />
    {:then repos}
      <div class="bts-container">
        <!-- Date selection -->
        <SelectMenu list={dataMenu} />
        <!-- Language selection -->
        <SelectMenu list={languageMenu} />
      </div>
      <div transition:fade class="repo-container">
        {#each repos as repo}
          {#if repo.language}
            <a class="repo-cell" href={repo.url} aria-label={`repository to ${repo.name} project`}>
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

  /* ------------ control buttons ------------ */
  .filter-btns {}


  /* ------------ repository container and items ------------ */
  .projects {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 0.9375em;
  }
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