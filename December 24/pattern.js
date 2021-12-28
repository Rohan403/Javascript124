var n = prompt("Enter a number:");
n = parseInt(n);
var output = "";
for (j = 0; j < n; j++) {
  var line = "";
  for (var i = 0; i < n; i++) {
    line = line + "*";
  }
  output = output + line;
  output = output + "\n";
}
console.log(output);