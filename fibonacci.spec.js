const Fibonacci1 = require('./fibonacci')
const Fibonacci2 = require('./fibonacci')

describe('fibonacci', () => {
  it('should render 5 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci1.getSequence(5)
    expect(output).toEqual([0, 1, 1, 2, 3])
  })
  it('should render 7 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci1.getSequence(7)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8])
  })
  it('should render 9 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci1.getSequence(9)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
  })
  it('should render 1 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci1.getSequence(1)
    expect(output).toEqual([0])
  })
  it('should have processed 7 iterations', () => {
    const iterations = Fibonacci1.getIterations()
    expect(iterations).toEqual(7)
  })
  it('Should be a singleton', () => {
    expect(Fibonacci1).toBe(Fibonacci2)
  })
})
