
$('."your-class').slick({
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay:true,
    autoplayspeed:1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseonhover:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
                  

  
  
  
  
  
  
  
  
  
