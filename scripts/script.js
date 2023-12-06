
class App {
  constructor(){
    // TODO: use gen ai stock images
    // background image vars
    this.backgroundImages = [
      "resources/image1.jpg",
      "resources/image2.jpg",
      "resources/image3.png",
      "resources/image4.png",
      "resources/image5.png",
      "resources/image6.png",
      "resources/image7.png",
    ]
    this.imageIndex = Math.round(Math.random() * this.backgroundImages.length - 1);

    // apps shortcuts list
    this.appsShortcutsList = [
      {id:"aboutMe", app:(tag)=> new AboutMe(tag) },
    ]

    this.activeAppsList = []
  }

  loaderHeader(){
    // settings toggle menu 
    document.getElementById("setting-btn").addEventListener("click", event=>{
      document.getElementById("setting-btn").classList.toggle("header-btn-active");
      document.getElementById("setting-menu").classList.toggle("setting-menu-toggle")
    })

    // document.getElementById("toggle-mode")// TODO: add ad dark mode switch
    // document.getElementById("toggle-screen")// TODO: add a fullscreen toggle


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

  loadMain() {
    const root = document.getElementById("root");

    
    // adds eventlisterns to app shortcuts
    for (let index = 0; index < this.appsShortcutsList.length; index++) {
      const shortcutId = `${this.appsShortcutsList[index].id}-shortcut`;

      document.getElementById(shortcutId)?.addEventListener("dblclick", event=>{
        const appId = `${this.appsShortcutsList[index].id}-app`;
        this.appsShortcutsList[index].app(appId, "<span></span>");
        this.activeAppsList.push(appId);
      })
    }

    // 

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
    // app-manger-btn
    document.getElementById("app-man-btn").addEventListener("click", event=>{
      document.getElementById("app-man-btn").classList.toggle("app-man-toggle");
      document.getElementById("app-man-menu").classList.toggle("app-man-menu-toggle");
    });
  }
  
  updateLoop(){

  }
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
