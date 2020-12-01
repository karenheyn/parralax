var rellax = new Rellax(".rellax");

gsap.registerPlugin(ScrollTrigger);

// gsap.to(".bg", {
//   ScrollTrigger: {
//     trigger: ".container-2",
//     scrub: true,
//   },
//   y: -100,
//   duration: 6,
// });
const cards = document.querySelectorAll(".card");
const cardsContainer = document.querySelector(".card-wrapper");

cardsContainer.addEventListener("mouseleave", (e) => {
  cards.forEach((item) => item.classList.remove("flip"));
});

cards.forEach((targetCard) => {
  targetCard.addEventListener("click", (e) => {
    console.log(e.target);
    targetCard.classList.add("flip");
    cards.forEach((card) => {
      if (card !== targetCard) {
        card.classList.remove("flip");
      }
    });
  });
});
