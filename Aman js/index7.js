

//scope 1. global scope,  2. local/block/function scope


let name = "Ankit";

function aman(name) {
    console.log(name);

    sameeksha();
}

function sameeksha() {
    console.log(name);
}

aman("xyz");
// sameeksha();