function loadFooter() {
  // app-manger-btn
  document.getElementById("app-man-btn").addEventListener("click", event=>{
    document.getElementById("app-man-btn").classList.toggle("app-man-toggle");
    document.getElementById("app-man-menu").classList.toggle("app-man-menu-toggle");
  });
}