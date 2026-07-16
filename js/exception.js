
let object = null;

try {
    console.log(object.name);
} catch (e) {
    object = {
        name: 'unknown'
    }
}

console.log(object.name);

console.log("Code Finished");




