function affix() {
    var scrollValue = $(window).scrollTop();

    if (scrollValue > 70) {
        $('#stickyHeader').addClass('affix');
    }
    else {
        $('#stickyHeader').removeClass('affix');
    }
}

function menuToggle() {
    var $mainNav = $('#mainNav');
    var hideMenu = function () {
        $mainNav.removeClass('active');

        $('body').removeClass('overflow');
    };

    $('#burgerBtn').click(function (e) {
        e.preventDefault();

        $('body').addClass('overflow');
        $mainNav.addClass('active');
    });

    $('#closeNav').click(function (e) {
        e.preventDefault();

        hideMenu();
    });
}

$(document).ready(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    affix();

    $(window).on('scroll', function (event) {
        setTimeout(function () {
            affix();
        }, 100);

    });

    menuToggle();
});