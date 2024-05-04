<script>
  import Carousel from "svelte-carousel";
	// import { autoplayDuration } from "svelte-carousel/src/components/Carousel/Carousel.svelte";

  let education = [
    { name: "WestCliff school", date: "2015 - 2017", content: "Westcliff School of Skills provides specialized education for students needing alternative paths to success. Our tailored approach combines academic excellence with hands-on technical training, preparing students for the workforce or further technical education.We where prioritize holistic development, offering diverse sports and cultural activities alongside rigorous academics. At Westcliff, we empower students to excel academically, technically, and personally."},
    { name: "CodeSpace Academy Software Development", date: "2024 - 2024", content: "Take the most direct route to starting your career in tech. Our core program equips you with mastery and fluency in fundamental software development concepts that will be your foundation for success. After this course, you can land a junior developer role and learn on the job or expand your skills with specialised career tracks.  With expertise in <strong> HTML, CSS, JavaScript, Git, Tailwind, React.js,</strong> and an introduction to <strong>TypeScript, Alpine.js, Svelte.js, and Vue.js </strong>"}
  ]

  let carousel;

</script>

<section class="education" id="education">
    <Carousel bind:this={carousel} autoplay={true} autoplayDuration={5000} pauseOnFocus={true} autoplayProgressVisible={true}>
      {#each education as block}
        <div class="block">
          <h3 class="block-title">{block.name}</h3>
            <dl class="block-container">
              <dt class="block-date">
                {block.date}
              </dt>
              <dd class="block-content">
                {@html block.content}
              </dd>
            </dl>
        </div>
      {/each}
    </Carousel>
</section>


<style>
  .education {
    width: 100%;
    max-width: 880px;

    margin: 20px auto 15px;

  }
  .block {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;
    min-height: 300px;

    margin-bottom: 6px;
    padding: 20px 10px;

    color: var(--fg-two);

    border: 4px solid var(--ac-two);
    border-radius: 0.375em;
    background-color: var(--ac-two);
    /* background: linear-gradient(36deg, var(--ac-one), var(--ac-two)); */
  }

  .block-title {

    font-size: 1.375rem;
    font-weight: 700;
    letter-spacing: 1.5px;

    margin-bottom: 0.5em;
  }
  .block-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .block-date {
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;

    margin-bottom: 3px;
  }

  .block-content {
    font-size: 1rem;
    font-weight: 400;
  }
</style>