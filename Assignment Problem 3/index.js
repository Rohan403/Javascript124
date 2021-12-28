var a = prompt("Input a number");
var b = prompt("Input second number");
var c = prompt("Input the third number");
if(a<=b && a<=c){
    alert("The smallest number is: "+a);
}
else if(b<=a && b<=c){
    alert("The smallest number is: "+b);
}
else{
    alert("The smallet number is: "+c)
}