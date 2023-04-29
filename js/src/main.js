$('a.scroll-link-js').click(function (event) {
    event.preventDefault();
    let id = $(this).attr('href');

    var element = document.getElementById(id);
    var headerOffset = 80;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
});



var itemMainSlider = new Swiper(".itemSecondSlider", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 5,
    watchSlidesProgress: true,
  });
var itemSecondSlider = new Swiper(".itemMainSlider", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: itemMainSlider,
    },
  });




// swipers
const swiper_with_tabs = new Swiper('.swiper_with_tabs', {
    // Optional parameters
    autoHeight: true,
    spaceBetween: 30,
    slidesPerView: 1,
    autoHeight: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});
const swiper_with_tabs_four = new Swiper('.swiper_with_tabs_four', {
    // Optional parameters
    autoHeight: true,
    spaceBetween: 30,
    slidesPerView: 1,
    autoHeight: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // mobile + tablet - 320-990
        768: {
          slidesPerView: 4
        }
      }
});
const swiper_default = new Swiper('.swiper_default', {
    // Optional parameters
    autoHeight: true,
    spaceBetween: 20,
    slidesPerView: 1,
    autoHeight: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // mobile + tablet - 320-990
        768: {
          slidesPerView: 4
        }
      }

});



Fancybox.bind("[data-fancybox]", { Thumbs: false });


if (document.querySelectorAll(".slider_selector_main_box.individual_slider").length) {
    document.querySelectorAll(".slider_selector_main_box.individual_slider .selector_cell").forEach((tab) => {
        tab.addEventListener("click", () => {
            document
                .querySelector(".slider_selector_main_box.individual_slider .selector_cell.active")
                .classList.remove("active");
            tab.classList.add("active");

            document.querySelector(".swiper_with_tabs.individual_slider.active").classList.remove("active");
            document
                .querySelector(`[data-choose-block="${tab.dataset.toggle}"]`)
                .classList.add("active");
        });
    });

}

if (document.querySelectorAll(".slider_selector_main_box.reviews_slider").length) {
    document.querySelectorAll(".slider_selector_main_box.reviews_slider .selector_cell").forEach((tab) => {
        tab.addEventListener("click", () => {
            document
                .querySelector(".slider_selector_main_box.reviews_slider .selector_cell.active")
                .classList.remove("active");
            tab.classList.add("active");

            document.querySelector(".swiper_with_tabs.reviews_slider.active").classList.remove("active");
            document
                .querySelector(`[data-choose-block="${tab.dataset.toggle}"]`)
                .classList.add("active");
        });
    });
}

if (document.querySelectorAll(".slider_selector_main_box.certificates_slider").length) {
    document.querySelectorAll(".slider_selector_main_box.certificates_slider .selector_cell").forEach((tab) => {
        tab.addEventListener("click", () => {
            document
                .querySelector(".slider_selector_main_box.certificates_slider .selector_cell.active")
                .classList.remove("active");
            tab.classList.add("active");

            document.querySelector(".swiper_with_tabs_four.certificates_slider.active").classList.remove("active");
            document
                .querySelector(`[data-choose-block="${tab.dataset.toggle}"]`)
                .classList.add("active");
        });
    });
}

// swipers

// burger menu

if (document.querySelector('.burger_box')) {
    const iconOpen = document.querySelector('.burger_box');
    const iconClose = document.querySelector('.close-btn');
    const menu = document.querySelector('.header_menu_bg');

    iconOpen.addEventListener('click', function (e) {
        document.documentElement.classList.add('lock');
        menu.classList.toggle('open');
    });
    iconClose.addEventListener('click', function (e) {
        document.documentElement.classList.remove('lock');
        menu.classList.toggle('open');
    });
}
// burger menu


// filter menu

if (document.querySelector('.filter_open_btn')) {
    const iconOpen = document.querySelector('.filter_open_btn');
    const iconClose = document.querySelector('.filter_close-btn');
    const menu = document.querySelector('.filter_bg');

    iconOpen.addEventListener('click', function (e) {
        document.documentElement.classList.add('lock');
        menu.classList.toggle('open');
    });
    iconClose.addEventListener('click', function (e) {
        document.documentElement.classList.remove('lock');
        menu.classList.toggle('open');
    });
}
// filter menu




// инициализация яндекс карт
let marker = [54.826862, 56.090115];

if ($(window).width() < 640) {
    var center = [54.826862, 56.090115];
} else {
    var center = [54.826862, 56.060115];
}

if (document.getElementById("yamap")) {
    function init() {
        let map = new ymaps.Map('yamap', {
            center: center,
            zoom: 13
        });
    
        let placemark = new ymaps.Placemark(marker, {}, {
            iconColor: '#DF4343'
        });
    
        map.controls.remove('geolocationControl');
        map.controls.remove('searchControl');
        map.controls.remove('trafficControl');
        map.controls.remove('typeSelector');
        map.controls.remove('fullscreenControl');
        map.controls.remove('zoomControl');
        map.controls.remove('rulerControl');
        map.geoObjects.add(placemark);
    
    }
    
    ymaps.ready(init);
}

// инициализация яндекс карт



$('[data-remodal-target]').click(function () {
    $('.callback_small_h2').text($(this).attr('data-remodal-header'));
});

$(document).ready(function() {
	$('.acordion_header').on('click', function() {
        if($(this).hasClass('closed')){
            $(this).next().removeClass('closed');
            $(this).removeClass('closed');
        } else{
            $(this).next().addClass('closed');
            $(this).addClass('closed');
        }
        
	});
});