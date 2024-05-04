<script>
  import { fade } from "svelte/transition";
</script>

<div transition:fade class="box">
  <div class="loading-box">
    <div class="outer">
      <div class="inner">
        <div data-text="loading" id="loading-text">loading...</div>
      </div>
    </div>
  </div>
</div>

<style>
  .box, .box:before, .box:after{
    padding: 0;
    margin: 0;
    box-shadow: border-box;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    background-color: var(--bg-one); 
  }
  .loading-box{
    width: clamp(60px, 250px, 500px);
    height: clamp(60px, 250px, 500px);
  /*   background-color: cornflowerblue; */
  }
  .outer{
    width: 100%;
    height: 100%;

    padding: 5px;

    border-radius: 50%;
    background: conic-gradient(var(--ac-two) 0.10turn,
    var(--bg-one) 0.09turn, var(--bg-one) 0.27turn,
    var(--ac-two) 0.27turn, var(--ac-two) 0.80turn,
    var(--bg-one) 0.54turn);
    animation: rotate 5s ease-in-out infinite;
  }
  /*10 - 20 turn */
  /*54 - 80 turn */

  .inner{
    width: 90%;
    height: 90%;

    margin: 5%;

    border-radius: 50%;
    background-color: var(--bg-one);
    position: relative;
    animation: counter-rotate 5s ease-in-out infinite;
  }
  #loading-text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      --turn-one: 0.20turn;
    }50% {
      transform: rotate(360deg);
      --turn-one: 0.10turn;
    }100% {
      transform: rotate(0deg);
    }
  }
  @keyframes counter-rotate {
    0%{
      transform: rotate(360deg);
    }
    50%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>