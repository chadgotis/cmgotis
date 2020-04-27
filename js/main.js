const menu = document.querySelector("#menu");
const side = document.querySelector(".side-menu");

menu.addEventListener("click", () => {
  side.classList.toggle("show-menu");
});
