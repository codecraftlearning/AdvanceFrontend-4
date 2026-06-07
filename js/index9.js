


// write a program to, calulate a factorial of a given number.
// if provided number is 5 then 5! = 5 * 4 * 3 * 2 * 1 = 120
// if given number is 4 then 4! = 4 * 3 * 2 * 1 = 24

let num = 5; // 5
let factorial = 1; // 1, 5, 20, 60, 120, 120

for (let i = num; i >= 1; i = i-1) { // 5, 4, 3, 2, 1, 0
    factorial = factorial * i
}

console.log(factorial);

