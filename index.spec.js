const Fibonacci = require('./index')

describe('fibonacci', () => {
  it('should render 5 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci.getSequence(5)
    expect(output).toEqual([0, 1, 1, 2, 3])
  })
  it('should render 7 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci.getSequence(7)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8])
  })
  it('should render 9 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci.getSequence(9)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
  })
  it('should render 1 item(s) in the fibonacci sequence', () => {
    const output = Fibonacci.getSequence(1)
    expect(output).toEqual([0])
  })
  it('should have processed 7 iterations', () => {
    const iterations = Fibonacci.iterations
    expect(iterations).toEqual(7)
  })
})
