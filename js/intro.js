$(document).load($(window).bind("resize", listenWidth));
    function listenWidth( e ) {
        if($(window).width()<900)
        {
            $(".m_bot_signbox").remove().insertAfter($(".m_bot_img"));
        } else {
            $(".m_bot_img").remove().insertBefore($(".m_bot_signbox"));
        }
    }