// Given a sorted array of "n" elements and a target element "t", find the index of t in the array.
// Return -1 if the element is not found.

function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2)
        if (target === arr[middleIndex]){
            return middleIndex
        }
        if (target< arr[middleIndex]){
            rightIndex = middleIndex -1
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1
}

console.log(binarySearch([-2, 4, 9, 16, 62], 4)) //1
console.log(binarySearch([1, 5, 6, 10, 62], 62)) //4
console.log(binarySearch([0, 4, 6, 12, 56], 9)) //-1


// Big-O = O(logn)