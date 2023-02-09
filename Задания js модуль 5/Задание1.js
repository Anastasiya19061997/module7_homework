let x = + prompt ('Введите значение');
if (typeof x == 'number') {
  if (isNaN(x)){
    console.log ('Упс, кажется, вы ошиблись');
  }
  else if (x % 2 == 0) {
    console.log ('Четное');
  } 
  else {
    console.log ('Нечетное');
  }
} else {
  console.log ('Упс, кажется, вы ошиблись');
}
