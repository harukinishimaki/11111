$(function() {
    $('#top-btn').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function() {
        $('.fadeIn').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 50) {
                $(this).addClass('scrollIn');
            }
        });
    });

    $('#hamburger').click(function() {
        $(this).toggleClass('active');
        $('.menu-content').toggleClass('open');
    });

});