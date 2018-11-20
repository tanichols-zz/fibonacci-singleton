const Fibonacci = require('./index')
const FibonacciObj = new Fibonacci(2);

describe('fibonacci', () => {
  it('should render 5 item(s) in the fibonacci sequence', () => {
    const output = FibonacciObj.getSequence(5)
    expect(output).toEqual([0, 1, 1, 2, 3])
  })
  it('should render 7 item(s) in the fibonacci sequence', () => {
    const output = FibonacciObj.getSequence(7)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8])
  })
  it('should render 9 item(s) in the fibonacci sequence', () => {
    const output = FibonacciObj.getSequence(9)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21])
  })
  it('should render 1 item(s) in the fibonacci sequence', () => {
    const output = FibonacciObj.getSequence(1)
    expect(output).toEqual([0])
  })
  it('should have processed 7 iterations', () => {
    const iterations = FibonacciObj.iterations
    expect(iterations).toEqual(7)
  })
  it('Should be a singleton', () => {
    const FibonacciObj2 = new Fibonacci(2)
    const size = FibonacciObj2.size
    expect(size).toEqual(9)
  })
})
