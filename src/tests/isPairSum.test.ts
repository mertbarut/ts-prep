import { Approach, isPairSum } from '../array/isPairSum'
import { Chance } from 'chance'

describe('isPairSum', () => {
    const chance = new Chance()
    const size = chance.natural({ min: 2, max: 100 })
    const numGen = () => chance.natural({ min: 0, max: 1000 })
    const arr = chance.unique(numGen, size).sort((a, b) => a - b)
    const indices = chance.unique(
        () => chance.natural({ min: 0, max: size - 1 }),
        2
    )
    const i = indices[0]
    const j = indices[1]
    const sum = arr[i] + arr[j]
    test('naive', () => {
        const res = isPairSum(arr, sum, Approach.Naive)
        expect(res).toBeTruthy()
    })
    test('two pointers', () => {
        const res = isPairSum(arr, sum, Approach.TwoPointers)
        expect(res).toBeTruthy()
    })
})
