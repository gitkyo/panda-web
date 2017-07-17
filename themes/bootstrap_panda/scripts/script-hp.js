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
      var offset = jQuery(id).offset().top
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
		})
	}
  window.init = function () {
    scrollToAncre();
    setSlider();
    
  }
  init(); // true
});

 