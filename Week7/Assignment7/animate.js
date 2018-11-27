$(function(){
	//btn-Up
    $("#btn-Up").on("click",function(){       
        
        $("#box").animate({
            top: "115px"
        },2000);

    });

	//btn-Down
    $("#btn-Down").on("click",function(){       
        
        $("#box").animate({
            top: "465px"
        },2000);

    });

	//btn-Left
    $("#btn-Left").on("click",function(){       
        
        $("#box").animate({
            left: "18px"
        },2000);

    });

	//btn-Right
    $("#btn-Right").on("click",function(){       
        
        $("#box").animate({
            left: "368px"
        },2000);

    });

	//btn-fadeOut
    $("#btn-fadeOut").on("click",function(){       
        
        $("#box").animate({
            opacity: 0.0,     
        },500);

    });   

    //btn-fadeIn
    $("#btn-fadeIn").on("click",function(){       

        $("#box").animate({
            opacity: 1.0,    
        },500);
    }); 

    //btn-Blink
    $("#btn-Blink").on("click",function(){       
        
        $("#box").animate({
            opacity: 0.0,      
        },200);

        $("#box").animate({
            opacity: 1.0,      
        },200);
    }); 

    $("#btn-Reset").on("click",function(){
        $("#box").animate({
            top: "115px",
            left: "18px",
            opacity: 1.0
        },0);     
    }); 


});