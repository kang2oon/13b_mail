$(document).ready(function(){
    var gnbOffset = $('#header_wrap').offset();
    $(window).scroll(function(){
        if( $(document).scrollTop() > gnbOffset.top ){
            $('#header_wrap').addClass('fixed');
        } else {
            $('#header_wrap').removeClass('fixed');
        }
    });

    $('.hb_menu').on('click keydown', function(){
        $(this).toggleClass('change');
    });
    $('.hb_menu').focusout(function(){
        $(this).removeClass('change');
    });
    $('#gnb, .mega_menu').on('mouseenter mouseover focusin', function(){
        $('.mega_wrap').addClass('on');
    });
    $('#gnb, .mega_menu').on('mouseleave mouseout focusout', function(){
        $('.mega_wrap').removeClass('on');
    });
    $('.family_site').change(function(){
        var link = $(this).val();
        window.open(link);
    });

    $(".imgFill").imgLiquid();

    var bnrMain = new Swiper('.bnr_main', {
        slidesPerView: 3,
        spaceBetween: 12,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	    },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            510: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
    $('.bnr_main_wrap .page_function .autoplay.play').click(function(){
        $('.bnr_main_wrap .page_function .autoplay').toggleClass('hide');
        bnrMain.autoplay.start();
    });
    $('.bnr_main_wrap .page_function .autoplay.stop').click(function(){
        $('.bnr_main_wrap .page_function .autoplay').toggleClass('hide');
        bnrMain.autoplay.stop();
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.recomm_wrap .condition li span').click(function(){
        $(this).parent().remove();
    });

    $('.like_btn').click(function(){
        $(this).toggleClass('on');
    });

    var recommResult = new Swiper('.condition_result', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 18,
        navigation: {
	        nextEl: '.swiper-button-next2',
	        prevEl: '.swiper-button-prev2',
	    }
    });

    var theme = new Swiper('.theme', {
        pagination: {
            el: '.swiper-pagination2',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    $('.new_wbl ul li').click(function(){
        $('.new_wbl ul li').removeClass('on');
        $(this).addClass('on');
    });
});