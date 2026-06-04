let range = 10;
let count = 0;

for (let i = 1; i <= range; i++) {
    if (i % 2 !== 0) {
        count++;
    }
}
console.log(count);