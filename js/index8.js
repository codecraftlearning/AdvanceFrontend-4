
//Loops
// For, While, do-while

//for a given range, print the sum of all the number within the range
//eg: if range is 5 then logic is  (1 + 2 + 3 + 4 + 5) then you print 15;

let range = 6;  // 6
let sum = 0;  // 0, 1, 3, 6, 10, 15, 21

for (let i = 1; i <= range; i = i+1) { // 1, 2, 3, 4, 5, 6, 7
    sum = sum + i; 
}

console.log(sum);


/*

    for (initialization ; condition ; modify) {
        //body
    }


    initialization -> condition (if true) -> body -> modify -> condition( if true) -> body -> modify -> condition (if false) -> exit from loop
*/

