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

<svelte:head>
  <link rel="shortcut icon" href="/foxIcon.png" type="image/png">
  <meta name="description" content="A Portfolio made with svelte">
  <title>Christopher Portfolio</title>
</svelte:head>

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
