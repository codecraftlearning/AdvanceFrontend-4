//write a program to reverse an array
//eg: if array is []1,2,3,4,5] then print [5,4,3,2,1]


// function reverseArray(arr) {
//     let tempArr = []; // <- auxilary space //456
//     for (let i = arr.length-1; i>=0; i--) {
//         tempArr[arr.length-1-i] = arr[i];
//     }
//     return tempArr;
// }

// let arr = [1,2,3,4,5]; //123
// let x = arr; //123
// arr = reverseArray(arr); //456
// console.log(arr, x);


//  [0, 1, 2, 3, 4]  < index
//  [1, 2, 3, 4, 5]  < values
/*

i => 0 - 4
0 -> [5,2,3,4,1]
1 -> [5,4,3,2,1]
2 -> [5,4,3,2,1]
3 -> [5,2,3,4,1]
4 -> [1,2,3,4,5]
*/

function reverseArray(arr) {
    for (let i = 0; i<arr.length/2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp; 
    }
}

let arr = [1, 2];
reverseArray(arr);
console.log(arr);


