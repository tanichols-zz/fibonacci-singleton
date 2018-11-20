class Fibonacci {
  constructor() {
    if (!Fibonacci.instance) {
      // Private members with default values
      let iterations = 0
      let size = 2
      let prior = 0
      let current = 1
      let sequence = [0, 1]

      // Private methods
      const setSize = (newSize) => {
        if (size < newSize) {
          size = newSize
          compute()
        }
      }

      const compute = () => {
        let remaining = size - sequence.length;
        for (let i = 0; i < remaining; i++) {
          const next = prior + current
          sequence.push(next)
          prior = current
          current = next
          iterations++
        }
      }

      // Public methods
      this.getSize = () => size

      this.getIterations = () => iterations

      this.getSequence = (length) => {
        setSize(length)

        return sequence.slice(0, length)
      }

      // Singleton Instantiation
      Fibonacci.instance = this
    }

    return Fibonacci.instance
  }
}

module.exports = Fibonacci
