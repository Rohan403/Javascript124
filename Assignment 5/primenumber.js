//Input a number and check if it is a prime number or not.
var p = prompt("Enter a number");
p = parseInt(p);
var prime = true;
if(p == 1){
    console.log("Neither a prime or composite number");
}
else if(p > 1){
for (i = 2; i < p; i++) {
  if (p % i == 0) {
    prime = false;
    break;
  } 
}
   if(prime){
       console.log("Is a prime number");
   }else{
       console.log("Is a non-prime number");
   }
}

/*
// take input from the user
const number = parseInt(prompt("Enter a positive number: "));
var isPrime = true;

// check if number is equal to 1
if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
*/