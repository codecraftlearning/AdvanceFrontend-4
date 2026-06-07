function reverseNumber(num){
    let reverse = 0;

    while (num > 0) {

        let rem = num % 10;
        reverse = (reverse * 10) + rem;
        num = parseInt(num/10);
    }
    return reverse;
}
const inputnum = 12345;
const result =reverseNumber(inputnum);

console.log("original:",inputnum);
console.log("reverse:",result);
