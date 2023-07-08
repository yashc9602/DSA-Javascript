function isPrime(n) {
    if (n < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(13)) //true
console.log(isPrime(4)) //false

// Big-O = O(sqrt(n))
