

//Function


let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;

// add the square of to 2 numbers and print it

// let sum12 = (num1 ** 2) + (num2 ** 2);
// console.log(sum12);

// let sum23 = (num2 ** 2) + (num3 ** 2);
// console.log(sum23);

// let sum34 = (num3 ** 2) + (num4 ** 2);
// console.log(sum34);

// let sum45 = (num4 ** 2) + (num5 ** 2);
// console.log(sum45);

//function defination
function sumOfSquare (a, b) {
    let sum = (a ** 2) + (b ** 2);
    console.log(sum);
}
 
sumOfSquare(num1, num2); // calling a function
sumOfSquare(num2, num3);
sumOfSquare(num3, num4);
sumOfSquare(num4, num5);