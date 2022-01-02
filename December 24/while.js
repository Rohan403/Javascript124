//While iteration
/*
 var i=0;
while(i < 10){
    i++;
    //console.log(i)
 
   */
var n = prompt("Enter a number:");
    n = parseInt(n);
var a = 0
var b = 1
var i = 0;
{
    while(i <= n){
        var c = a+b;
        
     
     a = b;
     b = c;
     console.log(c);
     i++;

     }
     console.log("Hence the last number upto n is:"+c);
}



/*
var n=prompt("enter a no");
var a=0;
var b=1;

//console.log(a);
//console.log(b);
for(var i=0; i<=n; i++ ){
var c= a+b
a=b
b=c
console.log(c)
}
/*

//Do while loops
var a = 10;
var b = 0;
do{
    console.log(b);
    b++;
}while(b < 10 )
*/