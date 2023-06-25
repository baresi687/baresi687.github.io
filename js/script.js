const screenShotModal = document.querySelector(".modal")
const screenShotModalImg = document.querySelector(".modal div img")
const screenShots = document.querySelectorAll(".projects div > img")
const lightDarkModeToggle = document.querySelector(".light-dark-mode")

lightDarkModeToggle.onclick = (() => {
  document.body.classList.toggle("light")
  document.body.classList.contains("light") ? localStorage.theme = "light" : localStorage.theme = "dark";
})

if (localStorage.theme === "light") document.body.classList.add("light")

screenShots.forEach((item) => {
  item.onclick = function () {
    screenShotModalImg.src = this.src.slice(0, this.src.length - 4) + '-modal.jpg'
    screenShotModalImg.alt = this.alt;
    screenShotModal.classList.add("show-modal")
    screenShotModalImg.onload = () => document.querySelector('.fa-xmark').classList.add('close-modal-toggle');
  }
})

screenShotModal.onclick = ((event) => {
  if (event.target !== screenShotModalImg) {
    screenShotModal.classList.remove("show-modal")
    screenShotModalImg.src = "";
    screenShotModalImg.alt = "";
    document.querySelector('.fa-xmark').classList.remove('close-modal-toggle')
  }
})
