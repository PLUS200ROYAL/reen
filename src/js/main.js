
$(document).ready(function() {

    /*var isMobile;
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ) {
        isMobile = false;
        // niceScrollInit();

        //////////     ANIMATION      ////////////

        /!*$('.wp1').waypoint(function() {
            $('.wp1').addClass('animated fadeInRight');
        }, {
            offset: '85%'
        });
        $('.wp2').waypoint(function() {
            $('.wp2').addClass('animated fadeInLeft');
        }, {
            offset: '85%'
        });*!/
    }
    else {
        isMobile = true;
        $(".b-page__header").addClass("b-page__header--mob");
         $('.wp1, .wp2').css('visibility', 'visible');
    }*/

    //////////     MENU       ////////////

    var $menu = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.click(function() {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });


    //////////     SLIDER      ////////////

    var owl1 = $('.owl-carousel-1');
    owl1.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: '',
        dots: true,
        dotsContainer: '.b-slide-dots',
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 500,
        responsiveClass: true,
        responsive:{
            320:{
                height: 600
            },
            768:{
                height: 700
            },
            960:{
                height: 880
            }
        }
    });

    var owl2 = $('.owl-carousel-2');
    owl2.owlCarousel({
        loop: true,
        nav: true,
        margin: 30,
        navText: '',
        dots: true,
        //smartSpeed: 500,
        //autoHeight: true,
        responsiveClass: true,
        responsive:{
            320: {
                items: 1
            },
            540: {
                items: 2
            },
            768: {
                items: 3
            },
            960: {
                items: 4
            }
        }
    });

    //////////    SCROLL    /////////////

    /*$('body').on('click', '.b-nav__link', function(){
        $('html, body').stop().animate({'scrollTop' : $(this.hash).offset().top - $(".b-page__header").height() }, 1300);
        $('.b-nav__link').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.b-header-logo__link').on('click', function(){
        $('body, html').animate({'scrollTop': 0}, 700);
    });*/

});





//////////     NICESCROLL      ////////////

/*function niceScrollInit(){
    $("html").niceScroll({
        zindex: 10000,
        scrollspeed: 60,
        mousescrollstep: 45,
        cursorwidth: 10,
        cursorborder: 0,
        cursorcolor: '#2D3032',
        cursorborderradius: 2,
        autohidemode: true,
        horizrailenabled: false
    });

    $('html').addClass('no-overflow-y');
}*/
