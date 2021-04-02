$(document).ready(function () {

    var gnbOffset = $('#header_wrap').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > gnbOffset.top) {
            $('#header_wrap').addClass('fixed');
        } else {
            $('#header_wrap').removeClass('fixed');
        }
    });

    $('.hb_menu').on('click keydown', function () {
        $(this).toggleClass('change');
    });
    $('.hb_menu').focusout(function () {
        $(this).removeClass('change');
    });
    $('#gnb, .mega_menu').on('mouseenter mouseover focusin', function () {
        $('.mega_wrap').addClass('on');
    });
    $('#gnb, .mega_menu').on('mouseleave mouseout focusout', function () {
        $('.mega_wrap').removeClass('on');
    });

    /* 메뉴 호출 */
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "assets/menu.json",
        success: function(obj){
            var arrData = obj.menus;
            megaMenu(arrData);
            siteMap(arrData);
        }
    });

    function megaMenu(arrData){
        var cnt = arrData.length;
        var mgContent = "";
        
        for(var i=0; i<6; i++){

            var d2 = arrData[i].d2;
            var d2Cnt = d2.length;
            var d2Content ="";
            for(var j=0; j<d2Cnt; j++){
                d2Content += "<li><a href=\""+d2[j].link+"\" target=\""+d2[j].target+"\">"+d2[j].name+"</a></li>" 
            }

            mgContent += "<li><div class=\"tit\">"+arrData[i].title+"</div>"
            mgContent += "<ul>"+d2Content+"</ul>"
            mgContent += "</li>"
        }
        $("#gnbMega").append(mgContent);
    }

    function siteMap(arrData){
        var cnt = arrData.length;
        var mgContent = "";
        for(var i=0; i<cnt; i++){

            var d2 = arrData[i].d2;
            var d2Cnt = d2.length;
            var d2Content ="";
            for(var j=0; j<d2Cnt; j++){
                d2Content += "<li><a href=\""+d2[j].link+"\" target=\""+d2[j].target+"\">"+d2[j].name+"</a></li>" 
            }

            mgContent += "<li><div class=\"tit\">"+arrData[i].title+"</div>"
            mgContent += "<ul>"+d2Content+"</ul>"
            mgContent += "</li>"
        }
        $("#siteMap").append(mgContent);
    }

    /* 사이트맵 */
    $('.hb_menu').on('click keydown', function () {
        $('.menu_site').show();
        $('body').addClass('shadow');
        $('.m_menu').hide();
    })
    $('.menu_site .close').click(function () {
        $('.menu_site').hide();
        $('body').removeClass('shadow')
    })

    /* 사이트맵 > 전체메뉴 글자변경 */
    if ($(window).width() < 768) {
        $('.mb_ms.menu_site .ms_top h2').text('전체메뉴')
    }

    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('.mb_ms.menu_site .ms_top h2').text('사이트맵')
        } else {
            $('.mb_ms.menu_site .ms_top h2').text('전체메뉴')
        }
    });

    /* 팝업 스크롤 막기*/


    // 본문 스크롤 불가능
    function scrollDisable() {
        $('body').addClass('scr_hidden').on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
        });
    }

    // 본문 스크롤 가능
    function scrollAble() {
        $('body').removeClass('scr_hidden').off('scroll touchmove mousewheel');

    }

    $('.family_site').change(function () {
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
            1024: {
                slidesPerView: 3,
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 12
            },
            0: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            400: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            0: {
                slidesPerView: 1,
                spaceBetween: 0
            },
        }
    });
    $('.bnr_main_wrap .page_function .autoplay.play').click(function () {
        $('.bnr_main_wrap .page_function .autoplay').toggleClass('hide');
        bnrMain.autoplay.start();
    });
    $('.bnr_main_wrap .page_function .autoplay.stop').click(function () {
        $('.bnr_main_wrap .page_function .autoplay').toggleClass('hide');
        bnrMain.autoplay.stop();
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.recomm_wrap .condition li span').click(function () {
        $(this).parent().remove();
    });

    $('.like_btn').click(function () {
        $(this).toggleClass('on');

    });

    var recommResult = new Swiper('.condition_result', {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 18,
        navigation: {
            nextEl: '.swiper-button-next2',
            prevEl: '.swiper-button-prev2',
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
                slidesPerColumn: 2,
            },
            768: {
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
            640: {
                slidesPerView: 2,
                slidesPerColumn: 2,
            },
            320: {
                slidesPerView: 1,
                slidesPerColumn: 2,
            },
            0: {
                slidesPerView: 1,
                slidesPerColumn: 2,
            }

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

    $('.new_wbl ul li').click(function () {
        $('.new_wbl ul li').removeClass('on');
        $(this).addClass('on');
    });


    /* 서브페이지 start */
    /* 서브 메뉴 */
    $('.main_section #snb li').click(function () {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    $('.tab li').click(function () {
        $(this).addClass('on');
        $(this).siblings().removeClass('on');
    });

    var subBanner = new Swiper('.sub_banner .swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000
        },
        pagination: {
            el: '.sb-swiper-pagination',
            clickable: true,

        },
    })

    $('.sub_banner .page_function .autoplay.play').click(function () {
        $('.sub_banner .page_function .autoplay').toggleClass('hide');
        bnrMain.autoplay.start();
    });
    $('.sub_banner .page_function .autoplay.stop').click(function () {
        $('.sub_banner .page_function .autoplay').toggleClass('hide');
        bnrMain.autoplay.stop();
    });
    
 
    $('.cs_btn .view').click(function () {
        $(this).toggleClass('on');
    });
    
    $('.cs_btn .like').click(function () {
     $(this).toggleClass('on');
        if ($(this).hasClass("on")) {
            $(this).parent().parent().siblings('.like_btn').addClass('on');
        } else if (!$(this).hasClass("on")) {
            $(this).parent().parent().siblings('.like_btn').removeClass('on');
        }
    });
    
    // 하트 on 상태일때
    $('.condition_result > .like_btn').each(function(){
     if ($(this).hasClass("on")) {
            $(this).parent().find('.like').addClass('on')
        }else {
          $(this).parent().find('.like').removeClass('on')
        }
        })
    
    // 게시판 ico
    $('.info_ico button.bookmark').click(function(){
       $(this).toggleClass('on'); 
    });
    
        $('.popLayer .close').click(function() {
            $(this).parent().parent().fadeOut(300);
            $('.shadow').fadeOut(300);
             $("html, body").removeClass("not_scroll");
        });
    
  
});

