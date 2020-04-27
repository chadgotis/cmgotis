const menu = document.querySelector("#menu");
const side = document.querySelector(".side-menu");
console.log(side);

menu.addEventListener("click", () => {
  side.classList.toggle("show-menu");
});
