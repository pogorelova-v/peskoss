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


$('#formMessage').on('input', function(){
	this.style.height = '1px';
	this.style.height = (this.scrollHeight + 6) + 'px'; 
});

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

if ($(window).width() < 768) {
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

$(document).on('click', '.question-title', function(){
    let indQues = $(this).index('.question-title');
    if ( $('.question-title').eq(indQues).hasClass('activ')) {
        $('.question-desc').eq(indQues).slideUp();
        $('.question-title').eq(indQues).removeClass('activ');
    } else {
        
        $('.question-desc').slideUp();
        $('.question-title').removeClass('activ');

        $('.question-desc').eq(indQues).slideDown();
        $('.question-title').eq(indQues).addClass('activ');
    }
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });