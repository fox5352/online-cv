<!-- Visible.svelte -->
<script>
  import { onMount, onDestroy } from 'svelte';

  let visible = false;
  let element;

  const observerOptions = {
    root: null, // Defaults to the viewport
    threshold: 0, // Trigger when the element becomes visible even partially
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      visible = entry.isIntersecting;
    });
  }, observerOptions);

  onMount(() => {
    observer.observe(element);
  });

  onDestroy(() => {
    observer.unobserve(element);
  });
</script>

<span bind:this={element}>
  <slot {visible} />
</span>

