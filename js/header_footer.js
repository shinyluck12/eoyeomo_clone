$(document).ready(function(){
    //스크롤시 하얀색으로 변하는 메뉴
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 1) {
        $("header").css("background" , "#fff");
    }
    else{
        $("header").css("background" , "rgba( 255, 255, 255, 0.0 )");   
    }
    })


    // 아래로 펼쳐지는 분홍색 메뉴
    $(".inner_menu").hide();

    $(".m_li_1").mouseenter(function(){
        $(".im_1").show();
    });

    $(".m_li_1").mouseleave(function(){
        $(".im_1").hide();
    });
    $(".m_li_2").mouseenter(function(){
        $(".im_2").show();
    });

    $(".m_li_2").mouseleave(function(){
        $(".im_2").hide();
    });

    $(".m_li_3").mouseenter(function(){
        $(".im_3").show();
    });

    $(".m_li_3").mouseleave(function(){
        $(".im_3").hide();
    });

    $(".m_li_4").mouseenter(function(){
        $(".im_4").show();
    });

    $(".m_li_4").mouseleave(function(){
        $(".im_4").hide();
    });

    $(".m_li_5").mouseenter(function(){
        $(".im_5").show();
    });

    $(".m_li_5").mouseleave(function(){
        $(".im_5").hide();
    });

    $(".m_li_6").mouseenter(function(){
        $(".im_6").show();
    });

    $(".m_li_6").mouseleave(function(){
        $(".im_6").hide();
    });
    $(".m_li_7").mouseenter(function(){
        $(".im_7").show();
    });

    $(".m_li_7").mouseleave(function(){
        $(".im_7").hide();
    });



    $("#layout_side").hide();
    $("#side_bg").hide();

    $("#side_close").click(function(){
        $("#layout_side").hide();
        $("#side_bg").hide();
        $("#side_close").hide();
    });





});


    // aside slide
    function ham(){
        document.getElementById("layout_side").style.display = "block";
        document.getElementById("side_bg").style.display = "block";
        document.getElementById("side_close").style.display = "block";
    }
