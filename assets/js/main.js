

// Add Event on elements
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// Navbar Toggle
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);





// Service Up Section Slider
let serviceupswiperup = new Swiper(".review__list-up", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {
    100: {
      slidesPerView: 0.4,
    },

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.3,
    },

    650: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.7,
    },

    950: {
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 3.4,
    },

    1300: {
      slidesPerView: 4,
    },
  },
});

// Service Down Section Slider
let serviceupswiperdown = new Swiper(".review__list-down", {
  slidesPerView: 4,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },

  breakpoints: {
    100: {
      slidesPerView: 0.4,
    },

    300: {
      slidesPerView: 1.2,
    },

    550: {
      slidesPerView: 1.3,
    },

    650: {
      slidesPerView: 2,
    },

    800: {
      slidesPerView: 2.7,
    },

    950: {
      slidesPerView: 3,
    },

    1050: {
      slidesPerView: 4,
    },

    1150: {
      slidesPerView: 3.4,
    },

    1300: {
      slidesPerView: 4,
    },
  },
});
