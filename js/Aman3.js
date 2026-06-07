function isprime(num){
    for(let i=2; i<num; i++){
        if(num% i===0){
            return false;
        }
    }
    return true;
}
function checkPrimeInRange(range){
for(let i=2; i<= range; i++){
    if(isprime(i)){
        console.log(i);
    }
}
}

checkPrimeInRange(10);