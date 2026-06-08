 //write a program to reverse a number ;
//eg ; if num = 12345 then after reversing num should become 54321 and print it//

function reverseNumber(num){
    let reverse = 0;



    while (num>0){
        let rem = num % 10;
        reversed = (reversed * 10) + rem;
        num = parseInt(num /10);
    }

    return reversed;
}

console.log(reverseNumber(12345));
