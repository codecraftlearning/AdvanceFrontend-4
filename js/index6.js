
let num2 = 20;
let num1 = 10;

function sum(a, b) {
    let sum = a + b;
    return sum;
    // console.log(sum);
}

function square(num) {
    let sq = num ** 2;
    return sq;
}

function sumOfSquare(a, b) {
    let a1 = square(a);
    let b1 = square(b);
    let sumVal = sum(a1, b1);
    return sumVal;
}


// let sq = square(num1);

// let sumVal = sum(num1, num2);

let res = sumOfSquare(num1, num2);

// console.log(res);



let firstName = "Ankit";
let middleName = "Kumar";
let lastName = "Soni";


function printFullName(first, middle, last) {
    let name = first + " " + middle + " " + last;
    console.log(name);
}

function getFullName(first, middle, last) {
    let name = first + " " + middle + " " + last;
    return name;
}

printFullName(firstName, middleName, lastName);

let fullName = getFullName(firstName, middleName, lastName);
console.log("Name is: "+ fullName);
