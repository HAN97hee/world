var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});


var m1s = 0;
function auto (){
    m1s++;
    if(m1s >= 2) {m1s = 0}
    if(bw >= 800){
     $(".m1slide").animate({"left":-1920 + m1s},500,function(){
         $(this).append($(".m1slide li:first-child")).css({"left":"0"});
     })
     $(".page li").eq(m1s).addClass("select").siblings().removeClass();
    }
     else{
        $(".m1slide").animate({"left":-375 + m1s},500,function(){
            $(this).append($(".m1slide li:first-child")).css({"left":"0"});
        })
        $(".page li").eq(m1s).addClass("select").siblings().removeClass();
     }
 };

//페이지버튼은 눈속임으로 한개더 만들어 돌리는형식으로 또 만들어야함
 $(".page li").click(function(){
    m1s = $(this).index();
    if(bw >= 800){
        $(".m1slide").animate({"left":-1920 * m1s},500)
    }
    else{
        $(".m1slide").animate({"left":-375 * m1s},500)
    };
    $(".page li").eq(m1s).addClass("select").siblings().removeClass();
});




 var timer = setInterval("auto()",5000);



 $(".slidebox").hover(
    function(){
        if (bw>800) {
            clearInterval(timer)
            }
     },
     function(){
        if (bw>800) {
         timer = setInterval("auto()",5000)
        }
     }
 );






 $(".next").click(function(){
    if(bw >= 800){
     $(".m1slide").animate({"left":"-1920px"},500,function(){
         $(this).append($(".m1slide li:first-child")).css({"left":"0"});
     });
    
    };
    
 });


 $(".prev").click(function(){
    if(bw >= 800){
     $(".m1slide").css({"left":"-1920px"},500).prepend($(".m1slide li:last-child")).animate({"left":"0"},500)};
     
});







