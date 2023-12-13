
class Resume extends AppWindow {
  constructor(id, icon, attributes){
    attributes.title = "My Projects";
    icon = `
      <svg viewBox="94.376 50.454 327.548 395.297" xmlns="http://www.w3.org/2000/svg">

      <rect x="94.376" y="50.454" width="327.548" height="395.297" 
      style="fill: var(--bg-one); stroke: var(--accent-one); stroke-width: 3px;"/>
          
      <ellipse style="stroke: var(--accent-one);
          stroke-width: 3px; fill: var(--accent-one);" 
          cx="367.052" cy="105.606" rx="41.993" ry="43.393"/>
      
      <rect x="106.134" y="70.051" width="180.851" height="17.917" 
          style="stroke: var(--accent-one); fill: var(--accent-one);"/>
          
      <rect x="107.814" y="126.042" width="183.091" height="13.998" 
          style="stroke: rgb(255, 255, 255); fill: var(--accent-one);"/>
          
      <rect x="117.332" y="179.234" width="272.116" height="49.272" 
          style="stroke: rgb(255, 255, 255); fill: var(--accent-one);"/>
          
      <rect x="121.812" y="270.499" width="267.077" height="54.311" 
          style="stroke: rgb(255, 255, 255); fill: var(--accent-one);"/>
          
      <rect x="120.692" y="359.525" width="268.757" height="55.431" 
          style="stroke: rgb(255, 255, 255); fill: var(--accent-one);"/>
          
      </svg>
    `;
    super(id, icon, attributes)
  }
  createInnerWindow(){
    const tag = document.createElement("div")
    tag.classList.add("aboutMe-innerWindow")
    tag.innerHTML = `
    <style>
    .resume-innerWindow {
      width: 100%;
      height: 100%;

      overflow-y: auto;

      color: var(--fg-one);

      background-color: var(--bg-one);
    }
    .resume-pdf {
      width: 30%;
      height: 90%;

      margin: 0 auto;
      
      position: relative;
    }
    .resume-pdf img {
      width: 100%;
      height: auto;
    }
    .resume-btn {
      position: absolute;
      top: 0;
      left: 0;

      padding: 5px;

      border: 2px solid rgba(0, 0, 0, 0);
      background-color: var(--bg-one);
      transition: all 250ms linear;
    }
    .resume-btn:hover {
      color: var(--ac-one);

      border-color: var(--ac-one);
      border-radius: 10px;
      scale: 0.87;
    }
    .resume-btn::first-letter {
      text-transform: capitalize;
    }
  </style>
  <div class="resume-innerWindow">
    <div class="resume-pdf">
      <a href="resources/resume.pdf" target="_blank" download>
        <button class="resume-btn">download</button>
      </a>
      <img src="resources/resume.png" alt="" srcset="">
    </div>
  </div>
    `;
    this.windowTag.append(tag);

    return tag;
  }
};