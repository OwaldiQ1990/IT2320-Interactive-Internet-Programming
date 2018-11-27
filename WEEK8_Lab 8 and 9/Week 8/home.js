
$(function(){
    //$("#wrapperSection1") will be used as a frame of reference
    //

    //parent()
    $("#btn1").on("click",function(){
        reset();
        console.log($("#wrapperSection1").parent().attr("id"));
        $("#wrapperSection1").parent().css({"color": "pink"});
    });
    //parents()
    $("#btn5").on("click",function(){
        reset();
        $("#wrapperSection1").parents("#content").css({"color": "orange"});
    });

    //siblings()
    $("#btn2").on("click",function(){ 
        reset();       
        $("#wrapperSection1").siblings().css({"color": "red"});

    });
    //children()
    $("#btn3").on("click",function(){
        reset();
        $("#wrapperSection1").children().css({"color": "cyan"});
    });
    //find()
    $("#btn4").on("click",function(){
        reset();
        $("#wrapperSection1").find('*').css({"color": "green"});
    });
  
    //Additional Sibling methods 
    //next
    $("#btn6").on("click",function(){
        reset();
        $("#wrapperSection1").next().css({"color": "green"});
    });
    //nextAll
    $("#btn7").on("click",function(){
        reset();
        $("#wrapperSection1").nextAll().css({"color": "green"});
    });
    //nextUntil
    $("#btn8").on("click",function(){
        reset();
        $("#wrapperSection1").nextUntil().css({"color": "green"});
    });
    //closest
    $("#btn9").on("click",function(){
        reset();
        $("#wrapperSection1").closest().css({"color": "green"});
    });

    //prev
    $("#btn10").on("click",function(){
        reset();
        $("#wrapperSection1").prev().css({"color": "green"});
    });
    //prevAll
    $("#btn11").on("click",function(){
        reset();
        $("#wrapperSection1").prevAll().css({"color": "green"});
    });
    //prevUntil
    $("#btn12").on("click",function(){
        reset();
        $("#wrapperSection1").prevUntil().css({"color": "green"});
    });

    //first
    $("#btn13").on("click",function(){
        reset();
        $("#wrapperSection1").first().css({"color": "green"});
    });
    //last
    $("#btn14").on("click",function(){
        reset();
        $("#wrapperSection1").last().css({"color": "green"});
    });
    //filter
    $("#btn15").on("click",function(){
        reset();
        $("#wrapperSection1").filter().css({"color": "green"});
    });
    //not
    $("#btn16").on("click",function(){
        reset();
        $("#wrapperSection1").not().css({"color": "green"});
    });

    //slice
    $("#btn17").on("click",function(){
        reset();
        $("#wrapperSection1").slice().css({"color": "green"});
    });

})

function reset(){
    $("#wrapperSection1").parent().css("color","black");
    $("#wrapperSection1").siblings().css("color","black");
    $("#wrapperSection1").children().css("color","black");
    $("#wrapperSection1").find("*").css("color","black");
}