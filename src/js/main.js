
$(document).ready(function() {


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

});