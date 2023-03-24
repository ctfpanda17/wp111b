function isprime(n){
    if (n <= 1){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i == 0) {
            return false
        }    
    }
    return true
}

console.log("isprime(7)=",isprime(7))
console.log("isprime(8)=",isprime(8))
console.log("isprime(9)=",isprime(9))
