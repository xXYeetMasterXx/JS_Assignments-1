function computeFactorialOfN(n) {
  // your code here
 var h = 1;
 for(i=1;i<=n;i++) {
 	h = i * h;
 }
 return h;
}

var output = computeFactorialOfN(3);
console.log(output); // --> 6


var output = computeFactorialOfN(4);
console.log(output); // --> 24
