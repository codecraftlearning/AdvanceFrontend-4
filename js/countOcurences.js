
//Write a program to find the count of a given number in a array
//eg: [1,2,3,4,5,1,2,3,4,5,2,3,4,5,6,7,5,6,7,4,5,6,7]; the count the occurences of number 1 which is 2 then print 2.

let arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 2, 3, 4, 5, 6, 7, 5, 6, 7, 4, 5, 6, 7];

function countOccurences(num) {
    let count = 0;
    for (let i = 0; i<arr.length; i++) {
        if(arr[i] === num) {
            count++;
        }
    }

    return count;
}

let num = 4;
let count = countOccurences(num);
console.log(count);
