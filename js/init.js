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

        $("#element").each(function () {
            var element = this;
            var $element = $(element);
            var element_bounding = element.getBoundingClientRect();

            // console.log(element_bounding.top + " element_bounding");
            // console.log(heightWin+" heightWin")

        });

    });

    /* var q = 100;

     function tme(arg) {
     q = 1 + arg;
     // console.log(q);
     }

     var timerId = setInterval(function () {
     tme(q)
     }, 100);
     // setTimeout(function(){console.log(q)}, 4000);

     function draw() {
     var canvas = document.getElementById("first_c");
     var bezier = canvas.getContext('2d');
     var x = 0;
     x += 3;
     bezier.fillStyle = "white";                                     // цвет заливки
     bezier.fillRect(x, 120, 3, 3);

     bezier.fillStyle = "white";                                     // цвет заливки
     bezier.fillRect(200, 80, 3, 3);
     }
     draw();*/


    var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;

    var x = 0;
    drawPlast();
    /*function drawMinus() {
        x -= 1;
        console.log(x);
        var mainCanvas = document.getElementById("first");
        var mainContext = mainCanvas.getContext('2d');
        mainContext.fillStyle = "white";
        mainContext.fillRect(x, 120, 3, 3);

        var requestM = requestAnimationFrame(drawMinus);
        if (x == 0) {
            cancelAnimationFrame(requestM);
            // drawPlast();
        }
    }*/

    function drawPlast() {
        x += 1;
        console.log(x);
        var mainCanvas = document.getElementById("first");
        var mainContext = mainCanvas.getContext('2d');
        mainContext.fillStyle = "white";
        mainContext.fillRect(x, 120, 3, 3);

        // var requestP = requestAnimationFrame(drawPlast);
        /*if (x == 10) {
            cancelAnimationFrame(requestP);
            drawMinus();
        }*/
    }


    // bezier.lineTo(400, 300);
    // bezier.lineTo(0, 300);
    // bezier.closePath();
    // bezier.fillStyle = "grey";
    // bezier.fill();
    /*canvas.each(function(){
     var bezier = $(this).getContext('2d');
     bezier.beginPath();
     bezier.strokeStyle = "red";
     bezier.moveTo(0, 100);
     bezier.bezierCurveTo(115, 145, 215, 40, 400, 105);
     bezier.lineTo(400, 300);
     bezier.lineTo(0, 300);
     bezier.closePath();
     bezier.fillStyle = "grey";
     bezier.fill();
     bezier.stroke();

     });*/
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
