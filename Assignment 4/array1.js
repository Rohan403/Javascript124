//Write a program using array to input numbers in int and use push operation.

var arr =[];
var i = prompt("Enter first number");
 i = parseInt(i);
 arr.push(i);
 i = prompt("Enter the second number:");
 arr.push(i);
 i= prompt("Enter the third number:");
 arr.push(i);
 if(arr[0]>arr[1] && arr[0]>arr[2])
	{
	alert("Maximum Number is: " +arr[0]);
	}
	else if(arr[1]>arr[0] && arr[1]>arr[2])
	{
	alert("Maximum Number is: " +arr[1]);
	}
	else
	{
	alert("Maximum Number is: " +arr[2]);
	}
