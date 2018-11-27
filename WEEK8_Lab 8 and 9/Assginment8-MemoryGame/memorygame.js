
var colorArray = ["red","blue","green","yellow","orange","purple","black","pink","red","blue","green","yellow","orange","purple","black","pink"];
    
    // Use this to rewrite the text on the html file.
    //$('#status').text("Hello");
    $cell = $('.cell')

//Uncomment this code if you are using jQuery
$(function(){
  
    //All DOM code goes here
    
    //All functions will get called from here   

    //Our goal is to do a set of steps when a cell is clicked
    //For this first, assign "cellClick" to the click event for all divs that have class as "cell" 

    //Shuffel all the cards
    let allCards = shuffle(colorArray);
    //console.log(allCards);

    for( i =0; i<allCards.length;i++){
        $cell.siblings("#"+[i]+".cell").append($('<li class="card"><i class="' + allCards[i] + '"></i></li>'));
    }

    // The game starts with no matching cards and zero moves 
    //$cell.siblings("#15.cell").append($('<li class="card"><i class="' + allCards[0] + '"></i></li>'));
    //console.log($cell.siblings("#15.cell"));
    

    // A for loop creates 16  <li> tags with the class of card for every <i> tag
    // A class of fa fa- and a name of each object from the objects=[] array
    
    // This gets the cell to get the background on gray
    $cell.siblings().css({"background-color": "gray"});

    //console.log($(".cell").siblings());
    //console.log($(".cell").find('.open'));

    // when the cell is clicked the color of the cell changes to red for example
    $cell.on('click', function () {
        let $this = $(this);
        //let $color = $this.find("li.card").find("i").context.innerHTML;
        //console.log($color);
        $this.css({"background-color": "red"});
        
    });

});



function cellClick(cell){    
    //Goal is to find if the 2 clicked cells are of the same color.    
    
    /*Inside the parameter we are receiving the cell object "cell" that was clicked
    1. So for all cell manipulation, use the cell object.
    
    2. First let us assign a background color to the cell from the colorArray
    For example, if cell 0 is clicked assign colorArray[0] as the background color 
    to the cell

    //Stop and test change #1


    /*We need to know if the cell that is clicked is the first cell or the second cell.
    4. So let us add a counter and increment this counter
    write the counter value to console.log. test it.

    5. Use the counter to see if this is the first cell that was clicked
    write "first cell clicked" to console.log. test it.

    6. Use the counter to see if this is the second cell that was clicked
    write "second cell clicked to console.log". test it.*/
    
    //Stop and test change #2


    /* 
    7. If the first cell clicked(use counter to find this), let us save the first cell to a variable called firstCell.
    
    8. if second cell is clicked(use counter to find this), we need to see if the color of the second cell matches the background color of firstCell.
    
    9. If the colors match, there is a winner.
    write "winner" to console.log

    10. If the colors don't match, there is no winner.
    write "no winner" to console.log
    */

    //Stop and test change #3
    
    /*If there is a winner, then 
    11. Let us set the innerHtml of the div with id="status" to "You win"=>Call a function called setMessage(msg)
    12. Let us shuffle the color array => Call a function called shuffle(colorArray)
    13. Let us reset the board => Call a function called resetBoard()
     */

    //Stop and test the change #4

    /*If there is no winner, then    
    15.Let us set the innerHTML of the div with id="status" to "Try again!"=>Call a function called setMessage(msg)
    16.Don't shuffle the color array otherwise the colors will change everytime and no one can win
    17.Let us reset the board so that all cells look the same => Call a function called resetBoard()
    */

     //Stop and test the change #5

}

function resetboard(){   
   //Goal is to get all divs on the board with class "cell" and set their background color to ""
}

function setMessage(msg){
    //Goal is to get the div with id = "status" and set its innerHTML to the input parameter msg

}

// Shuffling function: enables that no two games have the same card arrangement 
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
