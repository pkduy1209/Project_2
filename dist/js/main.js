const  HomePage = (function(){
  const initHeroImage = function() {
    const $heroImage = $('#heroImage');
    if(!$heroImage.length) {
      return;
    }

    var mySwiper = new Swiper ($heroImage, {
      effect: 'fade',
      clickable: 'false',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      }
    })
  };//end initHeroImage

  const initGuideSlide = function(){
    const $guideSlide = $('#guidesSilder')
    if (!$guideSlide){
      return;
    }

    var mySwiper =new Swiper ($guideSlide,{
      slidesPerView: 5,
      spaceBetween: 20,
      loop: 'true',
      breakpoints: { 
        1200: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 2
        },
        565: {
            slidesPerView: 1,
        }
    },
    })
  };

  const initDealSlide = function(){
    const $dealSlide = $('#deal-block')
    if (!$dealSlide){
      return;
    }

    var mySwiper =new Swiper ($dealSlide,{
      slidesPerView: 4,
      spaceBetween: 20,
      loop: 'true',
      breakpoints: { 
        1200: {
            slidesPerView: 3
        },
        991: {
            slidesPerView: 2
        },
        565: {
            slidesPerView: 1,
        }
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
    })

  };
return {
  init(){
    initHeroImage();
    initGuideSlide();
    initDealSlide();
  }
}
})();
HomePage.init();