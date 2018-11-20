const Fibonacci = require('./index')

describe('fibonacci', () => {
  const fibonacciObj = new Fibonacci(10)
  it('should render 1 item(s) in the fibonacci sequence', () => {
    const output = fibonacciObj.getSequence(1)
    expect(output).toEqual([0])
  })
  it('should render 2 item(s) in the fibonacci sequence', () => {
    const output = fibonacciObj.getSequence(2)
    expect(output).toEqual([0, 1])
  })
  it('should render 3 item(s) in the fibonacci sequence', () => {
    const output = fibonacciObj.getSequence(3)
    expect(output).toEqual([0, 1, 1])
  })
  it('should render 7 item(s) in the fibonacci sequence', () => {
    const output = fibonacciObj.getSequence(7)
    expect(output).toEqual([0, 1, 1, 2, 3, 5, 8])
  })
  it('should render 5 item(s) in the fibonacci sequence', () => {
    const output = fibonacciObj.getSequence(5)
    expect(output).toEqual([0, 1, 1, 2, 3])
    console.log('ITERATIONS', fibonacciObj.iterations)
  })
})
