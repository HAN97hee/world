//pc -------------------------------------------------------

var bw = $("body").width();
$(window).resize(function(){
    bw = $("body").width();
});



// header
$(".gnb > li").on("mouseover focusin",function(){
    if(bw>800){
        $(this).children().addClass("on")
    }
});


$(".gnb > li").on("mouseleave focusout",function(){
    if(bw>800){
        $(this).children().removeClass("on")
    }
});


// main4
var m4 = 0;
function m4pcauto(){
    m4++;
    if(g >= 6) {g = 0;}

    if(bw >= 800){
    $(".m4slide").animate({"left":-401 + m4},500,function(){
        $(this).append($(".m4slide li:first-child")).css({"left":"0"});
    });
    };
};

var m4timer = setInterval("m4pcauto()",5000);

$(".m4sbox").hover(
    function(){
        clearInterval(m4timer)
    },
    function(){
        m4timer = setInterval("m4pcauto()",5000)
    }
);

$(".m4next").click(function(){
    $(".m4slide").animate({"left":"-401px"},500,function(){
        $(this).append($(".m4slide li:first-child")).css({"left":"0"});
    });
});

$(".m4prev").click(function(){
    $(".m4slide").css({"left":"-401px"}).prepend($(".m4slide li:last-child")).animate({"left":"0"},500)
});














// 모바일 ----------------------------------------------------------------------

//visual banner
$(".mgnbmenu li").click(function(){
    $(this).addClass("select").siblings().removeClass();
    
    var mn = $(this).index();
    $(".msnb ul").eq(mn).addClass("on").siblings().removeClass("on");

});



$(".burger").click(function(){
    $(".mgnb").css({"left":"0"},800)
});

$(".backbtn").click(function(){
    $(".mgnb").css({"left":"801px"},800)
});


//main2 slide
var g = 0;

function newsmob(){
    g++;
    if(g >= 5){g = 0;} 

    if(bw < 800){
    $(".allsee li").animate({"left":-86 * g + "%"},500);
    };
 };



 setInterval("newsmob()",5000)



$(".news li").click(function(){
    $(this).addClass("select").siblings().removeClass();

    var pq = $(this).index() +1;
    $("#main2 ul").eq(pq).addClass("on").siblings().removeClass("on")
});




//main4 slide
var tr = 0;

function m4auto(){
    tr++;
    if(tr >= 6) {tr = 0;}
    if(bw < 800){
        $(".m4slide li").animate({"left":-305 *tr},500);
    };
};

setInterval("m4auto()",5000);


//main6 slide
var m6 = 0;

function m6auto(){
    m6++;
    if(m6 >= 4) {m6 = 0;}
    if(bw < 800){
        $(".m6slide li").animate({"left":-325 *m6},500);
    };
};

setInterval("m6auto()",5000);







//header & pisv page scrolltop script

$(window).scroll(function(){

    var ss = $(this).scrollTop();
    //header

    if (ss > 1 ) {
        $("header").addClass("drop");
    } else {
        $("header").removeClass("drop");
    }

    if(bw >= 800) //여기에 넣어서 헤더 스크롤탑은 웹 모바일 다 적용되게끔 만들어야함 

    //pisv scrollbar
    if ( ss > 520) {
        $(".scrolbar").addClass("drop2");
    } else {
        $(".scrolbar").removeClass("drop2");
    };


    //모바일에서의 걸리는 탑값 설정
    if( bw < 800){
        if ( ss > 357) {
            $(".scrolbar").addClass("drop2");
        } else {
            $(".scrolbar").removeClass("drop2");
        }
    };
});





//클릭한 앵커에게 효과적용
$(".scrolbar a").click(function(){
    $(this).addClass("select").siblings().removeClass("select")
});