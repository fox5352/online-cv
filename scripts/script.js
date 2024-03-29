
class App {
  constructor(){
    // TODO: use gen ai stock images
    // background image vars

    // "resources/background/image2.jpg",
    
    this.backgroundImages = [
      "resources/background/image1.jpg",
      "resources/background/image2.jpg",
      "resources/background/image3.jpg",
    ]
    this.imageIndex = Math.floor(Math.random() * this.backgroundImages.length)
    console.log(this.imageIndex);

    const windowHeight = document.querySelector("body").offsetHeight;
    let attributes = {
      ["top-limit"]:"0px",["bottom-limit"]:"0px",
      ["window-showing"]:"1", ["fg-font"]:"monospace", ['window-size']:`${windowHeight}px`
    }

    this.darkMode = false;

    // apps shortcuts list
    this.appsShortcutsList = [
      {id:"aboutMe", menuId:"aboutMe-menu-shortcut" , app:(id, icon)=> new AboutMe(id, icon, attributes)},
      {id:"mySkills", menuId:"mySkills-menu-shortcut" , app:(id, icon)=> new Skills(id, icon, attributes)},
      {id:"myProjects", menuId:"myProjects-menu-shortcut", app:(id, icon)=> new Projects(id, icon, attributes)},
      {id:"myResume", menuId:"", app:(id, icon)=> new Resume(id, icon, attributes)}
    ]

    this.activeAppsList = []
  }

  loaderHeader(){
    // settings toggle menu 
    document.getElementById("setting-btn").addEventListener("click", event=>{
      document.getElementById("setting-btn").classList.toggle("header-btn-active");
      document.getElementById("setting-menu").classList.toggle("setting-menu-toggle")
    })

    
    // TODO: disable btn till i get a better theme
    // dark mode switch
    // document.getElementById("toggle-mode").addEventListener("click", ()=>{
    //   this.toggleDarkMode();
    //   document.getElementById("setting-btn").classList.toggle("header-btn-active");
    //   document.getElementById("setting-menu").classList.toggle("setting-menu-toggle")
    // })
    
    // Fullscreen toggle
    document.getElementById("toggle-screen").addEventListener("click", ()=>{
      const isFullscreen = document.fullscreenElement

      if (!isFullscreen) {
        document.documentElement.requestFullscreen();
        document.getElementById("toggle-screen").innerHTML = "window"
      }else{
        document.getElementById("toggle-screen").innerHTML = "fullscreen"
        document.exitFullscreen();
      }
      document.getElementById("setting-btn").classList.toggle("header-btn-active");
      document.getElementById("setting-menu").classList.toggle("setting-menu-toggle")
    })

    // timer updater
    const updateTime = () =>{
      const time_ms = new Date()
      document.getElementById("time").innerHTML = `${time_ms.toLocaleTimeString()}`;
    }

    // sets the time
    updateTime();
    // updates the time every second
    setInterval(() => {
      const time_ms = new Date()
      updateTime();
    }, 1000);
  }

  // TODO: disable this till i do a better theme
  // checkPrefersDarkMode(){
  //   const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //   if (prefersDarkMode) {
  //     this.toggleDarkMode();
  //   }
  // }
  
  loadMain() {
    const root = document.getElementById("root");
    
    // adds eventlistener to app shortcuts
    for (let index = 0; index < this.appsShortcutsList.length; index++) {
      const shortcutId = `${this.appsShortcutsList[index].id}-shortcut`;
      document.getElementById(shortcutId)?.addEventListener("dblclick", event=>{
        const appId = `${this.appsShortcutsList[index].id}`;

        // filter returns if app already in list
        for (let activeIndex = 0; activeIndex < this.activeAppsList.length; activeIndex++) {
          if (this.activeAppsList[activeIndex].appId == this.appsShortcutsList[index].id) {
            // TODO: find a way to pass a function to the web component that decrements the app counter and checks here
          }
        }

        const activeApp = this.appsShortcutsList[index].app(appId, "<span>w</span>");

        this.activeAppsList.push({appId, ButtonId:`${this.appsShortcutsList[index].id}-button`, activeApp});
      })
    }

    // set first wallpaper and updates every 25 seconds
    const update_background = () => {
      // TODO: fit image to screen
      root.style.backgroundImage = `url(${this.backgroundImages[this.imageIndex]})`;
      root.style.backgroundSize = "stretch";
      if (this.imageIndex == this.backgroundImages.length - 1) {
        this.imageIndex = 0;
      }else {
        this.imageIndex ++;
      }
    }
    
    update_background()
    setInterval(() => {
      update_background();
    }, 1000 * 25);
  }

  loadFooter() {
    // adds eventlistener to app menu shortcuts
    for (let index = 0; index < this.appsShortcutsList.length; index++) {
      const shortcutId = this.appsShortcutsList[index].menuId

      document.getElementById(shortcutId)?.addEventListener("click", event=>{
        const appId = `${this.appsShortcutsList[index].id}`;
        let isActive = false

        // filter returns if app already in list
        for (let activeIndex = 0; activeIndex < this.activeAppsList.length; activeIndex++) {
          if (this.activeAppsList[activeIndex].appId == this.appsShortcutsList[index].id) {
            // isActive = true;
          }
        }

        if (isActive) {
          document.getElementById(`${this.appsShortcutsList[index].id}-app`).setAttribute("window-showing", "1");;
        }else{
          this.appsShortcutsList[index].app(appId, `<div class="icon">:::</div>`);
          this.activeAppsList.push({appId, ButtonId:`${this.appsShortcutsList[index].id}-button`});
        }
        document.getElementById("app-man-btn").classList.toggle("app-man-toggle");
        document.getElementById("app-man-menu").classList.toggle("app-man-menu-toggle");
      })
    }
    
    // app-manger-btn
    document.getElementById("app-man-btn").addEventListener("click", event=>{
      document.getElementById("app-man-btn").classList.toggle("app-man-toggle");
      document.getElementById("app-man-menu").classList.toggle("app-man-menu-toggle");
    });
  }
  
  updateLoop(){}
};

const load = ()=>{
  const app = new App();

  app.loaderHeader()
  app.loadMain();
  app.loadFooter();

  setInterval(() => {
    app.updateLoop();
  }, 1000/15);
}
load()
