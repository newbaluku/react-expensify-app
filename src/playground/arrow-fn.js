const multiplier = {
  numbers: [10, 2, 30],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());