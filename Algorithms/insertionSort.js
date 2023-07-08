// Given an array of integers, sort the array

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > numberToInsert) {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = numberToInsert
    }
}

const arr = [8, 4, -3, 34, 0]
insertionSort(arr)
console.log(arr) //[ -3, 0, 4, 8, 34 ]

// Big-O = O(n^2)