//toString
let x = 123;
let text = x.toString();
console.log(text); // "1111011"

// exponential method 
let y = 9.6;
let a =y.toExponential(5);
console.log(a); // "9.656e+0"a

//preciion method
let d = 9.6;
let e =d.toPrecision(5);
console.log(e); 

//Number method
//The Number() method converts variables to numbers
let f = "123";
let g = Number(f);
console.log(g); // 123

//integer method
//The isInteger() method returns true if the argument is an integer.
//Otherwise it returns false.
let h = 9.656;
let i = Number.isInteger(h);
console.log(i);

//Number:isFinite() method
//The Number.isFinite() method returns true if the argument is not Infinity, -Infinity, nor NaN(not a number).
let j = 45258;
let k = Number.isFinite(j);
console.log(k); // false

//The Number.isNaN() Method
//The Number.isNaN() method returns true if the argument is NaN (Not a Number).
let l = "Hello";
let m = Number.isNaN(l);
console.log(m); // true

