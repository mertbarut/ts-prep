export enum Approach {
    Naive,
    SlidingWindow,
}

// time: linear * k, space: constant
function maxSumNaive(arr: number[], k: number) {
    const n = arr.length
    let max = -Infinity

    arr.forEach((e, i) => {
        let sum = 0,
        winTail = i + k
        for (let j = i; j < winTail; j++) {
            sum += arr[j]
        }

        if (sum > max) {
            max = sum
        }
    })

    return max
}

// time: linear, space: constant
function maxSumSlidingWindow(arr: number[], k: number) {
    const n = arr.length
    let max = 0
    let sum = 0

    for (let i = 0; i < k; i++) {
        sum += arr[i]
        max = sum
    }

    for (let i = k; i < n; i++) {
        sum += arr[i] - arr[i - k]

        if (sum > max) {
            max = sum
        }
    }

    return max
}

/**
 * Returns maximum sum in a subarray of size k.
 */
export function maxSum(
    arr: number[],
    k: number,
    approach: Approach = Approach.SlidingWindow
) {
    const n = arr.length
    if (n < k) {
        throw new Error('k cannot be greater than array length')
    }

    switch (approach) {
        case Approach.Naive:
            return maxSumNaive(arr, k)
        case Approach.SlidingWindow:
            return maxSumSlidingWindow(arr, k)
    }
}
