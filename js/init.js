/**
 * Created by user pc on 27.02.2017.
 */
$(document).ready(function () {
    var menuLeft = $("#menu_js"),
        j, k, i,
        item_menu = menuLeft.children(),
        booling = true,
        heightWin = $(window).height();

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
    // =================menu scrolling=============
   /* $(window).scroll(function () {
        var topMenu = 36;
        var valTop;
        var scroll = $(window).scrollTop();

        // =========================
        if (topMenu > scroll) {
            valTop = topMenu - scroll;
        }
        else {
            valTop = 0;
        }
        $("#menu_js, #but_mnenu").css("top", valTop + "px");
        // ===============add class animation==============
        $(".anchor_animation").each(function () {
            var element = this;
            var $element = $(element);
            var element_bounding = element.getBoundingClientRect();
            if (element_bounding.top <= scroll) {
                $element.removeClass("animation");
                // console.log(element_bounding.top + " element_bounding");
                // circle.css("transform", "rotate(deegre + 'deg')");
                // console.log(scroll);
            }
        });
    });*/

    $(window).scroll(function () {
        if(!booling)return false;

        var scroll = $(window).scrollTop();
        var progress = $("#progress");
        var offsetProgress = progress.offset().top;
        if (offsetProgress <= scroll + heightWin) {
            var halfCircle = progress.find(".half_circle_l");

            halfCircle.each(function () {
                var rotation =$(this);
                // var rotation = $(this).attr("data-rotate")*3.6;
                var siblings = $(this).siblings(".percentages");
                var par = $(this).parent(".qualification_block");

                function numAnimate(count, deg, par) {
                    var number = 1;
                    var result = count.text();
                    setInterval(function () {
                        number++;
                        if (number <= result) {
                            count.text(number);
                            deg.css({
                                '-webkit-transform': 'rotate(' + (number*3.6) + 'deg)',
                                '-moz-transform': 'rotate(' + (number*3.6) + 'deg)',
                                '-ms-transform': 'rotate(' + (number*3.6) + 'deg)',
                                'transform': 'rotate(' + (number*3.6) + 'deg)'
                            });
                            if(50 == number){
                                par.addClass("more_half");
                                console.log(number);
                            }
                            else{
                                return false
                            }
                        }

                    }, 8);
                }

                numAnimate(siblings, rotation, par);
                 /*$(this).css({
                    '-webkit-transform': 'rotate(' + rotation + 'deg)',
                    '-moz-transform': 'rotate(' + rotation + 'deg)',
                    '-ms-transform': 'rotate(' + rotation + 'deg)',
                    'transform': 'rotate(' + rotation + 'deg)'
                });
                if (rotation) {
                }*/
            });
            booling =false;
        }


    });

    /*
     half_circle_l.each(function (e) {
     var deg = $(this).attr("style");
     var matr = deg.match(/[0-9]+deg/);
     });*/
    //==============tooltip====
    // $('[data-toggle="tooltip"]').tooltip();

    //        ===============кнопка вверх==============
    var toTop = $('.to-top');
    toTop.click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.to-top').fadeIn();
        } else {
            $('.to-top').fadeOut();
        }
    });
    // ===================masked input==============
    // $('.mask-phone').mask('+ 38 (999) 999-99-99');
});
