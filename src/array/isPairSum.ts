export enum Approach {
    Naive,
    TwoPointers,
}

/**
 * time: quadratic, space: constant
 */
function isPairSumNaive(arr: number[], sum: number) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                continue
            }
            const current = arr[i] + arr[j]
            if (current === sum) {
                return true
            }
            if (current > sum) {
                break
            }
        }
    }
    return false
}

/**
 * time: linear * logarithmic, space: constant
 */
function isPairSumTwoPointers(arr: number[], sum: number) {
    let i = 0
    let j = arr.length - 1

    while (i < j) {
        const current = arr[i] + arr[j]
        if (current === sum) {
            return true
        } else if (current < sum) {
            i = i + 1
        } else {
            j = j - 1
        }
    }
    return false
}

/**
 * Returns true if `arr` contains a pair of numbers that equals to `sum` when added together.
 */
export function isPairSum(arr: number[], sum: number, approach: Approach) {
    switch (approach) {
        case Approach.Naive:
            return isPairSumNaive(arr, sum)
        case Approach.TwoPointers:
            return isPairSumTwoPointers(arr, sum)
        default:
            break
    }
}
