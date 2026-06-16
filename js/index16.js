//Mandatory interview Question
// What is CLOUSER in javascript

function square(num) {
  num = num * num;
  console.log(num);
}


function test() {
  let num = 10;
  return () => {
    num = num * num;
    return num;
  }
}

let fun = test();
console.log(fun());
console.log(fun());

// console.log(fun);

