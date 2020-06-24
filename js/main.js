$(document).ready(function($) {


    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div = $(".main-elements__dropdown, .link--toggle"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         div.removeClass('open'); // скрываем его
    //     }
    // });

//     $(".choose-list__flex").mCustomScrollbar({
//         // alwaysShowScrollbar: 2,
//         autoHideScrollbar: false,
//     });
//     wrapper = $('.wrapper')
//     marginLeftWrapper = parseInt(wrapper.css('marginLeft'))
//     paddingLeftWrapper = parseInt(wrapper.css('paddingLeft'))
	 var sliderWorks = new Swiper('.works-slider', {
        speed: 800,
        slidesPerView: 'auto',
        simulateTouch: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.works--next',
            prevEl: '.works--prev',
        },
        breakpoints: {
            
            660: {
                simulateTouch: true,
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 0,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            968: {
                // simulateTouch: true,
                // slidesPerView: 1,
                // spaceBetween: 0,
                // slidesOffsetBefore: marginLeftWrapper + paddingLeftWrapper,
                // slidesOffsetAfter: marginLeftWrapper + paddingLeftWrapper,
            },
        },
    });


     var sliderReviews = new Swiper('.reviews-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
            nextEl: '.reviews--next',
            prevEl: '.reviews--prev',
        },
        fadeEffect: {
		    crossFade: true
		  },
        breakpoints: {
            
            660: {
                simulateTouch: true,
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 0,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
            },
            968: {
                // simulateTouch: true,
                // slidesPerView: 1,
                // spaceBetween: 0,
                // slidesOffsetBefore: marginLeftWrapper + paddingLeftWrapper,
                // slidesOffsetAfter: marginLeftWrapper + paddingLeftWrapper,
            },
        },
    });


     var galleryThumbs = new Swiper('.partners-slider__little', {
      spaceBetween: 40,
      slidesPerView: 3,
      speed: 800,
      // loop: true,
      // freeMode: true,
      simulateTouch: false,
      // centerInsufficientSlides: true,
      direction: 'vertical',
      // loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.partners-slider__big', {
      spaceBetween: 0,
      speed: 800,
      slidesPerView: 1,
       simulateTouch: false,
        effect: 'fade',
	  fadeEffect: {
			crossFade: true
	  },
      // loop:true,
      // loopedSlides: 4, //looped slides should be the same
      navigation: {
        nextEl: '.big--next',
        prevEl: '.big--prev',
      },
      thumbs: {
        swiper: galleryThumbs,
      },
    });

//     var tagsMobile = new Swiper('.tags-mobile', {
//         speed: 800,
//         slidesPerView: 'auto',
//         spaceBetween: 5,
//         freeMode: true,
//         slidesOffsetBefore: marginLeftWrapper + paddingLeftWrapper,
//         slidesOffsetAfter: marginLeftWrapper + paddingLeftWrapper,
//         on: {
//             resize: function () {
//                  marginLeftWrapper = parseInt(wrapper.css('marginLeft'))
//                 paddingLeftWrapper = parseInt(wrapper.css('paddingLeft'))
//                 this.params.slidesOffsetBefore = marginLeftWrapper + paddingLeftWrapper
//                 this.params.slidesOffsetAfter = marginLeftWrapper + paddingLeftWrapper
//                 this.update()
               
//             },
//         },
//     });
//      var sliderLatest = new Swiper('.latest-slider', {
//         speed: 800,
//         slidesPerView: 3,
//         simulateTouch: false,
//         spaceBetween: 30,
//         navigation: {
//             nextEl: '.latest--next',
//             prevEl: '.latest--prev',
//         },
//         on: {
//             resize: function () {
//                 if ($(window).width() <= '968'){
//                  marginLeftWrapper = parseInt(wrapper.css('marginLeft'))
//                 paddingLeftWrapper = parseInt(wrapper.css('paddingLeft'))
//                 this.params.slidesOffsetBefore = marginLeftWrapper + paddingLeftWrapper
//                 this.params.slidesOffsetAfter = marginLeftWrapper + paddingLeftWrapper
//                 this.update()
//                     }   
               
//             },
//         },
//         breakpoints: {
//             968: {
//                 simulateTouch: true,
//                 slidesPerView: 2,
//                 loop: true,
//                 spaceBetween: 30,
//                 centeredSlides: true,
//                 slidesOffsetBefore: 0,
//                 slidesOffsetAfter: 0,
//             },
//             660: {
//                 simulateTouch: true,
//                 slidesPerView: 2.3,
//                 centeredSlides: true,
//                 loop: true,
//                 spaceBetween: 10,
//                 slidesOffsetBefore: 0,
//                 slidesOffsetAfter: 0,
//             },
//             450: {
//                 simulateTouch: true,
//                 slidesPerView: 1.6,
//                 centeredSlides: true,
//                 loop: true,
//                 spaceBetween: 10,
//                 slidesOffsetBefore: 0,
//                 slidesOffsetAfter: 0,
//             },
//         },
//     });
//     var sliderSay = new Swiper('.popular-slider', {
//         speed: 800,
//         slidesPerView: 3,
//         simulateTouch: false,
//         spaceBetween: 30,
//         navigation: {
//             nextEl: '.popular--next',
//             prevEl: '.popular--prev',
//         },
//         on: {
//             resize: function () {
//                 if ($(window).width() <= '968'){
//                  marginLeftWrapper = parseInt(wrapper.css('marginLeft'))
//                 paddingLeftWrapper = parseInt(wrapper.css('paddingLeft'))
//                 this.params.slidesOffsetBefore = marginLeftWrapper + paddingLeftWrapper
//                 this.params.slidesOffsetAfter = marginLeftWrapper + paddingLeftWrapper
//                 this.update()
//                     }   
               
//             },
//         },
//         breakpoints: {
//             968: {
//                 simulateTouch: true,
//                 slidesPerView: 2,
//                 loop: true,
//                 spaceBetween: 30,
//                 centeredSlides: true,
//                 slidesOffsetBefore: 0,
//                 slidesOffsetAfter: 0,
//             },
//             660: {
//                 simulateTouch: true,
//                 slidesPerView: 2.3,
//                 centeredSlides: true,
//                 loop: true,
//                 spaceBetween: 10,
//                 slidesOffsetBefore: 0,
//                 slidesOffsetAfter: 0,
//             },
//             450: {
//                 simulateTouch: true,
//                 slidesPerView: 1.6,
//                 centeredSlides: true,
//                 loop: true,
//                 spaceBetween: 10,
//                 slidesOffsetBefore: 0,
//                 slidesOffsetAfter: 0,
//             },
//         },
//     });

//   $('.header').on('focusin', '.header-search', function(event) {
//       $(this).addClass('active')
//   });

//   $('.header').on('focusout', '.header-search', function(event) {
//       $(this).removeClass('active')
//   });

// $('body').on('click', '.mobile--toggle > a', function(){
//     event.preventDefault();
//     $('.link--mobile').removeClass('active')
//     $(this).parent().toggleClass('active')
//     $(this).parent().find('ul').slideToggle()
// })

// $('.link--close').on('click', function(event) {
//     event.preventDefault();
//     $('.mob-menu').removeClass('open')
// });

// $('.link--toggle').on('click', function(event) {
//     event.preventDefault();
//     $('.mob-menu').addClass('open')
// });

// $('.link--more').on('click', function(event) {
//     event.preventDefault();
//     if ($(this).has(event.target).length === 0) {
//         $('.link--more').removeClass('active')
//          $(this).toggleClass('active');
//          $('.link--more').not(this).find('ul').slideUp()
//         $(this).find('ul').slideToggle()
//     }
   
// });

// $(document).mouseup(function (e){ // событие клика по веб-документу
//         var more = $(".link--more ul"); // тут указываем ID элемента
//          var   link = $(".link--more")
//           var  morelist = $(".link--morelist")
//         if ( !morelist.is(e.target) && morelist.has(e.target).length === 0 && !more.is(e.target) && more.has(e.target).length === 0 && !link.is(e.target) && link.has(e.target).length === 0) { // и не по его дочерним элементам
//             more.slideUp(); // скрываем его
//             link.removeClass('active'); // скрываем его
//         }
//     });

// $(document).mouseup(function (e){ // событие клика по веб-документу
//         var div = $(".mob-menu"); // тут указываем ID элемента
//         if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам
//             div.removeClass('open'); // скрываем его
//         }
//     });



//     // console.log(searchInputs)
// $('form#searchform').on('click', '.btn--submit, .btn--search', function(event) {
//     event.preventDefault();
//     idArr = [];
//     $formField = $(this).parents('form');
//     $inputField = $formField.find('input[type=search]')
//     $inputFieldVal = $inputField.val().toLowerCase();
//     if ($inputField.val().length > 2) {
//         $formField.trigger('submit');
//     } else {
//         $inputField.addClass('error')
//         $formField.addClass('error')
//         setTimeout(function(){
//             $inputField.removeClass('error')
//             $formField.removeClass('error')
//         }, 500)
//     }
// });



// var url = misha_loadmore_params.ajaxurl + "?action=p_get_posts";

// $( "form#searchform input" ).autocomplete({
//         classes: {
//             "ui-autocomplete": "form-dropdown"
//         },
//         appendTo: ".form-row",
//         source: url,
//         select: function(event, ui) {
//             window.location.href=ui.item.link;
//         },
//         delay: 500,
//         minLength: 3
//     });


});

//  function windowSize(){
//         if ($(window).width() <= '992'){
//             $('body').find('.destinations-grid__row1').prependTo('.destinations-grid')
//         } else {
//             $('body').find('.destinations-grid__row1').prependTo('.destinations-grid__col2')
//         }
//     }
    
    // $(window).on('load resize',windowSize);

