const menu = document.querySelector(".opened-menu");
const burgerIcon = document.getElementById("menu-burger-icon");
const closeButton = document.getElementById("close-button");

burgerIcon.addEventListener("click", () => {
  menu.classList.add("active");
  menu.classList.add("scale-in-tr");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("scale-in-tr");
  menu.classList.add("scale-out-tr");

  setTimeout(() => {
    menu.classList.remove("active");
    menu.classList.remove("scale-out-tr");
  }, 300);
});

document.addEventListener("DOMContentLoaded", () => {
  const animatedServicesLogos = document.querySelectorAll(
    ".one-technologies-wrap"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("bounce-in-fwd");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  animatedServicesLogos.forEach((element) => observer.observe(element));
});
