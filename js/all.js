// 圖片幻燈片
 $(document).ready(function(){
      var imageSwiper = new Swiper('.image-swiper',{
      spaceBetween: 0,
      loop: true,
      slidesPerView: 1,
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
            },

      navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
            },
      });

});


// smooth scrollTo
$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
    $('html, body').stop(0,1).animate({
    scrollTop: target.offset().top-80
    }, 800);
    return;
    }
    }
    });


//scrollreveal
    window.sr = ScrollReveal({
        reset: false,
        distance: '20px',
        scale:1,
        easing:'ease-in-out',
        duration: 400,
        viewFactor: 0.5
    });
    sr.reveal('.reveal_bottom', {
        origin:'bottom',
        delay: 0.5
    });
    sr.reveal('.reveal_left', {
        origin:'left',
        delay: 0.5
    });
    sr.reveal('.reveal_right', {
        origin:'right',
        delay: 0.5
    });
    sr.reveal('.reveal_opacity', {
        distance: '0px',
        delay: 0.5
    });
    sr.reveal('.reveal_scale', {
        distance: '0px',
        scale:0.9
    });

ScrollReveal().reveal('.banner-tag li',{
    interval: 200,
    distance: '0px'
});

ScrollReveal().reveal('#project figure, #footer .col-md-6', {
    interval: 300,
    distance: '0px'}
            );



$('.title, #banner .row').paroller({
  type: 'foreground',
  direction: 'vertical',
  factor: 0.1,
  factorXs: 0,
});
