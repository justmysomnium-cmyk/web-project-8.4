const swiperPagination = document.querySelector(".swiper-pagination");
const mainSection = document.querySelector(".main");
const readMoreButton = document.querySelector(".readmore");
const swiperSlide = Array.from(document.querySelectorAll(".swiper-slide"));
let mySwiper;

function initSwiper() {
  if (window.innerWidth > 768) {
    // Убираю обьъект свайпер чтобы отключить его на больших экранах.
    if (mySwiper) {
      mySwiper.destroy(true, true);
      mySwiper = null;
      swiperPagination.style.display = "none";
    }
  } else {
    if (!mySwiper) {
      mySwiper = new Swiper(".swiper", {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        spaceBetween: 10,
        slidesPerView: 1.1,
      });
      swiperPagination.style.display = "block";
    }
  }
}

initSwiper();

window.addEventListener("resize", initSwiper);

function readMoreClick() {
  if (window.innerWidth >= 768) {
    readMoreButton.addEventListener("click", () => {
      swiperSlide.forEach((slide) => {
        slide.classList.remove("hidden");
      });
      if
      readMoreButton.textContent = "Скрыть";
    });
  }
}

function toggleReadMore() {
  if (window.innerWidth >= 768) {
    swiperSlide.forEach((slide, index) => {
      slide.classList.add("hidden");
      if (index < 6) {
        slide.classList.remove("hidden");
      } 
    });
    readMoreClick();
  }
}
toggleReadMore();
