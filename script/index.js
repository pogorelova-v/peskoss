//---------- Попап обратной связи

$('.btn-form-open').click(function () {
    $('.form_wrap').fadeIn(300);
})

$('.form_wrap').click(function (e) {
    if (!$('.form_popap').is(e.target) && $('.form_popap').has(e.target).length === 0) {
        $('.form_wrap').fadeOut(300);
    }
})

$('.close_form').click(function () {
    $('.form_wrap').fadeOut(300);
})

//-----------------------Бургер меню

$('.header_menu_burg-btn').click(function () {
    $('.header_menu_burg-btn').toggleClass("burg-open");
    $('.header_menu_burg').slideToggle();
})
$('main').click(function () {
    $('.header_menu_burg-btn').removeClass("burg-open");
    $('.header_menu_burg').slideUp();
})
$('.header_menu_burg-list').children('li').click(function () {
    $('.header_menu_burg-btn').removeClass("burg-open");
    $('.header_menu_burg').slideUp();
})

if ($(window).width() < 576) {
    let heightBurg = $('.header_menu_burg-btn_wrap').offset().top;
    $(window).scroll(function () {
        if ($(this).scrollTop() > heightBurg) {
            $('.header_menu_burg-btn_wrap').css('position', 'fixed');
            $('.header_menu_burg').css('position', 'fixed');
        }
        else if ($(this).scrollTop() < heightBurg) {
            $('.header_menu_burg-btn_wrap').css('position', 'absolute');
            $('.header_menu_burg').css('position', 'absolute');
        }
    });
}