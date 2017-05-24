/**
 * Created by user pc on 27.02.2017.
 */
$(document).ready(function () {
    var menuLeft = $("#menu_js"), j, k, i,
        item_menu = menuLeft.children();

    // ==========button menu===============
    $(".button_menu").click(function () {
        $(this).toggleClass("button_cross");
        menuLeft.toggleClass("menu_visible menu_hidden");
        if ($(".menu_hidden").is(menuLeft)) {
            j = 0;
            k = 3;
            for (i = 0; i < item_menu.length; ++i) {
                j++;
                k++;
                $(item_menu[i]).css({
                    "animation-delay": j / 10 + "s",
                    "transition-delay": (k / 10) + "s"
                });
            }
        } else {
            j = 0;
            k = 5;
            for (i = 0; i < item_menu.length; ++i) {
                j++;
                k+=10;
                $(".menu_visible").find(item_menu[i]).css({
                    "animation-delay": (j / 10) + "s",
                    "transition-delay": ((k) / 100) + "s"
                });
            }
        }
    });
    // =================menu scroll=============
    $(window).scroll(function () {
        var topMenu = 36;
        var valTop;
        var scroll = $(this).scrollTop();
        if (topMenu > scroll) {
            valTop = topMenu - scroll;
        }
        else {
            valTop = 0;
        }
        $("#menu_js, #but_mnenu").css("top", valTop + "px");

    });
    //==============tooltip====
    // $('[data-toggle="tooltip"]').tooltip();

    //        ===============кнопка вверх==============
    // var toTop = $('.to-top');
    // toTop.click(function () {
    //     $('body,html').animate({scrollTop: 0}, 800);
    // });
    // $(window).scroll(function () {
    //     if ($(this).scrollTop() != 0) {
    //         $('.to-top').fadeIn();
    //     } else {
    //         $('.to-top').fadeOut();
    //     }
    // });
    // ===================masked input==============
    // $('.mask-phone').mask('+ 38 (999) 999-99-99');

});