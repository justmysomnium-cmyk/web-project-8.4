const windowWidth = window.innerWidth;
const swiperEl = document.querySelector(".swiper");
const mainSection = document.querySelector(".main");
const mainSectionChildren = mainSection.children;
let mySwiper;

function initSwiper() {
  if (windowWidth > 768) {
    // Убираю обьъект свайпер чтобы отключить его на больших экранах.
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
    }
  } else {
    mySwiper = new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 10,
      slidesPerView: 1.2,
    });
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);
