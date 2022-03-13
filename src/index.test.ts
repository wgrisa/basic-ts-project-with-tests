import { sum } from './'

describe('Summing', () => {
  it('returns the sum of two numbers', () => {
    const result = sum({ numbers: [1, 3] })

    expect(result).toEqual(4)
  })
})
