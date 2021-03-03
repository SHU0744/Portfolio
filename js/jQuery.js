
$(function () {
    $(window).scroll(function () {
        var top = $(".line").offset().top; // ターゲットの位置取得
        // console.log(top);

        var position = top + 200 - $(window).height();  // 発火させたい位置
        if ($(window).scrollTop() > position) {
            // 要素が見えたときの動き
            $('.line-hc').addClass('scroll');
            $('.line-js').addClass('scroll');
            $('.line-jq').addClass('scroll');
            $('.line-vue').addClass('scroll');
            $('.line-php').addClass('scroll');
            $('.line-git').addClass('scroll');
            $('.line-wp').addClass('scroll');

            // } else {
            //     // それ以外の動き
        }
    });
});



//header scroll
$(function () {
    var navPos = $(".header").offset().top;


    $(window).scroll(function () {

        if ($(window).scrollTop() > navPos) {

            $('.header').css('position', 'fixed');
            if (window.matchMedia("(min-width: 768px)").matches) {
                $(".top").css('margin-top', '80px');
            } else {
                $(".top").css('margin-top', '56px');
            }

        } else {
            $('.header').css('position', 'static');
            $(".top").css('margin-top', '0');
        }

    });
});


//クリックしたら要素にスクロール
$(function () {
    $(".scroll-a").click(function () {
        var target = $($(this).attr("href")).offset().top;
        target -= 50;
        $("html,body").animate({ scrollTop: target }, 500);
        return false
    });
});


//クリックしたら、トップに戻る
$(function () {
    var pagetop = $('#scrollTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            pagetop.addClass("is-fadein");
        } else {
            pagetop.removeClass("is-fadein");
        }
    });
    pagetop.on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
