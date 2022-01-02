var p = prompt("Enter a number:");
    p = parseInt(p);
    count = 0;
    if(p == 1){
        console.log("It is neither a prime nor a composite number");
    }
    else if(p == 2){
       console.log(" Prime number.")
    }
    else if(p >= 2){
        for(i = 2 ; i <= p/2 ; i++){
            if(p % i == 0){
                console.log("Composit Number");
            }
            else{
                console.log("Prime Number");
            }
        }
    }
    