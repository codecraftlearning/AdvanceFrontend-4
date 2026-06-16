// write a program to reverse an array
//eg: if array is []1,2,3,4,5] then print [5,4,3,2,1]

// function numberSwap(num) {
//  let swap = 0;

//   while (num > 0) {
//     let rem = num % 10;
//     swap = (swap * 10) + rem;
//     num = parseInt(num / 10);
//   }
//   return swap;
// }

// console.log(numberSwap(12345));

function reverseArray(arr){
let firstposition = 0;
let lastposition = arr.length - 1;

while(firstposition < lastposition){
    let swap = arr[firstposition];
    arr[firstposition] = arr[lastposition];
    arr[lastposition] = swap;
    firstposition++;
    lastposition--;
}
}
let arr=[1,2,3,4,5];
reverseArray(arr);
console.log(arr);
