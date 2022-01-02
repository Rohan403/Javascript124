//Input a number and check if it is a prime number or not.
var n = prompt("Enter a number:");
n = parseInt(n);
var i;
for (i = 2; i <= n / 2; i++) {
  if (n % i == 0) {
    break;
  }
}
if (n == 1) {
  console.log("Neither prime nor composit");
} else if (i > n / 2) {
  console.log("It is a prime number");
} else {
  console.log("Composit Number");
}
