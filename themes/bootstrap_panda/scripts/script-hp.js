jQuery( document ).ready(function() {

    var $ = jQuery;
// Initialize affix and add an offset to add affix class on scroll
$('#mainNav').affix({
  offset: {
    top: 100
  }
})
    //doc swiper : http://idangero.us/swiper/api/#.WVUUzIjyhaQ
    var startGallery = function(){

        var mySwiper = new Swiper('.swiper-container', {

            // If we need pagination
           pagination: '.swiper-pagination',

           // Navigation arrows
           nextButton: '.swiper-button-next',
           prevButton: '.swiper-button-prev',


            speed: 400,
            spaceBetween: 100
        });
    }



    window.init = function() {

        startGallery();

    }

    init(); // true

});