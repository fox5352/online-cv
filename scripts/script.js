
function loaderHeader(){
  // activities toggle menu
  document.getElementById("activities-btn").addEventListener("click", event=>{
    document.getElementById("activities-btn").classList.toggle("header-btn-active");
    document.getElementById("activities-menu").classList.toggle("activities-menu-toggle")
  })

  // settings toggle menu 
  document.getElementById("setting-btn").addEventListener("click", event=>{
    document.getElementById("setting-btn").classList.toggle("header-btn-active");
    document.getElementById("setting-menu").classList.toggle("setting-menu-toggle")
  })

  // document.getElementById("toggle-mode")// TODO: add ad dark mode switch
  // document.getElementById("toggle-screen")// TODO: add a fullscreen toggle


  // timer updater
  function updateTime() {
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

function loadMain() {
  const root = document.getElementById("root");

  // TODO: use gen ai stock images
  const imageList = [
    "resources/image1.jpg",
    "resources/image2.jpg",
    "resources/image3.png",
    "resources/image4.png",
    "resources/image5.png",
    "resources/image6.png",
    "resources/image7.png",
  ]
  let num = Math.round(Math.random() * imageList.length - 1);

  function update_background() {
    // TODO: fit image to screen
    root.style.backgroundImage = `url(${imageList[num]})`;
    root.style.backgroundSize = "stretch";

    if (num == imageList.length - 1) {
      num = 0;
    }else {
      num ++;
    }
  }

  // set first wallpaper
  update_background()
  // update wallpaper every 25 seconds
  setInterval(() => {
    update_background();

  }, 1000 * 25);
}

function loadFooter() {
  // app-manger-btn
  document.getElementById("app-man-btn").addEventListener("click", event=>{
    document.getElementById("app-man-btn").classList.toggle("app-man-toggle");
    document.getElementById("app-man-menu").classList.toggle("app-man-menu-toggle");
  });
}

function main() {

  // load other scripts
  loaderHeader();
  loadMain();
  loadFooter();
}

main()