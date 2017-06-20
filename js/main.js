function affix() {
    var scrollValue = $(window).scrollTop();

    if (scrollValue > 70) {
        $('#stickyHeader').addClass('affix');
    }
    else {
        $('#stickyHeader').removeClass('affix');
    }
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
});