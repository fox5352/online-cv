function main() {
  const root = document.getElementById("root");

  // TODO: use gen ai stock images
  const imageList = [
    "assets/image1.jpg",
    "assets/image2.jpg",
    "assets/image3.png",
    "assets/image4.png",
    "assets/image5.png",
    "assets/image6.png",
    "assets/image7.png",
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

  // load other scripts
  loaderHeader();
  loadFooter();
}

main()