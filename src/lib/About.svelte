<script>
  import Visible from "./utils/visible.svelte";
  import Button from "./components/Button.svelte";

  import img from "../assets/me.jpg"
</script>


<section class="about" id="about">
  <!-- ------------ introduction ------------ -->
  <div class="about__section about__intro">
    <div class="about__intro--top">

      <div class="about_left">
          <h2 class="about__name">
            Hi, I'm <span>Christopher</span>
          </h2>
          <h3 class="about__title">
            junior 
            <Visible let:visible>
              <span class={visible ? "about__title--span":""}>Software Developer</span>
            </Visible>
          </h3>
          <div>
            <Button>
              <a class="about__link" href="#footer">Contact Me</a>
            </Button>
          </div>
      </div>

      <div class="about_right">
        <Visible let:visible>
          <img class="img-active" loading="eager" src={img} alt="me sitting on the beach">
        </Visible>
      </div>
    </div>
    
    <!-- <div class="about__intro-bottom">
      <p>
        I come from a background in mechanics. I'm a problem solver and a quick learner, always eager to face challenges and utilize new technologies. For instance, this site is built with Svelte, showcasing my solid foundation in UX design principles. I possess a demonstrated understanding of best coding practices and am enthusiastic about contributing to the creation of dynamic and responsive websites.
      </p>
    </div> -->
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
  .about__intro--top {
    display: flex;

    padding: 1.8em;
    margin: .5em 0;

    width: 100%;
    height: 320px;

    border-radius: .625em;
    background: var(--accent-100);
    position: relative;
    z-index: 1;
  }
  /* ------------- left side ------------- */
  .about_left {
    flex-basis: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    color: var(--bg-200);
    border-right: 2px solid var(--primary-200);
  }

  .about__name {
    display: flex;
    flex-wrap: wrap;

    font-family: inherit;
    
    position: relative;
  }
  .about__name span {
    font-size: 2rem;

    color: var(--primary-200);
  }
  .about__name:hover > span{
    position: relative;
    top: 0;
    left: 0;
    transform: translate(0, 0);

    animation: glitch 250ms linear 1;
  }
  .about__title {
    display: flex;
    flex-wrap: wrap;
  }
  .about__title--span {
    margin-bottom: .5em;
    padding-left: .125em;

    font-weight: normal;

    position: relative;
  }
  .about__title--span::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 0%;
    height: 2px;

    background: var(--primary-200);
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
    }
    50% {
      left: 10px;
    }
    75% {
      top: 10px;
    }
    100% {
      top: 0;
      left: 0;
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

  .about__link {
    display: flex;
    text-decoration: none;
    color: inherit;
  }

  /* ------------- right side ------------- */
  .about_right {
    flex-basis: 50%;
    /* max-width: 300px; */


    border-radius: 4px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3),
              inset 0 0 10px rgba(0, 0, 0, 0.2);

    overflow: hidden;
    position: relative;
  }
  .about_right .img-active {
    width: 100%;
    height: 100%;

    /* TODO: stretch to fit */

    object-fit: cover;
    /* object-fit: ; */
    opacity: 0;
    transform: translateY(-100%);
  }
  .about_right .img-active {
    animation: shift 2s linear 1 forwards;
  }

  @keyframes shift {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    50% {
      opacity: 0.5;
      transform: translateY(0);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* 0 to 940px */
  @media screen and (max-width: 940px) {
    .about__intro--top {
      flex-direction: column-reverse;
      
      height: auto;
    }
    /* ------------- left side ------------- */
    .about_left {
      flex-basis: 100%;

      margin-top: 1.25em;

      border-right: none;
      border-top: 2px solid var(--primary-200);
    }
    .about__name {
      margin-top: .65em;
    }
    .about__name span {
      font-size: 1.6rem;
      line-height: 1.45;
      padding-left: .125em;
    }
    .about__title {
      margin-bottom: .65em;
    }
    /* ------------- right side ------------- */
    .about_right {
      /* display: none; */
      width: 100% !important;
      max-height: 320px;
    }
    .about_right img {
      object-fit: contain;
    }
  }

  @media screen and (max-width: 530px) {
    .about {
      max-width: 90%;
    }
  }
</style>