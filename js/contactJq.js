$(function(){
    var navPos = $(".header").offset().top;
    // console.log(navPos);

    $(window).scroll(function(){

        if($(window).scrollTop() > navPos){

            $('.header').css('position','fixed');
            if(window.matchMedia( "(min-width: 768px)" ).matches){
                $(".top").css('margin-top','80px');
            } else {
                $(".top").css('margin-top','56px');
            }
        }else {
            $('.header').css('position','static');
            $(".top").css('margin-top','0');
        }

    });
});
