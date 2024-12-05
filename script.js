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
