
$(function(){

//jQuery code goes here
    $("#btn1").on("click", function(){
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?&format=json&jsoncallback=?&tags="
                    +$("#photosearch").val();   
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){
              console.log(data);  

              $.each(data.items, function(i, item){                
                var img = $("<img></img>");
                img.attr("src",item.media.m);
                $("#flikrresults").append(img);
              });              
           }
         });
    });


    
    $("#btn2").on("click", function(){
        //Go to https://www.petfinder.com/developers/api-key to get an api key
        //PetFinder API Key 551b527add03634ac3a95a7a967367e6
        //PetFinder API Secret 6a5a2731d31fb44b2d2303c7686c5278
        
        const key = "175dbeaded0d3090a961e0b364c47586";           
        var url = "http://api.petfinder.com/breed.list?format=json&key="+key+"&callback=?&animal="+$("#breedsearch").val()+"&format=json";
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){              
              console.log(data);

              $("ul").remove();
              var ul = $("<ul>Breeds</ul>");
              $("#breedresults").after(ul);
              
              $.each(data.petfinder.breeds.breed,function(i,breed){                  
                    var li = $("<li></li>").text(breed.$t);
                    $("ul").append(li);
              });                      
            }                    
         });//ajax
    });//btn click   

    $("#btn3").on("click", function(){

      // http://api.petfinder.com/pet.find?callback=?&format=json&key=551b527add03634ac3a95a7a967367e6& 

      //location=Ohio&size=S&sex=F&breed=Australian%20Shepherd&animal=dog&_=1541004833654


        const key = "175dbeaded0d3090a961e0b364c47586";           
        //var url = "http://api.petfinder.com/pet.find?callback=?&format=json&key="+key+"&location="+$("#breedsearch").val()+"Ohio&size=S&sex=F&breed=Australian%20Shepherd&animal=dog&_=1541004833654.val()+"&format=json";
       var url = "http://api.petfinder.com/breed.list?format=json&key="+key+"&callback=?&animal="+$("#breedsearch2").val()+"&format=json";
       $.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){              
              console.log(data);
              $("ul").remove();
              var ul = $("<ul>Breeds</ul>");
              $("#breedresults2").after(ul);
              
              $.each(data.petfinder.breeds.breed,function(i,breed){                  
                    var li = $("<li></li>").text(breed.$t);
                    $("ul").append(li);
              });                      
            }                    
         });//ajax
    });//btn click
    
})