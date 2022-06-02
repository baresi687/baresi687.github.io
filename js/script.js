const screenShotModal = document.querySelector(".modal")
const screenShotModalImg = document.querySelector(".modal div img")
const screenShots = document.querySelectorAll(".projects div div > img")
const imageDivs = document.querySelectorAll(".projects div > div:nth-child(1)")

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

imageDivs.forEach((item) => {
  item.onmouseover = function () {
    this.nextElementSibling.classList.add("show")
  }
  item.onmouseout = function () {
    this.nextElementSibling.classList.remove("show")
  }
})
