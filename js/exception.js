


let div = (numerator, dinomenator) => {
  if (dinomenator === 0) {
    throw new Error("Dinomenator cannot be 0(ZERO). Please try again!");
    // return 0;
  }

  return numerator / dinomenator;
};

try {
  let res = div(1, 0);
  let sum = res * 2;
  console.log(sum);
} catch (error) {
  console.log(error.message);
}








// let object = null;

// try {
//     console.log(object.name);
// } catch (e) {
//     object = {
//         name: 'unknown'
//     }
// }

// console.log(object.name);

// console.log("Code Finished");
