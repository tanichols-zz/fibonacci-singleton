class Fibonacci {
  constructor(size = 2) {
    this.iterations = 0
    this.size = 2
    this.prior = 0
    this.current = 1
    this.sequence = [0, 1]
    this.setSize(size)
  }

  setSize(size) {
    if (this.size < size) {
      this.size = size
      this.compute()
    }
  }

  compute() {
    let remaining = this.size - this.sequence.length;
    for (let i = 0; i < remaining; i++) {
      const next = this.prior + this.current
      this.sequence.push(next)
      this.prior = this.current
      this.current = next

      this.iterations++
    }
  }

  getSequence(length) {
    this.setSize(length)

    return this.sequence.slice(0, length)
  }
}

const FibonacciObj = new Fibonacci(2);

module.exports = FibonacciObj
