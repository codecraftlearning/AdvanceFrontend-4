// write a program to print all the prime numbers within a range (use functions)
// eg: if range is 10 the print 2,3,5,7

// function isPrime(num){
//     for(let i=2; i<num ; i++){
//         if (num% i===0){
//             return false;
//         }
//     }
//     return true;
// }

// function checkPrimeInRange(range){
//     for( let i=2; i<= range; i++){
//         if(isPrime(i)){
//             console.log(i);
//         }
//     }
// }

// checkPrimeInRange(18);
// let a=1;
// let b=2;
 
// let num= a;
// a=b;
// b=num;

// console.log(a,b);

// write a program to reverse a number;
//eg if num = 12345 then after reversing num should become 54321; and print it

function numberSwap(num) {
 let swap = 0;

  while (num > 0) {
    let rem = num % 10;
    swap = (swap * 10) + rem;
    num = parseInt(num / 10);
  }
  return swap;
}

console.log(numberSwap(12345));