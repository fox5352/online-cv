class AppWindow {
  constructor(id, icon, attributes){
    // create elements & append
    this.windowTag = this.createWindow(id);
    this.activeButton = this.createActiveButton(id, icon)
    this.innerWindow = this.createInnerWindow();


    // append attributes
    this.attributes = attributes;
    this.appendAttributes();

    // create active button
    document.getElementById("main").appendChild(this.windowTag)
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
      this.windowTag.setAttribute("window-showing", "1");
    })

    return tag
  }
  createInnerWindow(){
    const tag = document.createElement("div")
    tag.innerHTML = ``;
    this.windowTag.append(tag);

    return tag;
  }

  appendAttributes(){
    for (const key in this.attributes) {
      this.windowTag.setAttribute(key, this.attributes[key]);
    }
  }
}