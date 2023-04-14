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

//-----------------------Блок вопросов


$('.question-desc').eq(1).slideDown();
$('.question-title').eq(1).addClass('activ');

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

  //   wow

  new WOW().init();