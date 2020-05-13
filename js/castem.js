/*global $, alert, console*/

$(function () {
    
    'use strict';

    //chainge Header Hieght

    
    
    $('.header').height($(window).height());
    
    $(window).resize(function(){
       
         $('.header').height($(window).height());
        
    });

 


    //smoothly scroll 

    $('.navbar-nav .nav-item .nav-link').click(function (e) {
        
     e.preventDefault();

     $('html , body').animate({ 

        scrollTop : $('#' + $(this).data('scroll')).offset().top + 1

     }, 1000);

    });

    //Add Activ class on Navebar

    $('.navbar-nav .nav-item .nav-link').click(function (){
 
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
    //modal video
    $(".pluse").modalVideo();

     $(window).scroll(function (){

     
        //scroll To Top button

        var scrollToTop =  $('.scroll-up');
        if ($(window).scrollTop() >= 1000) {
            scrollToTop.fadeIn(300);
        }else{
            scrollToTop.fadeOut(300);
        }
    });

    //click on scroll to top to go up 

    $('.scroll-up').click(function(event){
        event.preventDefault();
     $('html , body').animate({ 
        scrollTop : 0
     }, 1000);
    });
    
    // :: Magnific Popup Plugin
	$('.projects .project-img-box .img-box-hover').magnificPopup({
		type: 'image',
		gallery: {enabled: true}
    });
    
     // owl carouser
     $('.owl-carousel').owlCarousel({
        center: true,
		items: 2,
		loop: true,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayTimeout: 3000,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			}
		}
    })

});


// start mixup
 
	 
var mixer = mixitup('.all-projects');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    selectors: {
        target: '.blog-item'
    },
    animation: {
        duration: 300
    }
});