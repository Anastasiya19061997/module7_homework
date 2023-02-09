let array = [1, 1, 1, 1, 1, 1, 1];
result = true;
for (let i = 0; i < array.length; i++) {
  if (i === 0) {
    result = true;
  }
  else if (array[i] !== array[i - 1]) {
    result = false;
    break
  }
  else {
    result = true;
  }
}
console.log (result)



