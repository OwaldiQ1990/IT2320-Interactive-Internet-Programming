/*
Assignment #2
1. Create an array of 10 cars using JSON.
2. Display array of cars one by one (
    -create the html element to display the car properties dynamically using javascript
3. Provide a "Next" button to show the next car
4. If you are on the last car, show a message "No more cars to show"
*/

var addSum = document.getElementById("add-sum");
var buttonNext = document.getElementById("button-Next");
var jasonCar, i, x = "";

jsonCar = {
                "year": 2018,
                "make": "Toyota",
                "cars": ["Corolla","Tacoma","4runner","Avalon","Camary",
                        "Highlander","Prius","86","Rav4","Tundra"]
            
};

addSum.innerHTML = "Car No.1 is: " + jsonCar.cars[0];

for (i = 0; i < jsonCar.cars.length; i++) {
    x += jsonCar.cars[i]+ "<br>";
    //addSum.innerHTML = "Car No." + [jsonCar.cars.length]+ " is: " + jsonCar.cars[i];
    //addSum.innerHTML = x;
}

i = 1;
buttonNext.addEventListener("click", function(){
    if(i < 10){
        addSum.innerHTML = "Car No." + [i+1]+ " is: " + jsonCar.cars[i];
        i++;
    }else{
        addSum.innerHTML = "No more cars to show!";
    }
});


