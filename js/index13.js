//Array -> collection of values in sipmple terms you can call it as a list for anything.


function doubleArr(arr) {  //<- call by reference
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
}

let arr = [1,2,3,4,5,6,7,8,9];
doubleArr(arr);
console.log(arr);


function doubleValue(num) { // call by value
  num *= 2;
}

let num = 2;
doubleValue(num);
console.log(num);




/*
    AMAN   ->   danpeti  ->  goes out to buy a container which he will call as danpeti
    -> till he buys the container, danpeti is undefined
    -> he went to one shop, ad asked for a square container -> shopkeeper denies 
    -> it means now aman want a "square container" but it not with him right now. it means danpeti is null right now.
    -> aman went to another shop and asked for same "square container" and he bought it. -> now danpeti is empty right now  
    -> he came back home, I him 500 rs and he stores it in danpeti -> now its not empty. (it has some values)
*/