<script>
  import Visible from "./utils/visible.svelte";

  import image from "../assets/me.jpg"
	import { fade } from "svelte/transition";

  // let 

  // function tease(){

  // }

</script>


<section class="about" id="about">
  <!-- ------------ introduction ------------ -->
  <div class="about-section about-intro">
    <div class="about-intro-top">
      <div class="about-left">
          <h2 class="about-name">
            Hi, I'm <span>Christopher</span>
          </h2>
          <h3 class="about-title">
            junior 
            <Visible let:visible>
              <span class={visible ? "about-title-span":""}>Software Developer</span>
            </Visible>
          </h3>
          <Visible let:visible>
            {#if visible}
              <p class="about-content">
                A problem solver and a quick learner, always eager to face challenges and utilize new technologies. For instance, this site is built with Svelte, showcasing my solid foundation in UX design principles. I possess a demonstrated understanding of best coding practices and am enthusiastic about contributing to the creation of dynamic and responsive websites.
              </p>
            {/if}
          </Visible>
      </div>

      <div class="about-right">
        <Visible let:visible>
          {#if visible}
            <img transition:fade class="img-active" loading="eager" src={image} alt="me sitting on the beach">
          {/if}
        </Visible>
      </div>
    </div>
  </div>
</section>

<style>
  .about {
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 60%;

    margin: 0 auto;
  }
  /* ------------- top ------------- */
  .about-intro-top {
    display: flex;
    flex-direction: column-reverse;

    padding: 1.8em;
    margin: .5em 0;

    width: 100%;
    height: auto;

    border: 1px solid var(--ac-two);
    border-radius: .625em;
    background: var(--bg-one);
    box-shadow: 0 1px 3px 0 var(--ac-two), 0 1px 2px -1px var(--ac-two);


    position: relative;
    z-index: 1;
  }
  .about-intro-top:hover {
    border-color: var(--ac-one);
    box-shadow: 0 1px 3px 0 var(--ac-one), 0 1px 2px -1px var(--ac-one);
    transition: all var(--duration) var(--bounce-ease);
  }
  .about-intro-top:hover .about-left .about-title .about-title-span::after  {
    transition: all var(--duration) var(--bounce-ease);
    background: var(--ac-one);
  }
  .about-intro-top:hover .about-name span {
    transition: all var(--duration) var(--bounce-ease);
    color: var(--ac-one);
  }
  /* ------------- left side ------------- */
  .about-left {
    flex-basis: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color: var(--fg-one);
    border-right: none;
    border-top: 2px solid var(--ac-one);
  }

  .about-name {
    display: flex;
    flex-wrap: wrap;

    margin-top: .65em;

    font-family: inherit;
    
    position: relative;
  }
  .about-name span {
    font-size: 2rem;
    color: var(--ac-two);
  }
  .about-name:hover > span{
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);

    animation: glitch 250ms linear 1;
  }
  .about-title {
    display: flex;
    flex-wrap: wrap;
    
    margin-bottom: .65em;
  }
  .about-content {
    font-size: 0.9375rem;
  }
  .about-title-span {
    margin-bottom: .5em;
    padding-left: .125em;

    font-weight: normal;

    position: relative;
  }
  .about-title-span::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0%;
    height: 2px;

    background: var(--ac-two);
    animation: slide 2s forwards;
    animation-delay: 1s;
  }

  @keyframes glitch {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: -10px;
      color: var(--ac-one);
    }
    50% {
      left: 10px;
      color: var(--ac-two);
    }
    75% {
      top: 10px;
      color: var(--ac-two);
    }
    100% {
      top: 0;
      left: 0;
      color: var(--ac-one);
    }

  }

  @keyframes slide {
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }

  .about-link {
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  /* ------------- right side ------------- */
  .about-right {
    width: 100% !important;
    max-height: 320px;

    background: url("/bam-ezgif.com-video-to-gif-converter.gif");
    background-size: contain;
    background-position: center ;
    background-repeat: no-repeat;
    
    border-radius: 4px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),
              inset 0 0 10px rgba(0, 0, 0, 0.2);

    overflow: hidden;
    position: relative;
  }
  .about-right .img-active {
    height: 100%;
    width: 101%;

    object-fit: cover;
    opacity: 0;    
    animation: shift 0.4s linear 1 forwards;
  }

  @keyframes shift {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  /* 0 to 940px */
  @media screen and (min-width: 940px) {

    /* ------------- left side ------------- */
    .about-intro-top {
      flex-direction: row;
      height: 320px;
      /* border */
    }
    .about-left {
      flex-basis: 90%;

      margin-top: 0px;
      
      border: none;
      border-right: 2px solid var(--ac-one);
    }
    .about-name {
      margin: 0;
    }
    .about-name span {
      font-size: 1.6rem;
      line-height: 1.45;
      padding-left: .125em;
    }
    .about-title {
      margin: 0;
    }.about-content {
    padding-right: 0.5rem;
  }
    /* ------------- right side ------------- */
    .about-right {
      flex-basis: 50%;
    }
    .about-right img {
      object-fit: fill;
    }
  }

  @media screen and (max-width: 530px) {
    .about {
      max-width: 90%;
    }
  }
</style>