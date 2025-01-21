const menu = document.querySelector(".opened-menu");
const burgerIcon = document.getElementById("menu-burger-icon");
const closeButton = document.getElementById("close-button");

burgerIcon.addEventListener("click", () => {
  menu.classList.add("active");
  menu.classList.add("scale-in-tr");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("active");
  menu.classList.remove("scale-in-tr");
});
