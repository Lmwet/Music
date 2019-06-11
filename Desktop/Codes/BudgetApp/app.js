

//just make a rectangle here

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillRect(0, 0, 150, 100);



//get the number into Endsum and substract the number into price' from it

var Sum = document.getElementById('EndSum');
var Price = document.getElementById('price');
var presssubmit = document.getElementById('submit');


presssubmit.addEventListener('click',SubstractNew);

function SubstractNew (){
    var ItemName = document.getElementById('whatUbought').value;
    var result = Sum.innerHTML - Price.value;
    console.log(result);
    document.getElementById("EndSum").innerHTML = result; 

    var h = document.createElement("H1")                // Create a <h1> element
    var t = document.createTextNode("You bought " + ItemName + " for  " + Price.value + " Euros ")     // Create a text node
    h.appendChild(t);                         // Append the text to <h1> 


    var Div = document.getElementById("addItem");
    Div.appendChild(t);

    linebreak = document.createElement("br");
    Div.appendChild(linebreak);

};
// storage the value in EndSum in a variable
//draw a rectangle

var rect = document.getElementById("pinkRect");
var ctxRect = rect.getContext("2d");
ctxRect.fillRect(150, 100, 100, 80);



// set the variable as length of a rectangle and actualiize it every time the value of endsum changes


