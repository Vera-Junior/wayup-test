$(function () {
    $(window).scroll(function () {
        $('#advantage .title').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInDown");
            }
        });  
    });
});


$(function () {
    $(window).scroll(function () {
        $('.item_time').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInLeft");
            }
        });  
    });
});

$(function () {
    $(window).scroll(function () {
        $('.item_travel').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInUp");
            }
        });  
    });
});

$(function () {
    $(window).scroll(function () {
        $('.item_live').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("slideInRight");
            }
        });  
    });
});
    

$(function () {
    $(window).scroll(function () {
        $('.form').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("zoomIn");
            }
        });  
    });
});

$(function () {
    $(window).scroll(function () {
        $('#block__form .title').each(function(){
            var imagePos = $(this).offset().top;
    
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("zoomIn");
            }
        });  
    });
});