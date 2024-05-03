<script>
	import { onDestroy, onMount } from 'svelte';

  // Component imports
  import Header from './lib/Header.svelte'
  import About from './lib/About.svelte';
	import Projects from './lib/Projects.svelte';
	import Skills from './lib/Skills.svelte';
	import Education from './lib/Education.svelte';
  import Footer from './lib/footer.svelte';
  // hooks imports
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
  <Education />
</main>
<Footer />

<style>

</style>
