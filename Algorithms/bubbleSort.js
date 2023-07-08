// Given an array of integers, sort the array

function bubbleSort(arr) {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped)
}

const arr = [8, 4, -3, 34, 0]
bubbleSort(arr)
console.log(arr) //[ -3, 0, 4, 8, 34 ]

console.log(bubbleSort([8, 4, -3, 34, 0])) // why does this not work?

// Big-O = O(n^2)