$(document).ready(function () {



    /*----------------------------- Start Header --------------------------------*/


    //minmize navbar height when scroll

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });



    // Navbar active Links state on scroll

    var nav_sections = $('section');
    var main_nav = $('.main-nav, .mobile-nav');
    var main_nav_height = $('#header').outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top - main_nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                main_nav.find('li').removeClass('active');
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');

            }
        });
    });


    /*----------------------------- End Header --------------------------------*/




    /*------------------------------------ Start Intro ---------------------------*/

    $('#intro .intro-info .btn-get-started').hover(function () {
        $(this).css({
            'background': 'none',
            'border-color': '#fff',
            'color': '#fff'
        });
    }, function () {
        $(this).css({
            'background': '#007bff',
            'border-color': '#007bff',
            'color': '#fff'
        });
    });


    $('#intro .intro-info .btn-services').hover(function () {
        $(this).css({
            'background': '#007bff',
            'border-color': '#007bff',
            'color': '#fff'
        });
    }, function () {
        $(this).css({
            'background': 'none',
            'border-color': '#fff',
            'color': '#fff'
        });
    });

    /*------------------------------------ End Intro ---------------------------*/




    /*------------------------------------ Start carousel ---------------------------*/



    $('.carousel').carousel({
        interval: 2000
    })

    /*------------------------------------ End carousel ---------------------------*/




    /*----------------------------- Run Counter -------------------------------*/


    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

});
/*----------------------------- End Counter -------------------------------*/



/*------------------------------ Start Filter ---------------------------------*/


$(window).on('load', function () {
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });
});


/*------------------------------ End Filter ---------------------------------*/



/*----------------- Start Make Scroll To Top --------------------------------*/

$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

$('.back-to-top').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
    return false;
});

/*------------------ End Make Scroll To Top ---------------------------------*/
