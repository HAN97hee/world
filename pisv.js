var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});



//생활실천 서브페이지 모바일 
//pisv2 slide
var pi2 = 0;

function pi2auto(){
    pi2++;
    if(pi2 >= 3) {pi2 = 0;}
    if(bw < 800){
        $(".pisv2ul li").animate({"left":-33.4 * pi2 + "%"},500);
    };
};

setInterval("pi2auto()",5000);



//pisv4 slide
 
var pi4 = 0;
function pi4auto(){
    pi4++;
    if(pi4 >= 4) {pi4 = 0;}
    if(bw < 800){
        $(".pi4slide li").animate({"left":-23.5 * pi4 + "%"},500);
        
    }
    $(".pisv4btn li").eq(pi4).addClass("select").siblings().removeClass();
    
};

setInterval("pi4auto()",5500);




$(".pisv4btn li").click(function(){
    pi4 = $(this).index();

    $(".pi4slide li").animate({"left":-23.5 * pi4 + "%"},500);
    $(this).addClass("select").siblings().removeClass();
})
















//pisv 스크롤바 앵커 클릭시 해당 섹션으로  넘어가게해주는 코드
$(".scrolbar a").click(function(){
    var sca = ($(this).index() + 1) * 2;
    var top1 = $("#pisv" + sca).offset().top;

    $("html").animate({scrollTop:top1},500);

    return false;
})








