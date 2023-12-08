import { Chance } from 'chance'
import { rangeSum } from '../array/rangeSum'

describe('rangeSum', () => {
    const chance = new Chance()
    const size = chance.natural({ min: 6, max: 6 })
    const numGen = () => chance.natural({ min: 0, max: 1000 })
    const arr = chance.unique(numGen, size)
    const indices = chance
        .unique(() => chance.natural({ min: 0, max: size - 1 }), 2)
        .sort((a, b) => a - b)
    const l = indices[0]
    const r = indices[1]
    let sum = 0
    for (let i = l + 1; i <= r + 1; i++) {
        sum += arr[i]
    }

    test('basic', () => {
        const result = rangeSum(arr, [{ l: l + 1, r: r + 1 }])
        expect(result[0]).toBe(sum)
    })
})
