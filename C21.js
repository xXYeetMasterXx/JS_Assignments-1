function loneSum(a,b,c){
	d = a;
	e = b;
	f = c;
  if(a == b) {
  	d = 0;
  	e = 0;
  }
  if(b == c) {
  	e = 0;
  	f = 0;
  }
  if(c == a) {
  	f = 0;
  	d = 0;
  }
  sum = d + e + f;
  return sum;
}

var output = loneSum(3,2,3);
console.log(output);
