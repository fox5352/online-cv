<script>
	import { onDestroy, onMount } from 'svelte';

  
  import About from './lib/About.svelte';
  import Header from './lib/Header.svelte'
	import Projects from './lib/Projects.svelte';
	import Skills from './lib/Skills.svelte';
  import Footer from './lib/footer.svelte';
	import { theme } from './lib/utils/toggleTheme';

  let currentTheme

  const themeSub = theme.subscribe(value => {
    currentTheme = value;
  })

  
  $: {
    document.body.classList.add(currentTheme);
    document.body.classList.remove(currentTheme == "light" ? "dark" : "light" );
  }

  
  onDestroy(themeSub)

</script>

<Header />
<main>
  <About/>
  <Projects />  
  <Skills />
</main>
<Footer />

<style>

</style>
