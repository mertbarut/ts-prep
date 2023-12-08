import { Chance } from 'chance'
import { prefixSum } from '../array/prefixSum'

describe('prefixSum', () => {
    const chance = new Chance()
    const size = chance.natural({ min: 2, max: 100 })
    const numGen = () => chance.natural({ min: 0, max: 1000 })
    const arr = chance.unique(numGen, size)
    const index = chance.natural({ min: 0, max: size - 1 })
    let sum = 0
    for (let i = 0; i <= index; i++) {
        sum += arr[i]
    }

    test('basic', () => {
        const prefixSumArr = prefixSum(arr)
        expect(prefixSumArr[index]).toBe(sum)
    })
})
