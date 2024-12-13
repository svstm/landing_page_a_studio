var swiper = new Swiper(".list_clients_swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 500,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
});

// var swiper2 = new Swiper(".mySwiper", {
//   grabCursor: true,
//   effect: "creative",
//   creativeEffect: {
//     prev: {
//       shadow: true,
//       translate: [0, 0, -400],
//     },
//     next: {
//       translate: ["100%", 0, 0],
//     },
//   },
// });

var swiper2 = new Swiper(".mySwiper", {
  // thumbs: {
  //   swiper: text_reviews, // Синхронизация с миниатюрами
  // },
});

var text_reviews = new Swiper(".text_reviews", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper2, // Синхронизация с миниатюрами
  },
});

AOS.init();
