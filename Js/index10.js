

let range = 10;
let rangeBackup = range;
let count = 0;

// for (let i = 1; i <= range; i++) {
//     if (i % 2 !== 0) {
//         count++; // count = count + 1;
//     }
// }

// while (range > 0) { // 10, 9, 8
//     if (range % 2 !== 0) { // false, true
//         count++;  // 0, 1
//     }
//     range--;
// }

// console.log(count, rangeBackup);


do {
    if (range % 2 !== 0) {
        count++
    }
    range--;
} while (range > 0);

console.log(count);



