// Given an array of "n" elements and a target element "t" find the index of tin the array .
//Return -1 if the target element is not found.

function linearSearch(arr, target) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === target) {
            return i
        }
    }
    return -1
}


console.log(linearSearch([1, 4, 6, 2, 62], 2)) //3
console.log(linearSearch([1, 5, 6, 10, 62], 45)) //45
console.log(linearSearch([100, 4, 6, 2, 6], 6)) //2


// Big-O == O(n)