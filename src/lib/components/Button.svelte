<button class="btn" on:click>
  <slot></slot>
</button>

<style>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;

    
    margin: .25em 0;
    padding: 0.4em;
    
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: var(--fg-one);

    border: 3px solid var(--ac-two);
    border-radius: .35em;
    background-color: var(--ac-two);

    transition: color var(--duration) var(--zip);
  }
  .btn:hover {
    color: var(--fg-two);

    border-color: var(--ac-one);
    background-color: var(--ac-one);
  }
  .btn:active {
    transform: scale(0.97);
  }
</style>