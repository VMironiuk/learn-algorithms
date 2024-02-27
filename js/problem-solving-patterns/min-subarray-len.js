// Write a function called minSubArrayLen which accepts two parameters 
// - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray 
// of which the sum is greater than or equal to the integer passed to the function. 
// If there isn't one, return 0 instead.

// Examples:
//     minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
//     minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
//     minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
//     minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
//     minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// Time Complexity - O(n)

// Space Complexity - O(1)


// TODO: Lokk back and refactor
function minSubArrayLen(arr, num) {
    if (arr.length === 0) { return 0 }

    let i = 0
    let j = 0
    let sum = 0
    do {
        sum += arr[j]
        j++
    } while (j < arr.length && sum < num)
    j -= 1

    if (sum < num) return 0

    let len = j + 1

    while (i <= j && j < arr.length) {
        if (sum >= num) {
            len = Math.min(len, j - i + 1)
            i++
            sum = sum - arr[i - 1]
        } else {
            j++
            if (j < arr.length) {
                sum += arr[j]
            }
        }
    }
    return len
}

module.exports = minSubArrayLen