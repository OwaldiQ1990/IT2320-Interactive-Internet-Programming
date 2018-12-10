



$(function(){
    $("#btn3").on("click", function(){
       
      const key = "175dbeaded0d3090a961e0b364c47586"; //key ///
      var animal= $("#animalsearch").val();
      var breed = $("#breedsearch").val();
      var size= $("#sizesearch").val();
      var sex= $("#sexsearch").val();
      var location= $("#locationsearch").val();
 
        var url = "https://api.petfinder.com/pet.find?&format=json&key="+key+"&callback=?&animal="+animal+"&breed="+breed+"&size+"+size+"&sex="+sex+"&location="+location;
       
$.ajax({
           url: url,           
           type: "GET", 
           dataType: "jsonp",   //needed for CORS       
           contentType: "application/json; charset=utf-8",
           crossDomain: true,                   
           success: function(data){
              console.log(data);
              $("ul").remove();  
              
var ul = $("<ul>Animal:</ul>");
         $("#results2").after(ul);

              $.each(data.petfinder.pets.pet,function(i,item)
              {
              var li = $("<p></p>").text(item.animal.$t);
                $("ul").append(li);
                var li = $("<p></p>").text(item.id.$t); 
                  $("ul").append(li);
                  var li = $("<p></p>").text(item.description.$t);
               $("ul").append(li);
               var li = $("<p></p>").text(item.name.$t);
              $("ul").append(li);

          
              }
             );              
           }
         });
    });
  });

    
   