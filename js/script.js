const screenShotModal = document.querySelector(".modal");
const screenShotModalImg = document.querySelector(".modal div img");
const screenShots = document.querySelectorAll(".projects picture > img");
const modalCloseIcon = document.querySelector(".close-icon");
const lightDarkModeToggle = document.querySelector(".light-dark-mode");

function handleCloseIconPosition() {
  modalCloseIcon.style.right =
    window.innerWidth > screenShotModalImg.naturalWidth ? "0" : "16px";
}

if (localStorage.theme === "light") document.body.classList.add("light");

lightDarkModeToggle.onclick = () => {
  document.body.classList.toggle("light");
  document.body.classList.contains("light")
    ? (localStorage.theme = "light")
    : (localStorage.theme = "dark");
};

screenShotModalImg.onload = () => {
  handleCloseIconPosition();
  modalCloseIcon.classList.add("close-modal-toggle");
};

screenShots.forEach((item) => {
  item.onclick = function () {
    screenShotModalImg.src =
      this.src.slice(0, this.src.length - 4) +
      `-modal.${this.src.slice(this.src.length - 3, this.src.length)}`;
    screenShotModalImg.alt = this.alt;
    screenShotModal.classList.add("show-modal");
  };
});

screenShotModal.onclick = (event) => {
  if (event.target !== screenShotModalImg) {
    screenShotModal.classList.remove("show-modal");
    screenShotModalImg.src = "";
    screenShotModalImg.alt = "";
    modalCloseIcon.classList.remove("close-modal-toggle");
  }
};

window.onresize = () => {
  handleCloseIconPosition();
};
