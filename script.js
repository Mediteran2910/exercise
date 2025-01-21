const menu = document.querySelector(".opened-menu");
const burgerIcon = document.getElementById("menu-burger-icon");
const closeButton = document.getElementById("close-button");

burgerIcon.addEventListener("click", () => {
  menu.classList.add("active");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("active");
});
