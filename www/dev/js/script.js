$.nette.init();

$('#filter-button').on('click', function (e) {
    e.preventDefault();
    var height = $('#filter-container').height() + 95 + 41;
    var $filter = $('#control-bar');
    if ($filter.hasClass('active')) {
        $('#filter-buttons').hide();
        $filter.stop().animate({height: 95}, 200).removeClass('active');
    } else {
        $('#filter-buttons').show();
        $filter.stop().animate({height: height}, 200).addClass('active');
    }
});

$('#add-quote-close').on('click', function () {
    modalClose();
});

$('#add-quote-button').on('click', function (e) {
    e.preventDefault();
    $('#modal-fade').stop().show();
    $('#add-quote').stop().show().animate({
        top: 50,
        opacity: 1
    }, 300);
});

$('#modal-fade').on('click', function () {
    modalClose();
});

function modalClose() {
    $('#modal-fade').hide();
    $('#add-quote').stop().animate({
        top: 0,
        opacity: 0
    }, 100, function () {
        $(this).hide();
    });
}

$('.flash i').on('click', function () {
    $(this).parent('.flash').remove();
});

$('#checkbox-reset').on('click', function (e) {
    e.preventDefault();
    $('.filter-checkbox').each(function () {
        $(this).attr('checked', false);
    });
});

$('#user-controls-toggle').on('click', function (e) {
    e.preventDefault();
    userCpControl();
});


$('html').on('click', function (e) {
    var target = $(e.target);
    if ($('#page-search-button').hasClass('active')) {
        if (target.parents('#top-nav').size() == 0) {
            searchBoxControl();
        }
    }
    if ($('#user-controls').hasClass('active')) {
        if (target.parents('#user-cp').size() == 0) {
            userCpControl();
        }
    }
});

$('#page-search-button').click(function (e) {
    e.preventDefault();
    searchBoxControl();
});

function userCpControl() {
    var c = $('#user-controls');
    if (c.hasClass('active')) {
        c.stop().animate({top: 50, opacity: 0}, 150, function () {
            $(this).hide();
        });
        c.removeClass('active');
        $('#user-controls-toggle').removeClass('active');
    } else {
        c.stop().show().animate({top: 60, opacity: 1}, 150);
        c.addClass('active');
        $('#user-controls-toggle').addClass('active');
    }
}

function searchBoxControl() {
    var button = $('#page-search-button');
    var box = $('#page-search-box');

    if (button.hasClass('active')) {
        button.removeClass('active');
        box.animate({width: 0, paddingLeft: 0, paddingRight: 0}, 100, function () {
            box.val('');
            box.focus();
        });
    } else {
        box.animate({
            width: box.offset().left - $('#nav-container').offset().left - 15 - $('#logo').outerWidth() - 30 + 2,
            paddingLeft: 15,
            paddingRight: 15
        }, 100, function () {
            box.val('');
            box.focus();
        });
        button.addClass('active');
    }
}

$('#top-nav').autoHidingNavbar({
    hideOffset: -60
});

/*
var scrollTop = $('#scroll-top');
scrollTop.click(function (event) {
    event.preventDefault();
    $('html, body').stop().animate({scrollTop: 0}, 200);
    return false;
});

var scrolled = false;
$(window).scroll(function () {
    scrolled = true;
});

setInterval(function () {
    if (scrolled) {
        scrolled = false;
        handler();
    }
}, 200);

var lastScroll = 0;
var st = 0;
var menu = $('#top-nav');
var mobileMenu = $('#mobile-menu');
var navbarVisible = true;
var scrollVisible = false;

handler = function () {
    st = $(window).scrollTop();
    if (st > lastScroll) {
        //scroll down
        if (navbarVisible) {
            if (st > 200) {
                mobileMenu.hide();
                menu.stop().animate({top: -55}, 200);
                navbarVisible = false;
            }
        }
        if (scrollVisible) {
            scrollTop.stop().animate({bottom: 10, opacity: 0}, 200, function () {
                $(this).hide();
            });
            $('#footer').stop().animate({opacity: 0}, 200, function () {
                $(this).hide();
            });
            scrollVisible = false;
        }
    } else {
        // scroll up
        if (!navbarVisible) {
            mobileMenu.show();
            menu.stop().animate({top: 0}, 200);
            navbarVisible = true;
        }
        if (!scrollVisible) {
            if (st + $(window).height() - $('.tag-cloud').outerHeight() - $("#control-bar").outerHeight() > 200) {
                scrollTop.stop().show().animate({bottom: 20, opacity: 1}, 200);
                $('#footer').stop().show().animate({opacity: 1}, 200);
                scrollVisible = true;
            }
        } else {
            if (st + $(window).height() - $('.tag-cloud').outerHeight() - $("#control-bar").outerHeight() < 200) {
                scrollTop.stop().animate({bottom: 10, opacity: 0}, 200, function () {
                    $(this).hide();
                });
                $('#footer').stop().animate({opacity: 0}, 200, function () {
                    $(this).hide();
                });
                scrollVisible = false;
            }
        }
    }
    lastScroll = st;
};
*/