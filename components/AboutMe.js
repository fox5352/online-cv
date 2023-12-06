
class AboutMe {
  static isRunning = false;
  static AboutMeTag = null;
  static attributes = {
      title:"About Me", ["top-limit"]:"0px",["bottom-limit"]:"0px", ["fg-font"]:"monospace", ['window-size']:`0px`}
    //   ,["fg-one"]:"rgba(0,0,0,1)", ["fg-two"]:"rgba(255, 251, 245, 1)", 
    //   ["bg-one"]:"rgba(255, 251, 245, 1)", ["bg-two"]:"rgba(0, 0, 0, 1)", ["ac-one"]:"#da9020"
    // }


  constructor(id, icon){
    AboutMe.AboutMeTag = document.createElement('window-card');
    // AboutMe.AboutMeTag.id = id;

    const windowHeight = document.querySelector("body").offsetHeight;
    AboutMe.attributes["window-size"] = `${windowHeight}px`;

    this.attributes = AboutMe.attributes;

    for (const key in this.attributes) {
      AboutMe.AboutMeTag.setAttribute(key, this.attributes[key]);
    }

    document.getElementById("main").appendChild(AboutMe.AboutMeTag)

    const activeButton = document.createElement("div");
    activeButton.classList.add("active-app");
    activeButton.innerHTML = icon;
    activeButton.id = id;
    

    document.getElementById("active-bar").appendChild(activeButton)
  }
};
