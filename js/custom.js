
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // REVIEWS CAROUSEL
    $('.reviews-carousel').owlCarousel({
    items:2,
    loop:true,
    autoplay: true,
    margin:30,
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        1000:{
          items:2
        }
      }
    })

    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
  });
    
})(window.jQuery);




/* Search bar */

const searchContainer = document.querySelector('.search-container');
const searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', function() {
  searchContainer.classList.toggle('open');
});

/* Menu bar */

$(document).ready(function() {
  $('.dropdown-submenu').on('click mouseenter', function(e) {
    e.stopPropagation();
    $(this).find('.dropdown-menu').toggle();
  });

  $('.dropdown-submenu').on('mouseleave', function(e) {
    $(this).find('.dropdown-menu').hide();
  });
});


/*------------------------
  FILTER SYSTEM
--------------------------*/

function filterItems() {
  let button = this;
  let selector = $(button).data('filter');

  if (selector === 'img') {
    $('#products img').fadeIn(250); // Show all images with fade-in animation
    $('.image-container.filtered').removeClass('filtered'); // Remove the 'filtered' class from all image containers
  } else {
    $('#products img').fadeOut(0); // Hide all images with fade-out animation

    setTimeout(function() {
      $('#products img:not(' + selector + ')').fadeOut(0); // Hide non-matching images instantly
      $(selector).fadeIn(250); // Show matching images with fade-in animation

      $('.image-container').not(selector).addClass('filtered'); // Add the 'filtered' class to non-matching image containers
      $(selector).parent().removeClass('filtered'); // Remove the 'filtered' class from the matching image containers
    }, 500);
  }
}

$(document).ready(function() {
  $('[data-filter]').on('click', filterItems);
});
