const ham = document.querySelector(".ham"),
  enlaces = document.querySelector(".enlaces-menu"),
  barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("active");
  barras.forEach(child => {child.classList.toggle('animate')});
});

let counter = 1;
let buttonSwipper = document.querySelector(".swiper-button-next");
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 5000);

let swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

