//Input a number and print all the even number upto that.

var n = prompt("Enter a number");
    n = parseInt(n);
    for(i=1 ; i<=n ; i++){
        if(i % 2 == 0){
            console.log(i);
        }
    }