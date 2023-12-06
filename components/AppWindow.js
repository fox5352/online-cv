class AppWindow {
  constructor(id, icon, attributes){
    // create elements
    this.aboutMeTag = this.createWindow(id);
    this.activeButton = this.createActiveButton(id, icon)

    // append attributes
    this.attributes = attributes;
    this.appendAttributes();

    // create active button
    document.getElementById("main").appendChild(this.aboutMeTag)
    document.getElementById("active-bar").appendChild(this.activeButton)
  }

  createWindow(id){
    const tag = document.createElement('window-card');
    tag.id = `${id}-app`;

    return tag
  }
  createActiveButton(id, icon){
    const tag = document.createElement("div");
    tag.classList.add("active-app");
    tag.innerHTML = icon;
    tag.id = `${id}-button`;
    // added a toggle uncollapse on click
    tag.addEventListener("click", event=>{
      this.aboutMeTag.setAttribute("window-showing", "1");
    })

    return tag
  }

  appendAttributes(){
    for (const key in this.attributes) {
      this.aboutMeTag.setAttribute(key, this.attributes[key]);
    }
  }
}