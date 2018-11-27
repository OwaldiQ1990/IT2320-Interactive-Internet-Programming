
$(function(){
 //$("#wrapperSection1") will be used as a frame of reference
 //parent()
//parents()
//find()

//siblings()

//children()
    $("#btn1").on("click",function(){
        console.log($("#wrapperSection1").parent().attr("id"));
        $("#wrapperSection1").parent().css({"color": "pink"});
    });

    $("#btn2").on("click",function(){        
        $("#wrapperSection1").siblings().css({"color": "red"});
    });
    $("#btn3").on("click",function(){
        $("#wrapperSection1").children().css({"color": "cyan"});
    });
    $("#btn4").on("click",function(){
        $("#wrapperSection1").find('*').css({"color": "green"});
    });
    $("#btn5").on("click",function(){
        $("#wrapperSection1").parents("#content").css({"color": "orange"});
    });
  
//Additional Sibling methods 
//next
//nextAll
//nextUntil
//closest

//prev
//prevAll
//prevUntil

//first
//last
//filter
//not

//slice

})

function reset()
{
    $("#wrapperSection").parent().css("color","black");
    $("#wrapperSection").siblings().css("color","black");
    $("#wrapperSection").children().css("color","black");
    $("#wrapperSection").find("*").css("color","black");
}