

//you will provided with a standard number of a school like 1 ,2 ,3, 4, 5, ... 12, 
//when entered 1 you should print First
// 2 -> Secoond
///. 10 -> Metric
// 12 -> Intermediate


/*

take a number in a variable

will check if num equals 1 then log First 
the we will use else if till 12 then print the equivalant name
else invalid standard

*/

let std = 1;
let stdName = '';

// if (std === 1) {
//   stdName = "First";
// } else if (std === 2) {
//   stdName = "Second";
// } else if (std === 3) {
//   stdName = "Thrid";
// } else if (std === 4) {
//   stdName = "Fourth";
// } else if (std === 5) {
//   stdName = "Fifth";
// } else if (std === 6) {
//   stdName = "Sixth";
// } else if (std === 7) {
//   stdName = "Seventh";
// } else if (std === 8) {
//   stdName = "Eighth";
// } else if (std === 9) {
//   stdName = "Ninth";
// } else if (std === 10) {
//   stdName = "Metric";
// } else if (std === 11) {
//   stdName = "Eleventh";
// } else if (std === 12) {
//   stdName = "Intermediate";
// } else {
//     stdName = "Invalid Standard!!";
// }

//Switch 
switch (std) {
    case 1: stdName = "First"; break;
    case 2: stdName = "Second"; break;
    case 3: stdName = "Thrid"; break;
    case 4: stdName = "Fourth"; break;
    case 5: stdName = "Fifth"; break;
    case 6: stdName = "Sixth"; break;
    case 7: stdName = "Seventh"; break;
    case 8: stdName = "Eighth"; break;
    case 9: stdName = "Ninth"; break;
    case 10: stdName = "Metric"; break;
    case 11: stdName = "Eleventh"; break;
    case 12: stdName = "Intermediate"; break;
    default: stdName = "Invalid Standard"; 
}



console.log(stdName);
