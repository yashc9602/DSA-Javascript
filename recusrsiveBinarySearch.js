// Given a sorted array of "n" elements and a target element "t", find the index of t in the array.
// Return -1 if the element is not found.

function recursiveBinarySearch(arr, target){
    return search(arr, target, 0, arr.length -1)

}

console.log(recursiveBinarySearch([-2, 4, 9, 16, 62], 4)) //1
console.log(recursiveBinarySearch([1, 5, 6, 10, 62], 62)) //4
console.log(recursiveBinarySearch([0, 4, 6, 12, 56], 9)) //-1