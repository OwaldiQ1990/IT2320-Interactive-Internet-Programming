//setInterval is going to trigger a function call at a specified interval
//clearInterval is going to stop the trigger set by setInterval

window.onload = function(){
    //write code that manipulates DOM
    //setTimeout()

     //document.createElement
    var para = $("<div></div>").text("div");
    var para1 = $("<div></div>").text("div");
    var para2 = $("<div></div>").text("div");
    var para3 = $("<div></div>").text("div");
    
    //document.appendChild()
    $("#header").after(para);//appending an element
    $("#header").after(para1);//appending an element
    $("#header").after(para2);//appending an element
    $("#header").after(para3);//appending an element

    var x = setInterval(setStyle, 1000);

    document.getElementById("clear").addEventListener("click",function(){
        clearInterval(x);
    });

    setTimeout(setColor,5000);

    
}



function setStyle()
{
    //demo for setInterval - toggle header color every x seconds
    var header = document.getElementById("1");
    header.style.backgroundColor = "black";
    header.innerHTML = "1" 

    var header = document.getElementById("2");
    header.style.backgroundColor = "white";
    header.innerHTML = "2" 

    var header2 = document.getElementById("3");
    header2.style.backgroundColor = "black";
    header2.innerHTML = "3" 

    var header2 = document.getElementById("4");
    header2.style.backgroundColor = "white";
    header2.innerHTML = "4" 

    var buttonNext = document.getElementById("chgColor");

    buttonNext.addEventListener("click", function(){
    if (header.style.backgroundColor == "black")
       header.style.backgroundColor = "lightgreen";
    else
        header.style.backgroundColor = "black";

    if (header2.style.backgroundColor == "black")
       header2.style.backgroundColor = "lightgreen";
    else
        header2.style.backgroundColor = "black";
});

   

}

function setColor()
{
    //demo for setTimeout - set header color to red
    document.getElementById("header").style.color = "red";
}