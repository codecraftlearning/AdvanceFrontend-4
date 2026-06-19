function sum() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let sum = num1 + num2;
  let span = document.getElementById("result");
  span.innerText = sum;
}

function swap() {
  let num1Input = document.getElementById("num1");
  let num2Input = document.getElementById("num2");

  let temp = num1Input.value;
  num1Input.value = num2Input.value;
  num2Input.value = temp;
}
