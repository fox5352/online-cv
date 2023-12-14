
class AboutMe extends AppWindow {
  constructor(id, icon, attributes){
    attributes.title = "About Me"
    icon = `
    <div class="icon">
      <svg viewBox="0 0 400 400" version="1.1" id="svg1" xml:space="preserve" fill="inherit" 
        xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <defs id="defs1" />
        <g id="layer1">
          <path style="fill:inherit" d="m 0.13021498,399.93575 -0.07102635,-9.66066 6.65029047,-9.63878 38.8607409,-19.22303 49.255339,-23.30669 30.936281,-14.1902 3.62629,-1.77745 4.08724,-7.50907 1.65693,-3.87237 1.22215,-3.40173 -0.15783,-13.59975 4.57581,0.0574 9.06985,-6.15669 1.49766,-1.05643 0.30096,-31.59775 -10.93196,-20.1844 -5.08269,-17.59158 -0.91832,-3.43581 -4.07756,-0.44947 -2.68429,-2.45221 -3.75435,-12.73201 -1.92812,-8.58916 -3.36048,-11.42162 -0.0979,-11.16369 1.53281,-2.02102 5.23084,0.30599 -2.94724,-25.38296 -1.93672,-17.01619 -0.0517,-21.33768 1.80293,-4.256555 1.95968,-3.513294 4.10482,-3.524413 4.09406,-1.719699 4.09011,-1.745526 2.24415,-2.054384 2.73236,-5.634039 0.19048,-6.634507 2.08344,-3.653553 12.24092,-8.777494 12.98204,-1.987302 13.1797,-1.694947 39.25066,-1.798259 9.948,1.739429 11.07042,3.688707 6.43291,3.70736 5.60319,3.895329 5.21721,5.348141 3.59902,3.716328 0.27658,6.106472 4.74226,2.434985 5.72444,5.504183 3.15637,7.190521 2.19858,9.259617 0.11444,16.51721 -3.36371,18.26417 -1.32906,22.80197 6.57927,-0.32356 -0.0136,14.24078 -2.06407,8.47581 -1.89583,7.64753 -3.03512,10.27802 -4.18231,7.37311 -1.54787,1.43129 -2.9745,-0.005 -0.24464,4.01801 -3.56316,11.98014 -5.92819,14.08151 -3.17861,7.18263 -3.11116,4.26158 -0.61377,30.97897 2.31912,3.11512 3.7608,0.86846 4.27773,2.0655 4.67913,1.45102 -0.66722,17.03054 h 2.20146 l 1.35596,5.577 3.64207,5.07193 6.74463,4.69993 50.13994,23.26078 57.0582,26.46915 6.21588,3.80385 3.77659,3.93981 2.35069,3.6123 2.92033,4.80146 0.0391,7.9058 z" id="path1" />
        </g>
      </svg>
    </div>
    `;
    super(id, icon, attributes)
  }
  createInnerWindow(){
    const tag = document.createElement("div")
    tag.classList.add("aboutMe-innerWindow")
    tag.innerHTML = `
        <div class="aboutMe-header">
        <!-- left -->
        <div class="aboutMe-left-block">
          <div class="aboutMe-image-box">
            <img src="resources/online-cv.png" alt="a avatar of the person">
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
          <p>
              So the way I got into coding was from a mobile game I played, 
              it made many references to the fact that it was made in python, 
              and then I found a few free site to learn it and I was hooked.
              The whole process of creating and problem solving is what keep me learning
          </p>
        </div>
        <!-- Section: My hobbies -->
        <div class="aboutMe-section">
          <h2>My hobbies</h2>
          <p>
              So I have a few hobbies, the mostly revolve around creating and problem solving the first is <strong>Gaming</strong>
              most of the game i play are puzzles and fps based, the second is <strong>Coding</strong> because its like a puzzle game, third is <strong>Welding</strong>
              and <strong>any thing car related</strong>
          </p>
        </div>
        <!-- Section: How I spend my time -->
        <div class="aboutMe-section">
          <h2>How I spend my time</h2>
          <p>
              I mostly spend my time learning new things and playing games and codling projects,
          </p>
        </div>
      </div>
    `;
    this.windowTag.append(tag);

    return tag;
  }
};
