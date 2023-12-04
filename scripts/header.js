
// timer updater
function updateTime() {
  const time_ms = new Date()
  document.getElementById("time").innerHTML = `${time_ms.toLocaleTimeString()}`;
}

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

  // sets the time
  updateTime();
  // updates the time every second
  setInterval(() => {
    const time_ms = new Date()
    updateTime();
  }, 1000);
}
