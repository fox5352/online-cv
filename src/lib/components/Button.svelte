<button class="btn" on:click>
  <slot></slot>
</button>

<style>
  .btn {
    font-size: 1rem;

    margin: .25em 0;
    padding: .4em;

    color: var(--primary-200);

    border: 3px solid var(--primary-200);
    border-radius: .35em;
    background-color: var(--accent-100);

    transition: color var(--duration) var(--zip);
  }
  .btn:hover {
    color: var(--bg-200);

    background-color: var(--primary-200);
  }
  .btn:active {
    transform: scale(0.97);
  }
</style>