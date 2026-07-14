class Animal {
    name;
    legCount;
    isMamel;

    // constructor() {
    //     this.name = "unknown";
    //     this.legCount = 0;
    //     this.isMamel = false;
    // }

    constructor(name, legCount, isMamel) {
        console.log("Animal Constructor called");
        
        this.name = name;
        this.legCount = legCount;
        this.isMamel = isMamel
    }

    printDetails() {
        console.log(this.name, this.legCount);
    }

}

let tiger = new Animal("Tiger", 4, true);

// console.log(tiger);

tiger.name = "Tig2er";

tiger.printDetails();



// //function


// function sum(a, b) {
//     let res = a + b;
//     console.log(res);
// }


// //prototype

// function Person(name, age) {
//     this.fullName = name;
//     this.age = age;
//     this.greet = () => console.log("Hello, " + this.fullName);
//     this.getAge = () => console.log("Age of "+ this.fullName + " is "+ this.age);
    
// }

// let p1 = new Person("ankit", 32);
// let p2 = new Person("aman");
// let p3 = new Person("sameeksha");

// p1.greet();
// p1.getAge();
// p2.greet();
// p3.greet();

// console.log(Person.prototype);


