const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host {
      --fg-font: fantasy; 
      --fg-size: 17px;

      --fg-one: #ffff;
      --fg-two: #ffff;

      --bg-one: #444444;
      --bg-two: #444444;

      --ac-one: #ffff;
      --ac-two: #ffff;

      --animation-duration: 300ms;
    }

    .body {
      position: absolute;

      top: 40px;
      left: 40px;
      z-index: 8;

      width: 50%;
      height: 50%;
      resize: both;

      overflow: hidden;

      color: var(--fg-one);

      border-radius: 8px 8px 0 0;
      background-color: var(--bg-one);

      transition: all var(--animation-duration) linear;
    }
    .control-bar {
      display: flex;
      justify-content: space-between;

      padding: 2px 15px;

      height: 20px;

      border-bottom: 1px solid var(--ac-one);
    }
    .drag-bar{
      flex-basis: 60%;

      display: flex;
      justify-content: center;

      border-radius: 8px;
      border: 1px solid var(--ac-one);
      transition: all var(--animation-duration) linear;
    }
    .drag-bar:hover {
      transform: scale(0.95);
    }
    .drag-bar-toggle {
      color: var(--bg-one);
      background-color: var(--ac-one);
    }
    .controls {
      display: flex;
    }

    .window-control-btn {
      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0 2px;

      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0);
      background-color: var(--ac-one);

      transition: all var(--animation-duration) linear;
    }
    .window-control-btn:hover {
      cursor: pointer;

      border-color: var(--ac-one);
      color: var(--ac-one);
      background-color: var(--bg-one);
    }
    .window {
      width: 100%;
      height: calc(100% - 25px);

      box-sizing: border-box;
      background-color: inherit;
    }
  </style>

  <div id="root" class="body">
    <div id="control-bar" class="control-bar">
      <div id="window-title">bt7271</div>
      <div id="drag-bar" class="drag-bar">Click to drag</div>
      <div class="controls">
        <button id="collapse-btn" class="window-control-btn">_</button>
        <button id="fullscreen-btn" class="window-control-btn">#</button>
        <button id="close-btn" class="window-control-btn">X</button>
      </div>
    </div>
    <div class="window">
      <slot></slot>
    </div>
  </div> 
`;

// define component
customElements.define("window-card", class WindowCard extends HTMLElement {
  static windowsOpen = 0;

  constructor(){
    super();

    // fullScreen properties
    this.isFullScreen = false;

    // attributes
    this.attributesList = {
      ['top-limit']: `0px`,
      ['bottom-limit']: `0px`,
    };

    // dragging properties
    this.mouseX = 0;
    this.mouseY = 0;

    this.offsetX = false;
    this.offsetY = false;
    this.isDragging = false;
    this.loop = false

    //create shadow root
    this.attachShadow({ mode: "open" });

    // add to deep clone of temple to shadow dom
    this.shadowRoot.append(template.content.cloneNode(true));
    // increment list
    WindowCard.windowsOpen++;
  }
  // Invoked when the custom element is first connected to the document's DOM.
  connectedCallback(){
    // collapse button
    this.shadowRoot
      .getElementById("collapse-btn")
      .addEventListener("click", event=>this.collapseWindow(event));

    // toggle fullscreen window
    this.shadowRoot
      .getElementById("fullscreen-btn")
      .addEventListener("click", event=>this.toggleFullScreen(event));

    // close window remove from dom
    this.shadowRoot
      .getElementById("close-btn")

    // drag window
    this.shadowRoot
      .getElementById("drag-bar")
      .addEventListener("click", event=>this.handleMouseDown(event));
         
    this.addAttributes();
    this.attributeChangedCallback();

  }

  // Invoked when the custom element is disconnected from the document's DOM.
  disconnectedCallback(){
    // collapse button
    this.shadowRoot
      .getElementById("collapse-btn")
      .removeEventListener("click", event=>this.collapseWindow(event));
    // toggle fullscreen window
    this.shadowRoot
      .getElementById("fullscreen-btn")
      .removeEventListener("click", event=>this.toggleFullScreen(event));
    // close window remove from dom
    this.shadowRoot
      .getElementById("close-btn")
    // drag window
    this.shadowRoot
      .getElementById("drag-bar")
      .removeEventListener("mousedown", event=>this.dragWindow(event));
  }

  // Invoked when the custom element is moved to a new document.
  adoptedCallback(){}

  // Invoked when one of the custom element's attributes is added, removed, or changed.
  attributeChangedCallback() {
    this.addAttributes()

    // title
    if (this.attributesList.title) {
      this.shadowRoot.getElementById("window-title").innerHTML = this.attributesList.title;
    }
    // TODO: add fg-font, fg-one, fg-two, bg-one, bg-two, ac-one, to css var
  }

  // gets attributes and adds them to a list
  addAttributes(){

    //loop list of attributes
    for (let index = 0; index < this.attributes.length; index++) {
      const attribute = this.attributes[index];
      this.attributesList[attribute.name] = attribute.value;
    }
  }
  
  // toggle window size
  collapseWindow(event){
    event.stopPropagation()
    this.shadowRoot.getElementById("root").style.scale = 0
  }

  toggleFullScreen(event){
    const windowTag = this.shadowRoot.getElementById("root");
    
    if (!this.isFullScreen) {
      // positioning
      windowTag.style.left = "0px";
      windowTag.style.top = this.attributesList["top-limit"];
      // sizing
      windowTag.style.width = `calc(100%)`;
      windowTag.style.height = "100%"// `calc( - ${this.attributesList["top-limit"]} - ${this.attributesList["bottom-limit"]})`;
      windowTag.style.borderRadius = "0";


      this.isFullScreen = !this.isFullScreen     
    }else {
      // sizing
      windowTag.style.width = "50%";
      windowTag.style.height = "50%";
      // positioning
      windowTag.style.left = `${Math.floor((document.querySelector('body').offsetWidth / 2) / 2)}px`;
      windowTag.style.top = `${Math.floor((document.querySelector('body').offsetHeight / 2) / 2)}px`;

      windowTag.style.borderRadius = " 8px 8px 0 0";

      this.isFullScreen = !this.isFullScreen
    }
  }
  
  closeWindow(event){}

  // dragWindow
  handleMouseDown(event){
    if (this.isFullScreen != true) {
      if (this.isDragging == false) {
        const windowTag = this.shadowRoot.getElementById("root");
        this.isDragging = true;
  
        this.offsetX = event.clientX - windowTag.getBoundingClientRect().left;
        this.offsetY = event.clientY - windowTag.getBoundingClientRect().top;
  
        // Add event listeners for mousemove and mouseup
        document.addEventListener("mousemove", event=>this.setMousePos(event));
        this.loop = setInterval(() => {
          this.updatePosition();
        }, 1000/30);
        event.target.innerHTML = "click to stop dragging"
        event.target.classList.toggle("drag-bar-toggle")
      }else{
        event.target.innerHTML = "click to drag"
        event.target.classList.toggle("drag-bar-toggle")
        this.handleMouseup(event)
      }
    }
  }
  setMousePos(event){
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
  updatePosition(){
    const windowTag = this.shadowRoot.getElementById("root");
    const topLimit = this.attributesList["top-limit"].split('p')[0];
    const bottomLimit = this.attributesList["bottom-limit"].split('p')[0];
    const containerHeight = this.shadowRoot.getElementById("root").offsetHeight
    const viewportHeight = document.querySelector('body').offsetHeight

    if (this.isDragging) {
      // Update the position of the element based on mouse movement
      windowTag.style.left = `${(this.mouseX - this.offsetX)}px`;
      // if allowed to move within top and bottom of container
      if ((this.mouseY - this.offsetY) > Number(topLimit) && (this.mouseY + containerHeight) < ((viewportHeight + 15) - bottomLimit)) {
        windowTag.style.top = `${(this.mouseY - this.offsetY - 25 )}px`;
      }
    }
  }
  handleMouseup(){
    this.isDragging = false;
    
    // clear updater
    if (this.loop != false) {
      clearInterval(this.loop)
      this.loop = false
    }
    this.shadowRoot.removeEventListener("mousemove", event=>this.setMousePos(event));
    // mouse up
    this.shadowRoot.getElementById("drag-bar")
      .removeEventListener("mouseup", this.handleMouseup)
  }
});
