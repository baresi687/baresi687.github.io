const screenShotModal = document.querySelector(".modal")
const screenShotModalImg = document.querySelector(".modal div img")
const screenShots = document.querySelectorAll(".projects div div > img")

screenShots.forEach((item) => {
  item.onclick = function () {
    screenShotModalImg.src = this.src;
    screenShotModalImg.alt = this.alt;
    screenShotModal.classList.add("show")
  }
})

screenShotModal.onclick = ((event) => {
  if (event.target !== screenShotModalImg) {
    screenShotModal.classList.remove("show")
    screenShotModalImg.src = "";
    screenShotModalImg.alt = "";
  }
})
