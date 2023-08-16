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



function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('.image-upload-wrap').hide();
      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').css("display", "flex");
      $('.image-title').html(input.files[0].name);
    };
    reader.readAsDataURL(input.files[0]);

  } else {
    removeUpload();
  }
}

function removeUpload() {
  $('.file-upload-input').replaceWith($('.file-upload-input').clone());
  $('.file-upload-content').hide();
  $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
});
