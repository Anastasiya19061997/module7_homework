let array = [1, 2, null, 1, 'papa', 4, 0, 7, NaN, 0];
let even = 0;
let odd = 0;
let zero = 0;
for (let i = 0; i < array.length; i++) {
  if (typeof array[i] === 'number'&&!isNaN(array[i])) {
    if (array[i] === 0) {
      zero = zero + 1;
    }
    else if (array[i] % 2 === 0) {
      even = even + 1;
    }
    else {
      odd = odd + 1;
    }  
  }
  else {
    console.log (array[i] + ' - не число');
  }
}
console.log ('Количество четных - ' + even)
console.log ('Количество нечетных - ' + odd)
console.log ('Количество нулей - ' + zero)



