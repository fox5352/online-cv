
class Skills extends AppWindow {
  constructor(id, icon, attributes){
    attributes.title = "My Skills";
    icon = `
    <div class="icon">
      <svg viewBox="553.286 170.515 412.078 410.302" fill="inherit" xmlns="http://www.w3.org/2000/svg">
        <rect x="553.286" y="205.151" width="67.496" height="375.666" style="fill:inherit"/>
        <rect x="650.089" y="255.773" width="67.496" height="325.044" style="fill:inherit"/>
        <rect x="733.57" y="335.702" width="67.496" height="243.339" style="fill:inherit"/>
        <rect x="817.939" y="170.515" width="67.496" height="408.526" style="fill:inherit"/>
        <rect x="897.868" y="416.519" width="67.496" height="158.97" style="fill:inherit"/>
      </svg>
    </div>
    `;
    super(id, icon, attributes)
  }
  createInnerWindow(){
    const tag = document.createElement("div")
    tag.classList.add("aboutMe-innerWindow")
    tag.innerHTML = `
        <div class="mySkills-innerWindow">
          <div class="mySkills-container">
            <div class="mySkills-header">
              <!-- section: My skills summary -->
              <div class="mySkills-section">
                <h1>My skills summary:</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Soluta, dolore aut obcaecati laborum commodi ducimus quaerat, 
                  libero, nostrum nulla repellat eveniet ipsam! Omnis, inventore 
                  at blanditiis molestias vel saepe atque?
                </p>
              </div>
              <!-- section: html -->
              <div class="mySkills-section">
                <h2>Html:</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Eveniet error optio quos nisi a, ratione aspernatur, aliquid 
                  exercitationem saepe ullam blanditiis ipsum quam. Unde iure commodi 
                  blanditiis incidunt, dolorum ullam.
                </p>
              </div>
              <!-- section css -->
              <div class="mySkills-section">
                <h2>Css</h2>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                  Saepe sed autem eius vitae quasi nihil totam dolor, ea corrupti 
                  inventore. Quo, aperiam sequi et ipsum autem beatae tenetur illum eaque.
                </p>
              </div>
              <!-- section: javascript -->
              <div class="mySkills-section">
                <h2>javaScript</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Nisi pariatur atque minus molestiae eos optio quaerat quisquam 
                  nemo, at assumenda facere omnis eaque esse numquam iusto modi? 
                  Voluptas, voluptate tempora!
                </p>
              </div>
              <!-- section: Reactjs -->
              <div class="mySkills-section">
                <h2>Reactjs</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Quos, voluptatum recusandae odio similique iusto aut corrupti 
                  quas blanditiis quia, adipisci illo ex fuga maiores. Quasi sit 
                  placeat minus corrupti officia.
                </p>
              </div>
              <!-- section: Nodejs -->
              <div class="mySkills-section">
                <h2>Node / Express</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Maxime tenetur facere labore a voluptatibus delectus facilis 
                  necessitatibus tempora nisi quo, nam iste ut odit accusantium 
                  magnam quis? Inventore, accusantium doloremque.
                </p>
              </div>
              <!-- section MongoDB -->
              <div class="mySkills-section">
                <h2>MongoDB</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, 
                  adipisicing elit. Fuga soluta quo repellendus 
                  corrupti minima magni quos error est id incidunt 
                  molestiae excepturi inventore hic perspiciatis assumenda ipsa, aperiam eum harum?
                </p>
              </div>
              <!-- secion: MySQL -->
              <div class="mySkills-section">
                <h2>MySQL</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                  Beatae nam nisi quae minus eos quam magnam, dolores officiis 
                  sit incidunt voluptatem alias repellat voluptates? Minima sed 
                  accusantium pariatur porro reiciendis?
                </p>
              </div>
              <!-- section: Nextjs13 -->
              <div class="mySkills-section">
                <h2>Nextjs13</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Aut placeat architecto a ipsam nesciunt alias harum dolore, 
                  debitis error consequatur quis repudiandae sunt corrupti atque 
                  magnam odit sed illo maxime.
                </p>
              </div>
              <!-- section: svelte -->
              <div class="mySkills-section">
                <h2>svelte</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                  Ipsam nesciunt distinctio, quidem id officiis eum autem! 
                  Asperiores maiores a amet aliquid sit facilis aliquam perspiciatis 
                  maxime. Perspiciatis libero deserunt nobis.
                </p>
              </div>
              <!-- section other languages -->
              <div class="mySkills-section">
                <h1>Other languages:</h1>
                <h2>Python</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni tenetur, repellendus error quibusdam, dolorem facere non temporibus odio odit earum, quod et? Modi deleniti voluptatum asperiores tenetur ratione illum non!
                </p>
                <h2>C/Cpp</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsam officia tempore, ab quos quod voluptatum blanditiis placeat temporibus vel pariatur id eligendi odio voluptate vero recusandae libero aut at.</p>
                <h2>Rust</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ex facere? Natus dicta temporibus nam aut alias accusantium mollitia rerum aspernatur dolorum perspiciatis. Ipsam eveniet neque excepturi, non nesciunt laboriosam?
                </p>
                
              </div>
            </div>
          </div>
        </div>
    `;
    this.windowTag.append(tag);

    return tag;
  }
};


