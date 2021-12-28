//Write a program to print the summation of two numbers using an input function.
/*
var a = prompt("Enter first number");
var b = prompt("Enter second number");
s = a + b;
alert(s);
*/
/*
In the above case we get the output as a string. Suppose we took a as 5 and b as 2 so
 we will get the output as 52 because prompt keyword will take the input as string so
 inorder to solve this we have to use parseInt() function which will convert the string 
 value to an integer value.
 */
var a = prompt("Enter first number:");
    a = parseInt(a);
var b = prompt("Enter second number");
    b = parseInt(b);

    s = a + b;
    alert(s);
    console.log(s);
    console.log(typeof s);
