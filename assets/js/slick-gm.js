$( document ).ready(function(){
        var carousels = $('.homepage-circles-container');
        function initSlick() {

        console.log('ready')
        $('#homepage-circles-container').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 790,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
        });
    }
    initSlick();

    // $(window).on('resize', initSlick());

    // carousels.on('breakpoint', function(slick) {
    //   carousels.slick('setPosition');
    //   console.log(slick.currentTarget.slick);
    //   var count = slick.currentTarget.slick.slideCount;
    //   var show = slick.currentTarget.slick.options.slidesToShow;

    //   if (show >= count) {
    //     carousels.slick('unslick');
    //   }

    // });


    // carousels.on('destroy', function() {
    //   carousels.slick(config);
    // });


// END JQUERY
});