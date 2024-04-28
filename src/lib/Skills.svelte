<script>
	import Skillcell from "./components/SkillCell.svelte";
import SkillCell from "./components/SkillCell.svelte";

  let skills = [
    { name: "Html", detail: "capable of build fully functional web sites using sematic html and other template languages"},
    { name: "Css", detail: "Can use Css to make visual stunning pages and efficient animations"},
    { name: "JavaScript", detail: "capable of build fully functional web sites using javascript for both functionality and complex styling" },
    { name: "TypeScript", detail: "capable of building basic application with it still learning more details"},
    { name: "nodes", detail: "capable of build fully functional servers using express and node"},
    { name: "React", detail: "capable of build fully functional web sites using react for both dynamic functionality and complex styling" },
    { name: "MongoDB", detail: "used to store data that scales easily while still customizable" },
    { name: "PostgreSQL", detail: "able to use for basic querys not completely familiar with it"},
  ]
</script>

<section class="skills" id="skills">
  <h2>Skills:</h2>
  <div class="flex">
    {#each skills as skill}
      <Skillcell name={skill.name} detail={skill.detail} />
    {/each}
  </div>
</section>

<style>
  .skills {
    width: 80%;

    margin: 1.25em auto;
  }
  .flex {
    display: flex;
    flex-direction: column;
    gap: 0.5625em;
  }

  @media screen and (min-width: 540px) {
   .skills {
      width: 70%;
    }
  }
  @media screen and (min-width: 640px) {
   .skills {
      width: 60%;
    }
  }
</style>