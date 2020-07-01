$(document).ready(function($) {


    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     var div = $(".main-elements__dropdown, .link--toggle"); // тут указываем ID элемента
    //     if (!div.is(e.target) // если клик был не по нашему блоку
    //         && div.has(e.target).length === 0) { // и не по его дочерним элементам
    //         div.removeClass('open'); // скрываем его
    //     }
    // });

var isMobile = false;
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    var cloud = document.getElementById('cloud'),
    	hovertitle = document.getElementById('hovertitle'),

    	square1 = document.getElementById('square1'),
    	square2 = document.getElementById('square2'),
    	square3 = document.getElementById('square3'),
    	square4 = document.getElementById('square4'),
    	square5 = document.getElementById('square5'),
    	square6 = document.getElementById('square6');
    	square7 = document.getElementById('square7'),
    	square8 = document.getElementById('square8'),
    	square9 = document.getElementById('square9'),
    	square10 = document.getElementById('square10'),
    	square11 = document.getElementById('square11'),
    	square12 = document.getElementById('square12');
    	square13 = document.getElementById('square13'),
    	square14 = document.getElementById('square14'),
    	square15 = document.getElementById('square15'),
    	square16 = document.getElementById('square16');

	new Parallax(cloud, {
  		relativeInput: true,
  		hoverOnly: true,
  		pointerEvents: true,
	});

	
if (isMobile != true) {
	new Parallax(hovertitle);
	new Parallax(square1);
	new Parallax(square2);
	new Parallax(square3);
	new Parallax(square4);
	new Parallax(square5);
	new Parallax(square6);
	new Parallax(square6);
	new Parallax(square7);
	new Parallax(square8);
	new Parallax(square9);
	new Parallax(square10);
	new Parallax(square11);
	new Parallax(square12);
	new Parallax(square13);
	new Parallax(square14);
	new Parallax(square15);
	new Parallax(square16);


 var throttle = function(type, name, obj) {
 var obj = obj || window;
 var running = false;
 var func = function() {
 if (running) { return; }
 running = true;
 requestAnimationFrame(function() {
 obj.dispatchEvent(new CustomEvent(name));
 running = false;
 });
 };
 obj.addEventListener(type, func);
 };
 throttle ("scroll", "optimizedScroll");

	 
	window.addEventListener("scroll", function() {
		square3.style.transform = "rotate("+window.pageYOffset/40+"deg)";
		square4.style.transform = "rotate("+window.pageYOffset/25+"deg)";
		square5.style.transform = "rotate("+window.pageYOffset/10+"deg)";
		square6.style.transform = "rotate("+window.pageYOffset/20+"deg)";
		square7.style.transform = "rotate("+window.pageYOffset/25+"deg)";
		square8.style.transform = "rotate("+window.pageYOffset/10+"deg)";
		square9.style.transform = "rotate("+window.pageYOffset/20+"deg)";
		square10.style.transform = "rotate("+window.pageYOffset/15+"deg)";
		square11.style.transform = "rotate("+window.pageYOffset/20+"deg)";
		square12.style.transform = "rotate("+window.pageYOffset/25+"deg)";
		square13.style.transform = "rotate("+window.pageYOffset/10+"deg)";
		square14.style.transform = "rotate("+window.pageYOffset/30+"deg)";
		square15.style.transform = "rotate("+window.pageYOffset/20+"deg)";
		square16.style.transform = "rotate("+window.pageYOffset/15+"deg)";
	});

}
	$('body').on('click', '.link--tag', function(event) {
		event.preventDefault();
		/* Act on the event */
	});

	// var wow = new WOW({
 //    boxClass: 'wow', // animated element css class (default is wow)
 //    animateClass: 'animated', // animation css class (default is animated)
 //    offset: 0, // distance to the element when triggering the animation (default is 0)
 //    mobile: true, // trigger animations on mobile devices (default is true)
 //    live: true, // act on asynchronously loaded content (default is true)
 //    callback: function(box) {
 //        // the callback is fired every time an animation is started
 //        // the argument that is passed in is the DOM node being animated
 //    },
 //    scrollContainer: null, // optional scroll container selector, otherwise use window,
 //    resetAnimation: true, // reset animation on end (default is true)
	// });
	// wow.init();


var sliderTabs = new Swiper('.works-tabs-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 20,
        navigation: false,
    });
var sliderOffice = new Swiper('.office-slider', {
        speed: 800,
        slidesPerView: 'auto',
        loop: true,
        loopedSlides: 3,
        simulateTouch: false,
        spaceBetween: 20,
        navigation: {
            nextEl: '.works--next',
            prevEl: '.works--prev',
        },
         pagination: {
		    el: '.office-pagination',
		    type: 'bullets',
		    clickable: true,
	  	},
        breakpoints: {
            300: {
                spaceBetween: 20,
                slidesPerView: 1,
                loopedSlides: 1,
            },
            660: {
                simulateTouch: true,
                spaceBetween: 20,
            },
            992: {
            	// direction: 'vertical',
            },
        },
    });
var sliderSklad = new Swiper('.sklad-slider', {
        speed: 800,
        slidesPerView: 'auto',
        simulateTouch: false,
        loop: true,
        loopedSlides: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.works--next',
            prevEl: '.works--prev',
        },
         pagination: {
		    el: '.sklad-pagination',
		    type: 'bullets',
		    clickable: true,
	  	},
        breakpoints: {
            
            660: {
                simulateTouch: true,
                spaceBetween: 20,
            },
            992: {
            	// direction: 'vertical',
            },
        },
    });
    var sliderComp = new Swiper('.comp-slider', {
        speed: 800,
        slidesPerView: 'auto',
        simulateTouch: false,
        loop: true,
        loopedSlides: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.works--next',
            prevEl: '.works--prev',
        },
        pagination: {
		    el: '.comp-pagination',
		    type: 'bullets',
		    clickable: true,
	  	},
        breakpoints: {
            300: {
                spaceBetween: 20,
                slidesPerView: 1,
                loopedSlides: 1,
            },
            660: {
                simulateTouch: true,
                spaceBetween: 20,
            },
            992: {
            	// direction: 'vertical',
            },
        },
    });
	


     var sliderReviews = new Swiper('.reviews-slider', {
        speed: 800,
        slidesPerView: 1,
        simulateTouch: false,
        spaceBetween: 0,
        loop: true,
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
      loop: true,
      // loop: true,
      // freeMode: true,
      simulateTouch: false,
      // centerInsufficientSlides: true,
      direction: 'vertical',
      // loopedSlides: 5, //looped slides should be the same
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
            320: {
                direction: 'vertical',
                simulateTouch: true,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            660: {
                direction: 'horizontal',
                simulateTouch: true,
                slidesPerView: 3,
                spaceBetween: 20,
            },
            992: {
            	direction: 'vertical',
            },
        },
    });
    var galleryTop = new Swiper('.partners-slider__big', {
      spaceBetween: 0,
      speed: 800,
      slidesPerView: 1,
      loop: true,
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

    $('.link--tab').on('click', function(event) {
    	event.preventDefault();
    	if (!$(this).hasClass('active')) {
    		$('.link--tab').removeClass('active')
    		$(this).addClass('active');
    		sliderTabs.slideTo($(this).data('tabs'));
    		sliderOffice.slideToLoop(0)
			sliderSklad.slideToLoop(0)
			sliderComp.slideToLoop(0)
    	}
    	
    	/* Act on the event */
    });



 opnsFancy = {
        touch: false,
        baseClass: "modal",
        beforeLoad: function(instance, slide) {
            if (isMobile == false) {} else {

            }

        },
        afterShow: function(instance, current) {
        },
        afterLoad: function(instance, current) {
        },
        afterClose: function(instance, slide) {
        },
        hideScrollbar: true,
        btnTpl: {
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                '<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                '<path fill="#2D2E3E" d="M11.619.38l1.414 1.415L1.501 13.327.087 11.913z"/>' +
                '<path fill="#2D2E3E" d="M0 2L1.414.586 13 12.172l-1.414 1.414z"/>' +
                '</svg>' +
                "</button>",

        },
    }

$('body').on('click', '.fancybtn', function(event) {
        popup = $(this).data('popup')
        if (popup == '#working') {
        	$text = $(this).data('text');
        	$img = $(this).data('img');
        	$title = $(this).data('title');

        	$(popup).find('h3').text($title);
        	$(popup).find('img').attr('src', $img);
        	$(popup).find('.working-content p').remove()
        	$(popup).find('.working-content').append($text);

        }
        $.fancybox.open({
            src: popup,
            type: 'inline',
            opts: opnsFancy,
        });
        return false
    });

	$('form').on('submit', function (event) {
        var th = $(this);
        $.ajax({
            type: "POST",
                        url: "/send_email",
                        data: th.serialize(),
                        success: function (data) {
                            $.fancybox.close()
                            popup = "#thanks";
                            var thank_mess = $(th).data('thank_mess');
                            $('#thanks').find('.p').text(thank_mess);
                            $.fancybox.open({
                                src: popup,
                                type: 'inline',
                                opts: opnsFancy,
                            });
                            setTimeout(function () {
                                th.trigger("reset");
                                window.location.reload();
                            }, 3000);
                            // setTimeout(function(){$.fancybox.close()},15000)
                        }
                    });
                    event.preventDefault();
                });

setTimeout(function(){
$('.preloader').fadeOut('400');
$('.main-content h1').addClass('anim')
}, 500)
 

 var os = new OnScreen({
    tolerance: 0,
    debounce: 100,
    container: window
});

// Cache selectors
var lastId,
  topMenu = $(".header-menu"),
  // topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function() {
    var item = $($(this).attr("data-href"));
    if (item.length) {
      return item;
    }
  });

  // console.log(scrollItems)

// Bind click handler to menu items
// so we can get a fancy scroll animation
// menuItems.click(function(e) {
//   var href = $(this).attr("href"),
//     offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
//   $('html, body').stop().animate({
//     scrollTop: offsetTop
//   }, 300);
//   e.preventDefault();
// });

// Bind to scroll
$(window).scroll(function() {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + 250;

  // Get id of current scroll item
  var cur = scrollItems.map(function() {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // console.log(cur)
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    console.log(id)
    // menuItems
      $('.link--menu').removeClass("active")
     $('[data-href="#' + id +'"]').addClass("active");
  }
});



os.on('enter', '.advanced', (element, event) => {
    $('.advanced').addClass('animate');

});

os.on('enter', '.system', (element, event) => {
    $('.system').addClass('animate')
});


os.on('enter', '.section-coorp', (element, event) => {
    $('.section-coorp').addClass('animate')
    $('.section-office').addClass('animate')
});

function toggleHeader(){
	    var scroll_status = $(document).scrollTop();
	    if(scroll_status > 0)
	        $(".section-header").addClass("fixed");
	    else
	        $(".section-header").removeClass("fixed");
	}
	
$(document).scroll(function(){
	    toggleHeader();
	})

toggleHeader();

// os.on('enter', '.section-main', (element, event) => {
//    	$('.section-header').removeClass('fixed')
// });

// os.on('leave', '.section-main', (element, event) => {
//    	$('.section-header').addClass('fixed')
// });



$('body').on("click",".scroll", function (event) {
		event.preventDefault();
		var id  = $(this).attr('data-href'),
			top = $(id).offset().top;
			if ($(this).hasClass('link--menu')) {
				$('.link--menu').removeClass('active')
    			$(this).addClass('active');
    			if (isMobile == true) {
    				$('.section-header').removeClass('open')
    				$('.menu').removeClass('open')
    				$('.link--toggle').removeClass('active')
    			}
			}
		
		$('body,html').animate({scrollTop: top}, 1500);
	});


$('.field-phone').mask('+0 (000) 000-00-00')
    $('body').on('focus', '.field-phone', function(event) {
        if ($(this).val() == '') {
            $(this).val('+')
        }
    })
    $('body').on('blur', '.field-phone', function(event) {
        if ($(this).val() == '+') {
            $(this).val('')
        }
    });

    $('.link--toggle').on('click', function(event) {
    	event.preventDefault();
    	/* Act on the event */
    	$(this).toggleClass('active');
    	$('.section-header').toggleClass('open');
    	$('.menu').toggleClass('open');
    });

    $('.link--show').on('click', function(event) {
    	event.preventDefault();
    	$('.advanced-items').find('.vm-none').toggleClass('show')
    	$(this).toggleClass('active');
    	/* Act on the event */
    });

// os.on('enter', '.advanced', (element, event) => {
//     $('.advanced').addClass('animate')
// });

});

//  function windowSize(){
//         if ($(window).width() <= '992'){
//             $('body').find('.destinations-grid__row1').prependTo('.destinations-grid')
//         } else {
//             $('body').find('.destinations-grid__row1').prependTo('.destinations-grid__col2')
//         }
//     }
    
    // $(window).on('load resize',windowSize);

