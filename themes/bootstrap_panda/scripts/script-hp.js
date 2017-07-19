jQuery(document).ready(function () {
  var $ = jQuery;
   $('#mainNav').affix({
    offset: {
      top: 100
    }
  });

  var scrollToAncre = function () {
    jQuery('a[href^="#"][class*="smooth"], button.ancre[href^="#"]').click(function () {
      var id = jQuery(this).attr("href");
      var offset = jQuery(id).offset().top;
      jQuery('html, body').animate({
        scrollTop: offset
      }, 'slow');
      return false;
    });
  }

  var setSlider = function(){
		//slideshow on en parle
		var mySwiper = new Swiper ('.swiper-container', {
			
			slidesPerView: 7,
			
			simulateTouch : false,
	        autoplayDisableOnInteraction : false,
	        autoplay : 2500,	        
	        loop: true,
	        spaceBetween: 120,
          // Responsive breakpoints
			breakpoints: {
				// when window width is <= 320px
				320: {
				  slidesPerView: 1,
				  spaceBetween: 10
				},
				// when window width is <= 480px
				480: {
				  slidesPerView: 2,
				  spaceBetween: 15
				},
				// when window width is <= 640px
				640: {
				  slidesPerView: 3,
				  spaceBetween: 25
				},
				// when window width is <= 768px
				768: {
				  slidesPerView: 4,
				  spaceBetween: 25
				},
				// when window width is <= 992px
				992: {
				  slidesPerView: 5,
				  spaceBetween: 25
				},
				// when window width is <= 992px
				1200: {
				  slidesPerView: 6,
				  spaceBetween: 90
				}
			}
		})
	}
  window.init = function () {
    scrollToAncre();
    setSlider();
  }
  init(); // true
});

 