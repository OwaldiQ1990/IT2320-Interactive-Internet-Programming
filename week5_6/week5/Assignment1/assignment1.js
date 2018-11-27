/*
Assignment #1

Create a Car object with

year
make
model
vin number
number of doors
color
engine type

1. Make this into a javascript object and display properties in console
2. Create this as a json object and display properties in console
3. Convert JSON to JSON string and write it to console
4. Convert JSON string to Object. display its properties in console
5. Update color property. display in console.
6. Convert Object to JSON string and display in console
*/

//DOM cannot be accessed when the window has not yet loaded
window.onload = function(){
    document.getElementById("main").innerHTML = "Newcontent";
   
    //Call the function JSObject()
    //This is to call the javaScript object
    JSObject();

    //Call the function JSONObject()
    // This is to call the JS object
    JSONObject();
}

// 1. Make this into a javascript object and display properties in console
function JSObject()
{
    var Car = {     year: 2018,
                    make: "Toyota",
                    model: "Supra",
                    vinNumeber: 123123123123,
                    doorNumber: 2,
                    color: "Red",
                    engineType: "V8 gas"
    };
    //Display properties in console
    console.log(Car);
}

//2. Create this as a json object and display properties in console
function JSONObject()
{
        var jsonCar = {  
            "year": 2018,
            "make": "Toyota",
            "model": "Supra",
            "vinNumeber": 123123123123,
            "doorNumber": 2,
            "color": "Red",
            "engineType": "V8 gas"
    };

    //Display properties in console
    console.log(jsonCar)

    //3. Convert JSON to JSON string and write it to console
    var jsonCarAsString = JSON.stringify(jsonCar);
    //Displat properties in console
    console.log(jsonCarAsString);

    //4. Convert JSON string to Object. display its properties in console
    var jsonObj = JSON.parse(jsonCarAsString);
    //Display properties in console
    console.log(jsonObj.year);
    console.log(jsonObj.make);
    console.log(jsonObj.model);
    console.log(jsonObj.vinNumeber);
    console.log(jsonObj.doorNumber);
    console.log(jsonObj.color);
    console.log(jsonObj.engineType);

    //5. Update color property. display in console.
    jsonObj.color = "Blue";
    //Display properties in console
    console.log(jsonObj.color);

    //6. Convert Object to JSON string and display in console
    var jsonCarAsString2 = JSON.stringify(jsonObj);
    //Displat properties in console
    console.log(jsonCarAsString2);
}