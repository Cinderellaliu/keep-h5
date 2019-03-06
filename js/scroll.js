$(function(){function getAngle(angx,angy){return Math.atan2(angy,angx)*180/Math.PI}$("body").on("touchstart",function(e){if(e.cancelable){if(!e.defaultPrevented){e.preventDefault()}}startX=e.originalEvent.changedTouches[0].pageX,startY=e.originalEvent.changedTouches[0].pageY});$("body").on("touchend",function(e){if(e.cancelable){if(!e.defaultPrevented){e.preventDefault()}}moveEndX=e.originalEvent.changedTouches[0].pageX,moveEndY=e.originalEvent.changedTouches[0].pageY,X=moveEndX-startX,Y=moveEndY-startY;var angle=getAngle(X,Y);if((angle>=-135&&angle<=-45)||angle>45&&angle<135){if($(".bottom-invite-full").is((":hidden"))){$(".invite-week-fix").show();$(".invite-week").hide();$(".invite-time").removeClass("fixed");$(".invite-table").removeClass("auto")}else{$(".invite-week-fix").hide()}}else{if(((angle>=135&&angle<=180)||(angle>=-180&&angle<-135))||(angle>=-45&&angle<=45)){$(".invite-week-fix").hide();if($(".bottom-invite-full").is((":hidden"))){$(".invite-time").addClass("fixed");$(".invite-table").addClass("auto");$(".invite-week").show()}else{$(".invite-week").hide();$(".invite-time").removeClass("fixed");$(".invite-table").removeClass("auto")}}}})});

$(function(){

    $('.invite-week-fix li').map(function(index,node){
        if($(node).hasClass('active')){
            $('.bottom-full-data ul').find('li').eq(index).addClass('active')
            $('.invite-week-tody ul').find('li').eq(index).addClass('active') 
        }
    })

    $('.top-invite .small').on('touchend',function(e){
        $('.top-invite').hide();
        $('.bottom-section').hide();
        $('.invite-month').hide();
        $('.invite-time,.invite').css('margin','0')
        $('.invite').css('margin-bottom','2rem')
        $(".invite-time").removeClass("fixed");
        $('.bottom-invite-full').show();

    }) 
    $('.bottom-invite-full .big').on('touchend',function(e){
        $('.top-invite').show();
        $('.bottom-section').show();
        $('.invite-month').show();
        $('.invite').css('margin-bottom','4rem')
        $('.invite').css('margin-top','3.4rem')
        $(".invite-time").addClass("fixed");
        $('.bottom-invite-full').hide();
        $('.invite-week-fix').show()
    })
    $('.news,.invite-right span').on('touchstart',function(){
        $('.invite-news').show();
    });
    $('.close').on('touchstart',function(){
        $('.invite-news').hide()
    })

}) 


