//Input three numbers using array and find the minimum of three numbers.
var a = [];
var i = prompt("Enter the first number");
    i = parseInt(i);
    a.push(i);
    i= prompt("Enter the second number");
    i = parseInt(i);
    a.push(i);
    i = prompt("Enter the third number");
    a.push(i);
    if(a[0] < a[1] && a[0] < a[2]){
        alert("Minimum number is"+a[0]);
    }
    else if(a[1] < a[0] && a[1] < a[2]){
        alert("Minimum number is:"+a[1]);
    }
    else{
        alert("Minimum number is:"+a[2]);
    }