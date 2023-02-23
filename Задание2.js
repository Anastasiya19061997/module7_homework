function primeNumbers(numb) {
  let result = 'Простое число';
  if (numb > 1000) {
    return 'Данные неверны';
  }
  else if (numb <= 1) {
    return 'Число должно быть больше 1';
  }
  else {
    for (let i = 2; i < numb; i++) {
      if (numb % i === 0) {
        result = 'Составное число';
        break;
      } 
    }
  return result;
  }
}  
console.log(primeNumbers(2))
  


