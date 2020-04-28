const menu = document.querySelector("#menu");
const side = document.querySelector(".side-menu");

menu.addEventListener("click", () => {
  side.classList.toggle("show-menu");
});

// const cards = document.querySelectorAll(".card");
// cards.forEach((card) => {
//   card.addEventListener("click", () => {
//     card.classList.toggle("rubberBand");
//   });
// });

window.addEventListener("load", () => {
  new WOW().init();
});
