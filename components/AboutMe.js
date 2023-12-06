
class AboutMe extends AppWindow {
  constructor(id, icon, attributes){
    attributes.title = "About Me"
    super(id, icon, attributes)
  }
  createInnerWindow(){
    const tag = document.createElement("div")
    tag.innerHTML = `
      <style>
        .aboutMe-link {
          text-decoration: none;
          color: inherit;
        }
        .aboutMe-link:hover {
          color: var(--ac-one);
        }
        .aboutMe-innerWindow {
          width: 100%;
          height: 100%;

          overflow-y: auto;

          color: var(--fg-one);

          background-color: var(--bg-one);
        }
        /* header */
        .aboutMe-header {
          display: flex;
          justify-content: center;

          flex-wrap: wrap;

          max-width: 1000px;

          padding-bottom: 15px;
          margin: 0 auto;

          border-bottom: 3px dotted var(--ac-one);
        }
        .aboutMe-left-block {
          flex-grow: 1;

          display: flex;
          justify-content: center;

          max-width: 300px;
        }
        .aboutMe-image-box, 
        .aboutMe-image-box> img {
          border-radius: 12%;
          border: 1px solid var(--ac-one);
        }
        .aboutMe-image-box> img {
          width: 100%;
          height: 100%;
        }
        .aboutMe-right-block {
          flex-grow: 1;

          display: flex;
          flex-direction: column;
          justify-content: center;

          min-width: 200px;

          margin: 10px;
        }
        .aboutMe-info>* {
          margin: 4px;
        }
        /* .info h2 */
        .aboutMe-links-list {
          display: grid;
          grid-template-columns: auto auto;

          max-width: 250px;

          padding: 0 10px;
          margin: 5px 10px;
        }

        /* main */
        .aboutMe-main {
          max-width: 1000px;

          padding: 0 8px;
          padding-bottom: 15px;
          margin: 0 auto;

          border-bottom: 3px dotted var(--ac-one);
        }
        .aboutMe-section {
          margin: 10px 0;
          padding: 10px 0;
          border-bottom: 1px dashed var(--ac-one);
        }
        .aboutMe-section:last-child {
          border-bottom: none;
        }
        .aboutMe-section h2 {
          font-size: 19px;
        }
        .aboutMe-section p {
          font-size: 16px;
          padding-left: 5px;
        }
      </style>
      <div class="aboutMe-innerWindow">
        <div class="aboutMe-header">
          <!-- left -->
          <div class="aboutMe-left-block">
            <div class="aboutMe-image-box">
              <img src="resources/Blank-Profile-pic.png" alt="a avatar of the person">
            </div>
          </div>
          <!-- right -->
          <div class="aboutMe-right-block">
            <div class="aboutMe-info">
              <h1>Christopher Vos</h1>
              <h2>Aspiring front-end developer</h2>
            </div>
            <ul class="aboutMe-links-list">
              <a class="aboutMe-link" href="http:////github.com/fox5352"><li>My Github</li></a>
              <a class="aboutMe-link" href="http://www.linkedin.com/in/christopher-vos-6469b7284"><li>My linkedin</li></a>            
            </ul>
          </div>
        </div>
        <div class="aboutMe-main">
          <!-- Section: Summary -->
          <div class="aboutMe-section">
            <h2>Summary:</h2>
            <p>Aspiring full stack Web developer with a proficiency in front end technologies such as 
              <strong>javascript, jQuery, ReactJS</strong> and back  end technologies such as <strong>Node, Express, mongoDB.</strong>
              thats complemented by a solid foundation in <strong>UX design</strong> principles.
              Demonstrated understanding of best coding practices.
              Eager to contribute in creating dynamic and responsive websites</p>
          </div>
          <!-- Section: How I got into coding -->
          <div class="aboutMe-section">
            <h2>How I got into coding:</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ex minus iusto reiciendis aliquid, quos saepe aperiam beatae deserunt! 
              Reprehenderit nostrum sunt ratione illum aliquam facere et culpa quaerat maiores nulla?
            </p>
          </div>
          <!-- Section: My hobbies -->
          <div class="aboutMe-section">
            <h2>My hobbies</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ex minus iusto reiciendis aliquid, quos saepe aperiam beatae deserunt! 
              Reprehenderit nostrum sunt ratione illum aliquam facere et culpa quaerat maiores nulla?
            </p>
          </div>
          <!-- Section: How I spend my time -->
          <div class="aboutMe-section">
            <h2>How I spend my time</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Ex minus iusto reiciendis aliquid, quos saepe aperiam beatae deserunt! 
              Reprehenderit nostrum sunt ratione illum aliquam facere et culpa quaerat maiores nulla?
            </p>
          </div>
        </div>
      </div>
    `;
    this.windowTag.append(tag);

    return tag;
  }
};


