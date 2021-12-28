var n = prompt("Enter a number");
    n = parseInt(n);
    for(i = 2; i<= n ; i++){
        var count = 0;
        for(j=1; j<=i ; j++){
            if(i%j == 0){
                count++;
                
            }
            else(i%j !=0){
                console.log("Prime Number");
            }
        }
        
    }