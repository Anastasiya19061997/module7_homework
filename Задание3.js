function example(x) {
  return function(y) {
    let result = x + y;
    return result
  }
}
console.log(example(8)(6))
