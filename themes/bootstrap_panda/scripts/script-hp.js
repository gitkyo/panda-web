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
var scrollToAncre = function(){
		jQuery('a[href^="#"], button.ancre[href^="#"]').click(function(){  
		    var id = jQuery(this).attr("href");
		    var offset = jQuery(id).offset().top 
		    jQuery('html, body').animate({scrollTop: offset}, 'slow'); 
		    return false;  
		});
	}


    window.init = function() {

        startGallery();
scrollToAncre ();
    }

    init(); // true

});