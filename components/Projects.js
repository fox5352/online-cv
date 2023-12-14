
class Projects extends AppWindow {
  constructor(id, icon, attributes){
    attributes.title = "My Projects";
    icon = `
      <svg viewBox="571.936 178.9281 468.917 381.0905" xmlns="http://www.w3.org/2000/svg">
        <rect class="dark" x="571.936" y="180.284" 
        width="468.917" height="378.33" style="stroke: var(--accent-one); fill: var(--bg-one);"/>
        
        <rect class="light" x="572.824" y="179.397" 
        width="452.931" height="380.106" style="stroke: var(--bg-one); fill:var(--accent-one);"/>
      
        <rect class="dark" x="572.824" y="179.397" 
        width="437.833" height="380.106" style="stroke: var(--accent-one); fill: var(--bg-one);"/>
      
        <rect class="light" x="572.824" y="179.397" 
        width="419.183" height="380.106" style="stroke: var(--bg-one); fill:var(--accent-one);"/>
      
        <rect class="dark" x="546.126" y="179.396" 
        width="399.646" height="380.105" style="stroke: var(--accent-one); fill: var(--bg-one);" 
        transform="matrix(0.9999969601631165, -0.002463000128045678, 0, 1.0000029802322388, 26.699445724487305, 1.8609939813613892)"/>
      
        <rect class="light" x="574.6" y="181.173" 
        width="294.85" height="71.049" style="stroke: var(--bg-one); fill: var(--accent-one);"/>
      
      </svg>
    `;
    super(id, icon, attributes)
  }
  createInnerWindow(){
    const tag = document.createElement("div")
    tag.classList.add("aboutMe-innerWindow")
    tag.innerHTML = `
    <style>
    .projects-innerWindow {
      width: 100%;
      height: 100%;

      overflow-y: auto;

      color: var(--fg-one);

      background-color: var(--bg-one);
    }
    .projects-container {
      max-width: 1000px;

      margin: 0 auto;

      border: 6px double var(--ac-one);
      border-top: none;
      border-bottom: none;
    }
    .projects-link {
      text-decoration: none;
      color: var(--ac-one);
      transition: all 300ms linear;
    }
    .projects-link:hover {
      color: var(--ac-two);
      font-size: 14px;
    }
    .projects-header {
      padding: 0 8px;

      font-size: 15px;

      border-bottom: 1px solid var(--ac-one);
    }
    .projects-header-text {
      padding: 5px 5px;
    }
    .projects-section {
      padding-left: 7px;
      border-bottom: 1px dashed var(--ac-two);
    }
    .projects-section:nth-last-child(1) {
      border: none;
    }
    dt {
      padding-left: 8px;
      font-size: 16px;
    }
    dt a {

      color: var(--ac-one);
      font-size: 16px;

      position: relative;
    }
    dt a:hover {
      color: var(--ac-two);
    }
    dt a::before {
      content: "^";
      position: absolute;

      top: -2px;
      right: -6px;

      rotate: 20deg;
    }
    dd {
      padding-left: 12px;

      font-size: 14px;
    }
    dd ul {
      padding-left: 10px;
      margin-bottom: 16px;
    }
    dd li {
      margin-left: 8px;
      margin-bottom: 3px;
    }

  </style>
  <div class="projects-innerWindow">
    <div class="projects-container">
      <div class="projects-header">
        <h1>My Projects</h1>
        <p class="projects-header-text">
          This is a list of some My projects That I've done. the order will be from most relevant to front end development
          If you want to see the full list <a class="projects-link" href="http://github.com/fox5352">click here to go to my github</a>
        </p>
      </div>
      <!-- javascript -->
      <div class="projects-section">
        <h2>JavaScript</h2>
        <dl>
          <!-- TODO: add later -->
          <!-- TODO: add eBooks link & fact check -->
          <dt><a href="https://ebooks-example.netlify.app/products" target="_blank" rel="noopener noreferrer">Ebooks-example</a></dt>
          <dd>
            This is a react project thats supposed to be an example of an e-commerce web site, 
            It fetches data from an <strong>api</strong> and does <strong>token bases authentication</strong> 
            and <strong>State Management</strong>
            <!-- packages list -->
            <h3>packages used</h3>
            <ul>
              <li>react</li>
              <li>redux</li>
              <li>tailwindcss</li>
              <li>react-router</li>
              <li>bootstrap-icons</li>
            </ul>
          </dd>

          <!-- TODO: add todoBuddy link & fact check -->
          <dt><a href="https://todo-buddy-300.netlify.app/" target="_blank" rel="noopener noreferrer">TodoBuddy</a></dt>
          <dd>
            This is a a react based project that uses local storage to store notes created and then displays them, 
            it uses <strong>React, redux</strong> and <strong>react router</strong>
            <h3>packages used</h3>
            <ul>
              <li>react</li>
              <li>redux</li>
              <li>react-router</li>
              <li>bootstrap-icons</li>
            </ul>
          </dd>
          
            <!-- TODO: add simon game link-->
          <dt><a href="https://fox5352.github.io/simon-game/" target="_blank" rel="noopener noreferrer">simon game</a></dt>
          <dd>
            This was one of my first projects I built it uses <strong>jQuery, html</strong> 
            and <strong>css</strong>. The project is very basic but i kept it up to remind me of what I've learnt
            <h3>packages used</h3>
            <ul>
              <li>jQuery</li>
            </ul>
          </dd>
        </dl>
      </div>
      <!-- TODO:python -->
      <div class="projects-section">
        <h2>Python</h2>
        <dl>
          <!-- Speech to text converter -->
          <dt><a href="https://github.com/fox5352/Speech_to_text_converter" target="_blank" rel="noopener noreferrer">Speech to text converter</a></dt>
          <dd>
            A python script that converters input from a mic into text it uses the
            <strong> SpeechToText package </strong>and does multi core processing and does checks to stop race conditions
            <h3>pip list</h3>
            <ul>
              <li>SpeechRecognition</li>
              <li>PyAudio</li>
            </ul>
          </dd>
          
          <!-- Windows Music Player -->
          <dt><a href="https://github.com/fox5352/Windows-mp3-player" target="_blank" rel="noopener noreferrer">Windows Music Player</a></dt>
          <dd>
            This a a music player that uses <strong>pygame</strong> and <strong>Kivy, kivymd</strong> 
            it's and older project of mine
            <h3>pip list</h3>
            <ul>
              <li>Kivy</li>
              <li>Kivymd</li>
              <li>pygame</li>
            </ul>
          </dd>
        </dl>
      </div>

      <!-- TODO:Rust -->
      <div class="projects-section">
        <h2>Rust</h2>
        <dl>
          <dt><a href="https://github.com/fox5352/tic-tac-toe" target="_blank" rel="noopener noreferrer">Tic Tac Toe game</a></dt>
          <dd>So Rust i wanted to see what the hype was about and im pleasantly surprised I used this project to learn it, 
            And its really a great experience using this language, I've coded in both c and cpp in the past and the safety of rust is a 
            good welcome for me because I never really taped into the true power of c/cpp so its mostly just foot guns when using c/cpp so 
            rust is a good counter part for me to use instead
            <h3>creates used</h3>
            <ul>
              <li>None</li>
            </ul>
          </dd>
            
        </dl>
      </div>
      <!-- Offlinthers -->
      <div class="projects-section">
        <h2>Others</h2>
        <!-- TODO: add more -->
        <dl>
          <dt><a href="http://githib.com/fox5352" target="_blank" rel="noopener noreferrer">GitHub</a></dt>
          <dd>
            Well all of my projects are on github, 
            I can do basic tasks like <strong>add, commits, pull, branch, merge</strong>, 
            I understand the impotence of a good history and the power of a <strong>V.C.S</strong>
          </dd>
          <dt>Rest API</dt>
          <dd>
            I know how to both create an api with <strong>Node</strong> and uses <strong>API's</strong>, The ones I've used has been json based
          </dd>
        </dl>
      </div>
    </div>
  </div>
    `;
    this.windowTag.append(tag);

    return tag;
  }
};