/**
 * Created by user pc on 27.02.2017.
 */
$(document).ready(function () {
    var menuLeft = $("#menu_js"),
        j, k, i,
        item_menu = menuLeft.children();

// ================btn down=======
    $(".link-scrolling").on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: ($(hash).offset().top)
        }, 500);
    });

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
                k += 10;
                $(".menu_visible").find(item_menu[i]).css({
                    "animation-delay": (j / 10) + "s",
                    "transition-delay": ((k) / 100) + "s"
                });
            }
        }
    });
    /* var animationRight = $(".personal_info_row:even");
     var animationLeft = $(".personal_info_row:odd");
     var allElem = $(".personal_info_row");
     var NewElem = [];*/

    // =================menu scrolling=============
    $(window).scroll(function () {
        var topMenu = 36;
        var valTop;
        var scroll = $(window).scrollTop();
        var offsetTop = $("#about").offset().top;
        var heightWin = $(window).height();
        // =========================
        if (topMenu > scroll) {
            valTop = topMenu - scroll;
        }
        else {
            valTop = 0;
        }
        $("#menu_js, #but_mnenu").css("top", valTop + "px");
        // =============================
        if ((offsetTop - heightWin) + 300 <= scroll) {
            $(".about_block-top").removeClass("about_top_animation");
        }

        $(".test").each(function () {
            var element = this;
            var $element = $(element);
            var element_bounding = element.getBoundingClientRect();
            if (element_bounding.top + 300 <= scroll)$element.addClass("animation")
            // console.log(element_bounding.top + " element_bounding");

        });
      
    });
    // ===============progress===============
    var half_circle_r = $(".half_circle_r");
    var half_circle_l = $(".half_circle_l");
    var circleMain = $(".qualification_icon");


    half_circle_l.each(function (e) {
        var deg = $(this).attr("style");
        var matr = deg.match(/[0-9]+deg/);
        // alert(matr);
        /* if(180 <= parseFloat(deg)){
         alert("больше 180")
         }*/
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
