//count the frequecy of each number in an array
//eg: arr = [1,1,1,1,1,3,2,3,3,4,4,4,5] then print 1 = 5, 3 = 3, 2 = 1, 4 = 3, 5 = 1
// constraints: arr all types of numbers, including -ve, +ve and decimals

function frequency(arr) {
    let count = {};
    for (let i = 0; i<arr.length; i++) {
        if (count[arr[i]] === undefined) {
            count[arr[i]] = 1;
        } else {
            count[arr[i]]++;
        }
    }
    return count;
}

function countCharFreq(st) {
    let count = {}; //JSON Object => JavaScript Object Notation
    for (let i = 0; i<st.length; i++) {
        if (count[st[i]] === undefined) {
            count[st[i]] = 1;
        } else {
            count[st[i]]++;
        }
    }
    return count;
}

let arr = [1, 1, 1, 1, 1, 3, 2, 3, 3, 4, 4, 4, 5];
console.log(frequency(arr));


let name = "ankit kumar soni";
console.log(countCharFreq(name));



