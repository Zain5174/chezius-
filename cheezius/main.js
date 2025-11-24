
let slider = document.querySelector(".banner-inner")
let slides = document.querySelectorAll(".banner-inner img")
let count = 0

const slideImg = () => {
  slider.style.transform = `translateX(-${count * 100}%)`
}

setInterval(() => {
  count = (count + 1) % slides.length
  slideImg()
}, 3000)

/*sidebar*/

let bar = document.querySelector(".bar")
let sidebar = document.querySelector(".sidebar")
let sidebarClose = document.querySelector(".back")
let sidebarback = document.querySelector(".back")


bar.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0%)"
  sidebarback.style.display = "initial"
})
sidebarClose.addEventListener("click", () => {
sidebar.style.transform = "translateX(-105%)"
sidebarback.style.display = "none"


})

/*menu*/
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  breakpoints: {
    // when window width is >= 640px
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 40,
      
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
      
    },
    // when window width is >= 1024px
    990: {
      slidesPerView: 4,
      
    },
  }
})

