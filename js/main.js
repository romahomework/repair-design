

$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });    
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },  
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-next');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() +10 )
    bullets.css('left', prev.width() + 10 )

    new WOW().init();

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '465',
          width: '100%',
          videoId: 'o9nfoM5Ug2w',
          events: {
            'onReady': videoPlay,
          }
        });
      })

      function videoPlay(event) {
        event.target.playVideo();
      }
});