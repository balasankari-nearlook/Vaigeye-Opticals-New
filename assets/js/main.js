
(function ($) {
    "use strict";

    /*---------------------------
       Commons Variables
    ------------------------------ */
    var $window = $(window),
        $body = $("body");

    /*---------------------------------
    Off Canvas Function
-----------------------------------*/
    (function () {
        var $offCanvasToggle = $(".offcanvas-toggle"),
            $offCanvas = $(".offcanvas"),
            $offCanvasOverlay = $(".offcanvas-overlay"),
            $mobileMenuToggle = $(".mobile-menu-toggle");
        $offCanvasToggle.on("click", function (e) {
            e.preventDefault();
            var $this = $(this),
                $target = $this.attr("href");
            $body.addClass("offcanvas-open");
            $($target).addClass("offcanvas-open");
            $offCanvasOverlay.fadeIn();
            if ($this.parent().hasClass("mobile-menu-toggle")) {
                $this.addClass("close");
            }
        });
        $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
            e.preventDefault();
            $body.removeClass("offcanvas-open");
            $offCanvas.removeClass("offcanvas-open");
            $offCanvasOverlay.fadeOut();
            $mobileMenuToggle.find("a").removeClass("close");
        });
    })();

    /*----------------------------------
        Off Canvas Menu
    -----------------------------------*/
    function mobileOffCanvasMenu() {
        var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
            $offCanvasNavSubMenu = $offCanvasNav.find(".sub-menu");

        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

        /*Category Sub Menu Toggle*/
        $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
            var $this = $(this);
            if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
                e.preventDefault();
                if ($this.siblings("ul:visible").length) {
                    $this.parent("li").removeClass("active");
                    $this.siblings("ul").slideUp();
                    $this.parent("li").find("li").removeClass("active");
                    $this.parent("li").find("ul:visible").slideUp();
                } else {
                    $this.parent("li").addClass("active");
                    $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
                    $this.closest("li").siblings("li").find("ul:visible").slideUp();
                    $this.siblings("ul").slideDown();
                }
            }
        });
    }
    mobileOffCanvasMenu();


    /*-------------------------
     * Offcanvas: User Panel
    --------------------------*/
    function mobileOffCanvasUserPanel() {
        var $offCanvasNav = $('.offcanvas-userpanel'),
            $offCanvasNavSubMenu = $offCanvasNav.find('.user-sub-menu');
        /*Add Toggle Button With Off Canvas Sub Menu*/
        $offCanvasNavSubMenu.parent().prepend('<span class="offcanvas__user-expand"></span>');
        /*Category Sub Menu Toggle*/
        $offCanvasNav.on('click', 'li a, .offcanvas__user-expand', function (e) {
            var $this = $(this);
            if ($this.attr('href') === '#' || $this.hasClass('offcanvas__user-expand')) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.parent('li').removeClass('active');
                    $this.siblings('ul').slideUp();
                    $this.parent('li').find('li').removeClass('active');
                    $this.parent('li').find('ul:visible').slideUp();
                } else {
                    $this.parent('li').addClass('active');
                    $this.closest('li').siblings('li').removeClass('active').find('li').removeClass('active');
                    $this.closest('li').siblings('li').find('ul:visible').slideUp();
                    $this.siblings('ul').slideDown();
                }
            }
        });
    }
    mobileOffCanvasUserPanel();
    $(".offcanvas-userpanel__role").on("click", function (e) {
        $(".user-sub-menu-2").slideToggle("slow");
    });

    /*----------------------------------------
          Bootstrap dropdown               
  -------------------------------------------*/

    // Add slideDown animation to Bootstrap dropdown when expanding.

    $('.dropdown').on('show.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });
    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
    });


    /*-----------------------
     Shop filter active 
 ------------------------- */
    $('.filter-active a').on('click', function (e) {
        e.preventDefault();
        $('.product-filter-wrapper').slideToggle();
    })



    /*---------------------
        Nice Select
    --------------------- */
    $('select').niceSelect();

    /*---------------------
        venobox
    --------------------- */
    $('.venobox').venobox();
    /*---------------------

    /*---------------------
        Cart Dropdown 
    --------------------- */
    var iconCart = $('.mini-cart-warp');
    iconCart.on('click', function () {
        $('.mini-cart-content').toggleClass('cart-visible');
    });
    /*---------------------
        Toggle Search Bar
    --------------------- */
    $(".search_list > a").on("click", function () {
        $(this).toggleClass('active');
        $('.dropdown_search').slideToggle('medium');
    });

    /*---------------------
        Main Slider Active
    --------------------- */
    $('.slider-active-3').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*---------------------
        Main Slider Active
    --------------------- */
    $('.slider-home-16').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        item: 1,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*---------------------------
       Best Sell Slider Active
    ------------------------------ */
    $('.best-sell-slider').owlCarousel({
        autoplay: false,
        loop: false,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            480: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    })


    /*---------------------------
       Best Sell Slider 2 Active
    ------------------------------ */
    $('.best-sell-slider-2').owlCarousel({
        autoplay: false,
        loop: false,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            500: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    })

    /*---------------------------
       Category Slider Active
    ------------------------------ */
    $('.category-slider').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        loop: false,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 1,
                autoplay: true,
                loop: true,

            },
            767: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            }
        }
    })
    /*---------------------------
       Best Sell Slider Active
    ------------------------------ */
    $('.category-slider-2').owlCarousel({
        autoplay: false,
        loop: false,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            500: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    })


    /*---------------------------
       Hot Deal Slider Active
    ------------------------------ */
    $('.hot-deal').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 1,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
                autoplay: true,
                loop: true,
                margin: 30,
            },
            768: {
                items: 1,
                autoplay: true,
                loop: true,
            },
        }
    })

    /*---------------------------
       New Product Slider Active
    ------------------------------ */
    $('.new-product-slider').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },

            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            480: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1300: {
                items: 4,
            }
        }
    })


    /*---------------------------
       New Product Slider Active
    ------------------------------ */
    $('.new-product-slider-2').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 4,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },

            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            500: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1024: {
                items: 2,
            },
            1200: {
                items: 3,
            },
            1300: {
                items: 4,
            }
        }
    })

    /*---------------------------
       Feature Product Slider Active
    ------------------------------ */
    $('.feature-slider').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 1,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1300: {
                items: 4,
            },
        },
    })

    /*---------------------------
       Recent Product Slider Active
    ------------------------------ */
    $('.recent-product-slider').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            480: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1300: {
                items: 6,
            }
        }
    })

    /*---------------------------
       Brand Slider Active
    ------------------------------ */
    $('.brand-slider').owlCarousel({
        autoplay: false,
        nav: true,
        loop: false,
        smartSpeed: 1000,
        dots: false,
        items: 5,
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 2,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    })

    /*---------------------------
       Testimonial Slider Active
    ------------------------------ */
    $('.testi-slider').owlCarousel({
        autoplay: false,
        nav: false,
        smartSpeed: 1000,
        dots: true,
        items: 2,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            360: {
                items: 1,
                margin: 0,
            },
            576: {
                items: 1,
                margin: 0,

            },
            768: {
                items: 1,
                margin: 0,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 2,
            }
        }
    })

    /*---------------------------
       Blog Slider Active
    ------------------------------ */
    $('.blog-slider-active').owlCarousel({
        autoplay: false,
        nav: true,
        smartSpeed: 1000,
        dots: false,
        items: 3,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
            },
            360: {
                items: 1,
                autoplay: true,
            },
            576: {
                items: 1,
                autoplay: true,
            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }
    })

    /*----------------------------------
       Feature Product Slider 2 Active
    ------------------------------------ */
    $('.feature-slider-2').owlCarousel({
        autoplay: false,
        nav: true,
        smartSpeed: 1000,
        dots: false,
        items: 2,
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 1,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 2,
            },
            1000: {
                items: 1,
            },
            1200: {
                items: 1,
            },
            1300: {
                items: 2,
            }
        }
    })

    /*---------------------------
       Feature Product Slider Active
    ------------------------------ */
    $('.feature-slider-3').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 3,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 1,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
            1300: {
                items: 3,
            },
        },
    })


    /*---------------------------
     Hot Deal Slider 2 Active
    ------------------------------ */
    $('.hot-deal-2').owlCarousel({
        autoplay: false,
        nav: true,
        smartSpeed: 1000,
        dots: false,
        items: 2,
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 2,
            }
        }
    })

    /*---------------------------
     Hot Deal Slider 2 Active
    ------------------------------ */
    $('.hot-deal-3').owlCarousel({
        autoplay: false,
        nav: true,
        smartSpeed: 1000,
        dots: false,
        items: 1,
        loop: false,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    })

    /*---------------------------------------
       products gallery image Slider Active
    ---------------------------------------- */

    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        arrows: true,
        dots: false,
        margin: 10,
    });

    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        dots: false,

    });



    /*--------------------------------
       Category Product Slider Active
    ---------------------------------- */
    $('.category-product-slider').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 1,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 2,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    })

    /*--------------------------------
       Category Product Slider Active
    ---------------------------------- */
    $('.single-product-slider-active').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: true,
        dots: false,
        items: 4,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 2,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    })


    /*--------------------------------
       Category Product Slider Active
    ---------------------------------- */
    $('.category-product-2').owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        nav: true,
        loop: false,
        dots: false,
        items: 1,
        margin: 30,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            360: {
                items: 1,
                autoplay: true,
                loop: true,
            },
            576: {
                items: 1,
                autoplay: true,
                loop: true,

            },
            768: {
                items: 1,
            },
            992: {
                items: 1,
            },
            1200: {
                items: 1,
            }
        }
    })


    /*--------------------------
            Product Zoom
    ---------------------------- */
    $(".zoompro").elevateZoom({
        gallery: "gallery",
        galleryActiveClass: "active",
        zoomWindowWidth: 300,
        zoomWindowHeight: 100,
        scrollZoom: false,
        zoomType: "inner",
        cursor: "crosshair"
    });


    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-2').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            Settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            Settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    });
    /*---------------------
        Product dec slider
    --------------------- */
    $('.product-dec-slider-3').slick({
        infinite: true,
        slidesToShow: 4,
        arrows: false,
        vertical: true,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            Settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            Settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 479,
            Settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        ]
    });

    /*---------------------------
       Blog Gallery Slider Active
    ------------------------------ */

    $('.blog-gallery').slick({
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickview1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickview1slide-active a').on('click', function () {
        $('.quickview1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

      /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickview2-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickview2slide-active a').on('click', function () {
        $('.quickview2-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*-----Fastrack quickview-----*/
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf1slide-active a').on('click', function () {
        $('.quickviewf1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
     $('.quickviewf1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf1slide-active a').on('click', function () {
        $('.quickviewf1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


    /*-----quick view for Fastrack 3-----*/
    $('.quickviewf3-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf3slide-active a').on('click', function () {
        $('.quickviewf3-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
     $('.quickviewf3-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf3slide-active a').on('click', function () {
        $('.quickviewf1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    
    /*-----quick view for Fastrack 4-----*/
    $('.quickviewf4-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf4slide-active a').on('click', function () {
        $('.quickviewf4-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
     $('.quickviewf4-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf4slide-active a').on('click', function () {
        $('.quickviewf4-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*-----quick view for Fastrack 5-----*/
     $('.quickviewf5-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf5slide-active a').on('click', function () {
        $('.quickviewf5-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
     $('.quickviewf5-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf45lide-active a').on('click', function () {
        $('.quickviewf5-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*----Fastrack quickview 6----*/
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf6-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf6slide-active a').on('click', function () {
        $('.quickviewf6-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    
    /* ----Fastrack quick view 7---- */
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf7-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf7slide-active a').on('click', function () {
        $('.quickviewf7-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /* ----Fastrack quick view 8---- */
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf8-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf8slide-active a').on('click', function () {
        $('.quickviewf8-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /* ----Fastrack quick view 8---- */
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf9-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf9slide-active a').on('click', function () {
        $('.quickviewf9-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /* ----Fastrack quick view 10---- */
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf10-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf10slide-active a').on('click', function () {
        $('.quickviewf10-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /* ----Fastrack quick view 11---- */
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf11-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf11slide-active a').on('click', function () {
        $('.quickviewf11-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /* ----Fastrack quick view 11---- */
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewf12-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewf12slide-active a').on('click', function () {
        $('.quickviewf12-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});




    /*-----Titan quick view-----*/
     /*-----Titan quick view 1-----*/
    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt1slide-active a').on('click', function () {
        $('.quickviewt1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt2-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt2slide-active a').on('click', function () {
        $('.quickviewt2-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt3-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt3slide-active a').on('click', function () {
        $('.quickviewt3-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt4-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt4slide-active a').on('click', function () {
        $('.quickviewt4-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt5-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt5slide-active a').on('click', function () {
        $('.quickviewt5-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt6-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt6slide-active a').on('click', function () {
        $('.quickviewt6-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

      /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt7-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt7slide-active a').on('click', function () {
        $('.quickviewt7-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt8-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt8slide-active a').on('click', function () {
        $('.quickviewt8-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt9-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt9slide-active a').on('click', function () {
        $('.quickviewt9-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt10-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt10slide-active a').on('click', function () {
        $('.quickviewt10-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

      /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt11-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt11slide-active a').on('click', function () {
        $('.quickviewt11-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewt12-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewt12slide-active a').on('click', function () {
        $('.quickviewt12-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    /*--------Coolers Rayban-----*/
    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr1slide-active a').on('click', function () {
        $('.quickviewcr1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr2-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr2slide-active a').on('click', function () {
        $('.quickviewcr2-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr3-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr3slide-active a').on('click', function () {
        $('.quickviewcr3-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr4-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr4slide-active a').on('click', function () {
        $('.quickviewcr4-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr5-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr5slide-active a').on('click', function () {
        $('.quickviewcr5-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr6-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr6slide-active a').on('click', function () {
        $('.quickviewcr6-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr7-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr7slide-active a').on('click', function () {
        $('.quickviewcr7-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr8-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr8slide-active a').on('click', function () {
        $('.quickviewcr8-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr9-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr9slide-active a').on('click', function () {
        $('.quickviewcr9-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr10-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr10slide-active a').on('click', function () {
        $('.quickviewcr10-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr11-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr11slide-active a').on('click', function () {
        $('.quickviewcr11-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcr12-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcr12slide-active a').on('click', function () {
        $('.quickviewcr12-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

    /*--------Coolers Rayban-----*/
    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf1slide-active a').on('click', function () {
        $('.quickviewcf1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf2-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf2slide-active a').on('click', function () {
        $('.quickviewcf2-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf3-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf3slide-active a').on('click', function () {
        $('.quickviewcf3-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf4-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf4slide-active a').on('click', function () {
        $('.quickviewcf4-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf5-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf5slide-active a').on('click', function () {
        $('.quickviewcf5-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf6-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf6slide-active a').on('click', function () {
        $('.quickviewcf6-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf7-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf7slide-active a').on('click', function () {
        $('.quickviewcf7-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf8-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf8slide-active a').on('click', function () {
        $('.quickviewcf8-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf9-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf9slide-active a').on('click', function () {
        $('.quickviewcf9-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf10-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf10slide-active a').on('click', function () {
        $('.quickviewcf10-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf11-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf11slide-active a').on('click', function () {
        $('.quickviewcf11-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewcf12-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtcf12slide-active a').on('click', function () {
        $('.quickviewcf12-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


	 /*--------Coolers Titan-----*/
    /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct1-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct1slide-active a').on('click', function () {
        $('.quickviewct1-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct2-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct2slide-active a').on('click', function () {
        $('.quickviewct2-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct3-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct3slide-active a').on('click', function () {
        $('.quickviewct3-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct4-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct4slide-active a').on('click', function () {
        $('.quickviewct4-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct5-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct5slide-active a').on('click', function () {
        $('.quickviewct5-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct6-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct6slide-active a').on('click', function () {
        $('.quickviewct6-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct7-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct7slide-active a').on('click', function () {
        $('.quickviewct7-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct8-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct8slide-active a').on('click', function () {
        $('.quickviewct8-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct9-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct9slide-active a').on('click', function () {
        $('.quickviewct9-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    
     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct10-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct10slide-active a').on('click', function () {
        $('.quickviewct10-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});


     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct11-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct11slide-active a').on('click', function () {
        $('.quickviewct11-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});

     /*---------------------------
       Quick view Slider Active
    ------------------------------ */
    $('.quickviewct12-slide-active').owlCarousel({
        loop: false,
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            576: {
                items: 3
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })


    $('.quickviewtct12slide-active a').on('click', function () {
        $('.quickviewct12-slide-active a').removeClass('active');
    })


    
	var testi = $(".testimonialsSlide");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :false,
		dots : true, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 3
	      }
		}
	}); 

	var testi = $(".feature-item");
	testi.owlCarousel({
		autoplay :false,
		autoplayHoverPause: true,
		smartSpeed : 1000,
		nav :true,
		dots : false, 
		responsiveClass:true,
		responsive : {
		  0 : {
	          items: 1
	      }, 
		  360 : {
	          items: 1
	      },
	      576 : {
	          items: 2
	      },
	      768 : {
	          items: 2
	      },
	      992 : {
	          items:3
	      },
		  1200 : {
	          items: 4
	      }
		}
	});
    /*--------------------------
      ScrollUp
  ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*----------------------------
           Cart Plus Minus Button
       ------------------------------ */
    var CartPlusMinus = $('.cart-plus-minus');
    CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
    CartPlusMinus.append('<div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() === "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });



    /*-------------------------
      Create an account toggle
      --------------------------*/
    $('.checkout-toggle2').on('click', function () {
        $('.open-toggle2').slideToggle(1000);
    });

    $('.checkout-toggle').on('click', function () {
        $('.open-toggle').slideToggle(1000);
    });


    $('.vertical-menu-toggle').on('click', function () {
        $('.open-menu-toggle').slideToggle(500);
    });

    /*--------------------  
    Category more toggle  
    ----------------------*/

    $(".vertical-menu li.hidden").hide();
    $("#more-btn").on('click', function (e) {

        e.preventDefault();
        $(".vertical-menu li.hidden").toggle(500);
        var htmlAfter = '<i class="ion-ios-minus-empty" aria-hidden="true"></i> Less Categories';
        var htmlBefore = '<i class="ion-ios-plus-empty" aria-hidden="true"></i> More Categories';


        if ($(this).html() == htmlBefore) {
            $(this).html(htmlAfter);
        } else {
            $(this).html(htmlBefore);
        }
    });

    /*--------------------  
    All Category toggle  
    ----------------------*/

    $(".category-toggle").click(function () {
        $(".category-menu").slideToggle("slow");
    });
    $(".menu-item-has-children-1").click(function () {
        $(".category-mega-menu-1").slideToggle("slow");
    });
    $(".menu-item-has-children-2").click(function () {
        $(".category-mega-menu-2").slideToggle("slow");
    });
    $(".menu-item-has-children-3").click(function () {
        $(".category-mega-menu-3").slideToggle("slow");
    });
    $(".menu-item-has-children-4").click(function () {
        $(".category-mega-menu-4").slideToggle("slow");
    });
    $(".menu-item-has-children-5").click(function () {
        $(".category-mega-menu-5").slideToggle("slow");
    });
    $(".menu-item-has-children-6").click(function () {
        $(".category-mega-menu-6").slideToggle("slow");
    });


    /*---------------------
        Countdown
    --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hours</p></span> <span class="cdown minutes">%M <p>Mins</p></span> <span class="cdown second">%S <p>Sec</p></span>'));
        });
    });

    /*---------------------------
       Menu Fixed On Scroll Active
    ------------------------------ */
    $(window).scroll(function () {
        var window_top = $(window).scrollTop() + 1;
        if (window_top > 50) {
            $('.sticky-nav').addClass('menu_fixed animated fadeInDown');
        } else {
            $('.sticky-nav').removeClass('menu_fixed animated fadeInDown');
        }
    });

    /*---------------------------
       Window On Load Functions Active
    ------------------------------ */

    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });




}(jQuery));



/*$( document ).ready(function(){
	setTimeout(function(){$('#myModal1').modal('show');}, 4000);
	 
	setTimeout(function() {$('#myModal1').modal('hide');}, 10000);
 });*/


 $('.brand-carousel').owlCarousel({
	loop:true,
	margin:10,
	autoplay:true,
	responsive:{
	  0:{
		items:1
	  },
	  600:{
		items:3
	  },
	  1000:{
		items:5
	  }
	}
  }) 
  