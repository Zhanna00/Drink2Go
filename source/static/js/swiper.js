new Swiper(".slider", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".slider"
  },

  // Navigation arrows
  navigation: {
    nextEl: ".slider__control--next",
    prevEl: ".slider__control--prev"
  }
});
