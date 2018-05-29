function calculateBillTotal(preTaxAndTipAmount) {
  // your code here
  tip = preTaxAndTipAmount * 0.15;
  tax = preTaxAndTipAmount * 0.095;
  total = preTaxAndTipAmount + tip + tax;
  return total;
}

var output = calculateBillTotal(20);
console.log(output); // --> 24.9
