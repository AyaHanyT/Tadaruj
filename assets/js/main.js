$("#toggler").click(function () {
  document.getElementById("mySidenav").style.cssText =
    "margin-right : 0 ; width : 100vw"
})

$(".close-btn").click(function () {
  document.getElementById("mySidenav").style.cssText =
    "margin-right : -100vw ; width : 0"
})



$('.owl-carousel').owlCarousel({
    loop: true,
    rtl:true,
    margin: 10,
    nav: false,
    dots : false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4,
      },
      1000: {
        items: 5,
      }
    }
  })


//   $("#toggler").click(function () {
//   document.getElementById("mySidenav").style.cssText =
//   "margin-right : 0 ; width : 100vw"
//   document.getElementById("page").style.marginRight = "0"
// })

// function closeNav() {
//   document.getElementById("mySidenav").style.cssText =
//     "margin-right : -100vw ; border-left: none"
//   document.getElementById("page").style.paddingRight = "0"
// }

// function mobileSize() {
//   document.getElementById("mySidenav").style.cssText =
//     "margin-right : 0 ; width : 100vw"
//   document.getElementById("page").style.marginRight = "0"
// }



