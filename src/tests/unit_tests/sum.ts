import { sum } from '../../sum'

test('sum', () => {
    const res = sum(1, 1)
    expect(res).toBe(2)
})
