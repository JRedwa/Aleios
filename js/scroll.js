
// slow navigation
$(document).ready(function() {
    window.scrollTo(0,document.body.scrollTop); // load page on top

    //навигация - плавный скроллинг к якорю
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// hide menu on top - add/remove class hide-menu
jQuery(function($) {
        $(window).scroll(function(){
            if($(this).scrollTop()>100){
                $('#menu').addClass('hide-menu');
            }
            else if ($(this).scrollTop()<100){
                $('#menu').removeClass('hide-menu');
            }
        });
    });