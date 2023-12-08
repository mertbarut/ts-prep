import { prefixSum } from './prefixSum'

/**
 * Returns the sums of subarrays, the left and right inclusive borders of which are given in `ranges`
 * time: linear - space: linear
 */
export function rangeSum(arr: number[], ranges: { l: number; r: number }[]) {
    ranges.forEach((range) => {
        if (range.l < 0 || range.l >= range.r) {
            throw new Error(
                'invalid range: ' +
                    range.l.toString() +
                    ' - ' +
                    range.r.toString()
            )
        }
    })
    const prefixSumArr = prefixSum(arr)
    return ranges.map(
        (range) => prefixSumArr[range.r] - prefixSumArr[range.l - 1]
    )
}
