const ham = document.querySelector(".ham"),
  enlaces = document.querySelector(".enlaces-menu"),
  barras = document.querySelectorAll(".ham span");

ham.addEventListener("click", () => {
  enlaces.classList.toggle("active");
  barras.forEach((child) => {
    child.classList.toggle("animate");
  });
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

var swiper2 = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let banner = document.getElementById("principalBanner");
let header = document.getElementById("header");
function mostrarScroll() {
  let scrollTop = document.documentElement.scrollTop;
  let alturaBanner = banner.clientHeight;
  if (scrollTop > alturaBanner && window.innerWidth > 768) {
    header.style.backgroundColor = "white";
  } else if (window.innerWidth > 768) {
    header.style.backgroundColor = "transparent";
  } else {
    header.style.backgroundColor = "black";
  }
}
window.addEventListener("scroll", mostrarScroll);

let products = {
  data: [
    {
      productName: "Glamping bella vista",
      category: "Glamping",
      price: "30",
      image: "./assets/img/glamping1.jpg",
    },
    {
      productName: "Glamping guatape",
      category: "Glamping",
      price: "49",
      image: "./assets/img/glamping2.jpg",
    },
    {
      productName: "Coworking Wework",
      category: "Coworking",
      price: "99",
      image: "./assets/img/coworking1.jpg",
    },
    {
      productName: "Coworking Fontanar",
      category: "Coworking",
      price: "29",
      image: "./assets/img/coworking2.jpg",
    },
    {
      productName: "Billar las tres cruces",
      category: "Billar",
      price: "129",
      image: "./assets/img/billar1.jpg",
    },
    {
      productName: "Billar Santa Ana",
      category: "Billar",
      price: "89",
      image: "./assets/img/billar2.jpg",
    },
    {
      productName: "Restaurante al agua patos",
      category: "Restaurante",
      price: "189",
      image: "./assets/img/restaurante1.jpg",
    },
    {
      productName: "Restaurante coctel del mar",
      category: "Restaurante",
      price: "49",
      image: "./assets/img/restaurante2.jpg",
    },
  ],
};

for(let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container3");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerHTML = i.productName.toUpperCase();
  container.appendChild(name);
  
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  
  
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if(value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if(value == "todo") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");

    elements.forEach((element, index) => {
      if(element.innerText.includes(searchInput.toUpperCase())) {
        cards[index].classList.remove("hide");
      } else {
        cards[index].classList.add("hide");
      }
    })
})

window.onload = () => {
  filterProduct("todo")
}