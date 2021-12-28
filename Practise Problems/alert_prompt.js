/*
console.log("Alert file loaded");
//METHOD 1
alert("This is popup 1");
//alert("This is popup 2");
//METHOD 2
var a = "Error 404!!!";
alert(a);
//Method 3
//BASICALLY WE USE "prompt" TO INPUT
var a = prompt();
alert(a);
var b = prompt("Enter something");
alert(b);
*/
//Write a program using prompt fuction to check if a number is positive, negative or neutral.
var a = prompt("Enter a number");
if(a > 0){
    alert("Positive Number");
}
else{
    if(a < 0){
        alert("Negative Number")
    }
    else{
        alert("Neutral ")
    }
}