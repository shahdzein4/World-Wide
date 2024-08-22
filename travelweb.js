let searchBtn = document.querySelector("#search-btn")
let searchForm = document.querySelector(".search-form")
let loginForm = document.querySelector(".login-form")
let menuBar = document.querySelector("#menu-bar")
let amenu = document.querySelector(".nav")
let videoBtn = document.querySelectorAll(".video-btn")



function showbar(){
    searchBtn.classList.toggle("fa-times")
    searchForm.classList.toggle("active")
}


function showForm(){
    loginForm.classList.add("active")
}


function hideform(){
    loginForm.classList.remove("active")
}


function showMenu(){
    menuBar.classList.toggle("fa-times")
    amenu.classList.toggle("active")
}

videoBtn.forEach(slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue")
        let src = slide.getAttribute("data-src");
        document.querySelector("#video-slider").src = src
    }) 
})
var swiper = new Swiper(".review-slider", {
  spaceBetween : 20,
  loop:true,
  autoplay:{
    delay:2000
  },
  breakpoints:{
    640:{
      slidesPerView:1
    },
    768:{
      slidesPerView:2
    },
      1024:{
        slidesPerView:3
      }
  }
});
