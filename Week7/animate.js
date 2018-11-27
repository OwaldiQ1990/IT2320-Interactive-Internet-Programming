

$(function(){

    //hide & show + Toggle
    //#1 when i click on h1 i want to hide the 3 divs
    $("#1").on("click",function(){
        //$(this).siblings().hide();
        $(this).siblings().toggle(5000,function(){
          console.log("the divs are toggled");
        });
    });

    //#2 when i click on h1 i want to show all the 3 divs
    $("#2").on("click",function(){
        //$(this).siblings().show();
        $(this).siblings().toggle(4000);
    });

    
    //slideUp slideDown slideToggle
    $("#3").on("click",function(){        
        //$(this).siblings().slideUp();
        $(this).siblings().slideToggle(3000);
    });

    $("#4").on("click",function(){        
        $(this).siblings().slideDown(6000);
    });

    //fadeIn fadeOut fadeToggle
    $("#5").on("click",function(){        
        //$(this).siblings().fadeOut();
        $(this).siblings().fadeToggle(5000);
       
    });
    $("#6").on("click",function(){        
        $(this).siblings().fadeIn(5000);
       
    });


    //chaining
    $("#7").on("click",function(){        
        $(this).siblings().show(500).hide(1000).fadeIn(500).fadeOut(1000);
       
    });

    //stop
    $("#btnStop").on("click",function(){
        $("h1").siblings().stop();        
    });
    
    //animate
    $("#btn1").on("click",function(){       
        

        $("#box").animate({
            width: "100px",
            height: "100px",
            opacity: 0.75,           
            fontSize: "1.5em"
        },5000);
        
        //queueing => multiple animations on a single element
        $("#box").animate({            
            width: "500px",
            height: "500px",
            opacity: 0.90,           
            fontSize: "1em"
        },500);       

        //queueing => multiple animations on a single element
        $("#box").animate({            
            width: "100px",
            height: "100px",
            opacity: 0.70,           
            fontSize: "1.5em"
        },5000);  

        //animate with call back function
        $("#box").animate({
            left: "250px",
            top: "250px"
        },5000,function(){
            $(this).css({"background-color": "red"});
        });
       
    });    

    
      

    

});

