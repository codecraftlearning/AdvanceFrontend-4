

//write a program to search a given number in a array. print the index where it is present
//eg: [4,7,6,13,6,8,0,7,5,3,2,11,35,6] we have to find value 6, "6 is is present at 2nd index"
//if the num is not found print -1;

//Linear Search

let arr = [4, 7, 6, 13, 6, 8, 0, 7, 5, 3, 2, 11, 35, 6];

function search(num) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

let num = 111;
let index = search(num);
console.log(index);
