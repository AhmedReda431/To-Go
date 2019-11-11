$(function(){
    $("header .header-holder .program button").click(function(){
        $(this).css({color:'#000',border:'none',outline: 'none'}).addClass("go").nextAll().removeClass("go").css({color:'#fff'})
        $(this).prevAll().css({color:'#fff',border:'none',outline: 'none'}).removeClass("go").addClass("not")
    })
    $(".test .test-holder .myMedia ul li").click(function(){
        $(this).toggleClass("rated").prevAll().addClass("rated")
        $(this).nextAll().removeClass("rated")
    })
    $(".test .test-holder .clients .myCarousel ul li,.blog .blog-holder .myCarousel ul li").click(function(){
        $(this).addClass("active").nextAll().removeClass("active")
        $(this).prevAll().removeClass("active")
    })
})