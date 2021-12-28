var n = prompt("Enter a number");
n = parseInt(n);
{
  for (i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      break;
    }
  }
  if (n == 1) {
    console.log("Neither prime nor composit");
  } else if (i > n / 2) {
    console.log("Prime Number");
  } else {
    console.log("Composit number");
  }
}
