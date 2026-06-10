

//object => its a collecion of key & value pairs, where keys are unique, value can be any


let studentName = "ankrv";
let studentRoll = 20;
let studentAddress = "dvlndlv vlednv dlvnd vdl vj";
let studentStd = "5A";

let st1 = ["sameeksha", 1, "asdfdsfs", "4B"];
let st2 = [...st1]; // <- spread operator
st2[0] = "Aman";
console.log(st1[0]);


let student1 = {
    name: "ankit",
    rol: 20,
    address: "asdas df dvf v fv eve",
    std: "5A"
}

let student2 = {
    name: "asdfsa",
    rol: 243,
    address: {
        houseNo: 1,
        strret: "3rd cross",
        city: "Noida",
        state: "UP",
        pin: 201301
    },
    std: "3A"
}

let demo = JSON.parse(JSON.stringify(student2));
demo.name = "Vidushi";

// console.log(st1[2]);

// console.log(student1.address);
// console.log(student2.name);


