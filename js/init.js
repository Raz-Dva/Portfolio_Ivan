/**
 * Created by user pc on 27.02.2017.
 */
$(document).ready(function () {

    var menuLeft = $("#menu_js"),
        j, k, i,
        item_menu = menuLeft.children(),
        booling = true,
        heightWin = $(window).height();
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
                    "-webkit-animation-delay": j / 10 + "s",
                    "animation-delay": j / 10 + "s",
                    "-o-transition-delay": (k / 10) + "s",
                    "-webkit-transition-delay": (k / 10) + "s",
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
                    "-webkit-animation-delay": (j / 10) + "s",
                    "animation-delay": (j / 10) + "s",
                    "-o-transition-delay": (k / 100) + "s",
                    "-webkit-transition-delay": (k / 100) + "s",
                    "transition-delay": (k / 100) + "s"
                });
            }
        }
    });
    // =================menu scrolling=============
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var progress = $("#progress");
        var offsetProgress = progress.offset().top;

        // ===============add class animation==============
        $(".anchor_animation").each(function () {
            var element = this;
            var $element = $(element);
            var element_bounding = element.getBoundingClientRect();
            if (element_bounding.top <= scroll) {
                $element.removeClass("animation");
            }
        });
        // ================easypiechart диаграмма==============
        if (!booling)return false;
        if (offsetProgress <= scroll + heightWin - (120)) {
            $(function () {
                $('.chart').easyPieChart({
                    scaleColor: '#FF00AE',
                    lineWidth: 15,
                    lineCap: ' but',
                    barColor: '#FFA616',
                    trackColor: "#606060",
                    size: 190,
                    scaleLength: 0,
                    animate: 1500
                });
            });
            booling = false;
        }
    });
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
    // ============================== ajax form ===============
    // ============================== валидация формы ajax form ===============
    $('input#name, input#email, textarea#message, input#phone').unbind().blur(function () {

        // Для удобства записываем обращения к атрибуту и значению каждого поля в переменные
        var id = $(this).attr('id');
        var val = $(this).val();

        // После того, как поле потеряло фокус, перебираем значения id, совпадающие с id данного поля
        switch (id) {
            // Проверка поля "Имя"
            case 'name':
                var rv_name = /^[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я]/; // используем регулярное выражение

                // Eсли длина имени больше 2 символов, оно не пустое и удовлетворяет рег. выражению,
                // то добавляем этому полю класс .not_error,
                // и ниже в контейнер для ошибок выводим слово " Принято", т.е. валидация для этого поля пройдена успешно

                if (val.length > 2 && val != '' && rv_name.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    $(this).next('.help-block').text('Accepted')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }

                // Иначе, мы удаляем класс not-error и заменяем его на класс error, говоря о том что поле содержит ошибку валидации,
                // и ниже в наш контейнер выводим сообщение об ошибке и параметры для верной валидации

                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.help-block')
                        .html('поле "Имя" обязательно для заполнения,<br> ' +
                            'длина имени должна составлять не менее 2 символов,' +
                            '<br> поле должно содержать только русские или латинские буквы')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;

            // Проверка email
            case 'email':
                var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
                if (val != '' && rv_email.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    $(this).next('.help-block').text('Accepted')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.help-block')
                        .html('поле "Email" обязательно для заполнения,<br>' +
                            'поле должно содержать правильный email-адрес<br>')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;

            // Проверка tell
            case 'phone':
                // var rv_tell =/^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/; +38(044)555-55-55
                var rv_tell = /\d[^a-zA-Zа-яА-Я]/;
                if (val != '' && rv_tell.test(val)) {
                    $(this).removeClass('error').addClass('not_error');
                    $(this).next('.help-block').text('Accepted')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.help-block')
                        .html('поле "Phone" обязательно для заполнения,<br>' +
                            'поле должно содержать только цифры<br>')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;

            // Проверка поля "Сообщение"
            case 'message':
                if (val != '' && val.length < 5000) {
                    $(this).removeClass('error').addClass('not_error');
                    $(this).next('.help-block').text('Accepted')
                        .css('color', 'green')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                else {
                    $(this).removeClass('not_error').addClass('error');
                    $(this).next('.help-block').html('поле "Текст письма" обязательно для заполнения, <br>' +
                        'не более 5000 символов')
                        .css('color', 'red')
                        .animate({'paddingLeft': '10px'}, 300)
                        .animate({'paddingLeft': '5px'}, 400);
                }
                break;

        } // end switch(...)

    }); // end blur()

    $("#form").submit(function () { //устанавливаем событие отправки для формы с id=form
        var data = $(this).serialize(); //собераем все данные из формы
        var form = $('#form').find('.swap-animation');
        var btnSend = $('#btn-send');
        function resultSuccess(){
            btnSend.removeAttr("disabled").closest(".wrap_btn_animate").removeClass("active-animate");
            form.addClass('swap').find('.icon-swap').addClass('icon-check-circle-o')
                .next('.submit-text').addClass('text-success').text('Ваше сообщение отправлено удачно!');
            setTimeout(function(){
                form.removeClass('swap')
            }, 2010);
        }
        function resultError(){
            btnSend.removeAttr("disabled").closest(".wrap_btn_animate").removeClass("active-animate");
            form.addClass('swap').find('.icon-swap').addClass('icon-ban')
                .next('.submit-text').addClass('text-danger').text('Ваше сообщение не отправлено!');
            btnSend.next('.send-text-error').text('Ваше сообщение не отправлено!');
            setTimeout(function(){
                form.removeClass('swap')
            }, 2010);

        }
        if ($('.not_error').length == 4) {
            var ajaxx = $.ajax({
                url: "send.php",
                type: "POST",
                data: data,
                dataType: "text",
                beforeSend: function () {
                    btnSend.attr('disabled', 'disabled').closest(".wrap_btn_animate").addClass("active-animate");
                },
                success: function (result) {
                    if(result == 'true') {
                        resultSuccess();
                    }
                    else{
                        resultError();
                    }
                },
                error: function () {
                    resultError();
                    // alert("Ошибка выполнения");
                },
                complete: function () {
                    $("#form input, #form textarea").each(function(){
                        $(this).val("");
                    });
                    // alert("Завершилась отправка");
                }
            });
            console.log(ajaxx.status);
            return false;
        }
        else {
            return false;

        }
    });
    // ==================якоря для меню ===========
    $(".link-scrolling").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 400);
    });
    // ==================placeholder ============
    $('input').placeholder();
});
