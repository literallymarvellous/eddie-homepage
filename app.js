const nav = document.querySelector(".nav");
const menu = document.querySelector(".bx-menu");
const close = document.querySelector(".bx-x");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

close.addEventListener("click", () => {
  nav.classList.remove("active");
});
