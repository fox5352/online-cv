<script>
  // @ts-ignore
  import { fade } from "svelte/transition"

  import icons from "../assets/icons.json"
  
  let techStack  = icons
  let message = "";

  async function sendData(event) {
    event.preventDefault()
    try {
      const options =  { 
        method: "POST", 
        body: JSON.stringify({message}),
        headers: {
            'Content-Type': 'application/json',
          },
      }
      
      const res = await fetch("/.netlify/functions/messages", options)
      
      
      if (res.ok) {
        console.log("message send successfully");
      }
      
      message = "";
      
    } catch (error) {
      console.error('Error:', error);
    }
  }

</script>
<footer class="footer" id="footer">
  <div class="footer-container"transition:fade={{ delay: 200,duration: 300}}>
    <!-- left -->
    <div class="content">
      <form class="form" id="contact" method="post" on:submit={sendData}>
        <h3>Message Me:</h3>
        <textarea name="message" bind:value={message}></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    <!-- center -->
    <div class="content">
      <h3>My socials:</h3>
      <a href="https://www.linkedin.com/in/christopher-vos-6469b7284/" target="_blank">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
          </svg>
        </span>
        Linkedin
      </a>
      <a href="https://github.com/fox5352/" target="_blank">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
          </svg>
        </span>
        GitHub
      </a>
      <a href="https://codepen.io/fox5352" target="_blank">
        <span class="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-code-fill" viewBox="0 0 16 16">
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708"/>
          </svg>
        </span>
        CodePen
      </a>
    </div>
    <!-- ------------- tech stack ------------- -->
    {#if techStack}
      <div class="content">
        <h3>Technologies used:</h3>
        {#each techStack as item}
          <a href="{item.url}" target="_blank">
            <span class="icon">
              {@html item.icon}
            </span>
            {item.name}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</footer>
<style>
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 1440px;
    min-height: 32px;

    margin: 0 auto;
  }
  .footer-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    width: 90%;

    padding: 10px 14px;

    border: 1px solid transparent;
    border-radius: 10px 10px 0 0;
    background-color: var(--ac-two);
  }
  .content {
    flex-grow: 1;
    flex-shrink: 1;

    display: flex;
    flex-direction: column;
    gap: 0.25em;

    width: 100%;
    max-width: 290px;
  }
  .content h3 {
    color: var(--fg-two);
  }
  .content a {
    margin-left: 0.5em;

    font-size: 1rem;
    color: var(--fg-two);
    text-decoration: none;

    transition: all var(--duration) var(--zip);
  }
  .content a:hover {
    color: var(--ac-one);
  }
  .icon {
    display: inline-flex;
    color: var(--ac-one);
    font-size: 1.25rem;
    height: 1.25rem;
    fill: var(--ac-one);
  }
  .icon svg {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
  }

  .form {
    display: flex;
    flex-direction: column;
  }
  .form textarea {
    height: 72px;

    padding: 2px;
    
    color: var(--fg-one);
    font-size: 14px;

    border: 1px solid transparent;
    border-radius: 4px;
    background-color: var(--bg-one);

    resize: none;
  }
  .form textarea:focus {
    outline: none;
  }

  .form button {
    display: inline-block;
    
    max-width: 82px;

    margin-top: 0.5em;
    padding: 2px 5px;

    border: 1px solid var(--bg-one);
    border-radius: 0.25em;
    background-color: var(--ac-two);
    transition: all var(--duration) var(--zip);
  }
  .form button:hover {
    border-color: var(--ac-one);
    background-color: var(--ac-one);
  }

  @media screen and (min-width: 640px){
    .footer-container {
      flex-direction: row;
    }
    .content {
      max-width: 220px;
    }
    .content:nth-child(1) {
      max-width: clamp(290px, 100%, 300px);
    }
  }
</style>