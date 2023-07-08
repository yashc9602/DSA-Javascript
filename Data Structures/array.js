const arr = [1, 2, 3, 'Yash']

console.log(arr[0])

arr.push(4) // add at the end
arr.unshift(0) //add at the start
arr.pop() //remove at end
arr.shift() //remove at start

for (const item of arr) {
    console.log(item)
}


// map, filter, reduce, concat, slice, spice

// Insert/ remove at the end - O(1)
// Insert or remove at beginning - O(n)
// Access - O(1)
// Searching - O(n)

// Push/ Pop - O(n)
// shift/ unshift / concat/ spice/ slice - O(n)
// forEach/ Map/ filter/ reduce - O(n)