// write a program to print all the prime numbers within a range (use functions)
// eg: if range is 10 the print 2,3,5,7

function isPrime(num){
    for(let i=2; i<num ; i++){
        if (num% i===0){
            return false;
        }
    }
    return true;
}

function checkPrimeInRange(range){
    for( let i=2; i<= range; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

checkPrimeInRange(18);