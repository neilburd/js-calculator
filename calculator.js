
//mem is the used as a sloppy memory
var mem;

var calculator = {
  add: function(a,b){
    mem = a + b;
    return a + b;
  },
  subtract: function(a,b){
    mem = a - b;
    return a - b;
  },
  multiply: function(a,b){
    mem = a*b;
    return a*b;
  },
  divide: function(a,b){
    mem = a/b;
    return a/b;
  },
  exponent: function(a,b){
    mem = Math.pow(a, b);
    return Math.pow(a, b);
  },
  myChoice: function(a,b){
    mem = calculator.add(a,b) * calculator.subtract(a,b) *
    calculator.multiply(a,b) *
    calculator.divide(a,b); +
    calculator.exponent(a,b);

    return calculator.add(a,b) * calculator.subtract(a,b) *
    calculator.multiply(a,b) *
    calculator.divide(a,b); +
    calculator.exponent(a,b);
  }
}




// Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...
// * Addition
// * Subtraction
// * Multiplication
// * Division
// * Exponents (Hint: Look up Javascript's Math object)
// * An operation of your choice!
