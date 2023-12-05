import { maxSum, Approach } from '../array/maxSum'

test('maxSum - naive', () => {
    const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
    const k = 4
    expect(maxSum(arr, k, Approach.Naive)).toBe(24)
})
test('maxSum - sliding window', () => {
    const arr = [1, 4, 2, 10, 2, 3, 1, 0, 20]
    const k = 4
    expect(maxSum(arr, k, Approach.SlidingWindow)).toBe(24)
})
