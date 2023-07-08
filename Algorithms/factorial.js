function fact(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}

console.log(fact(5)) //120

// big-O = O(n)