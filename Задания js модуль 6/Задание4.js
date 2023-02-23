function getNambs (a, b) {
  let result = a;
  const i = setInterval(function() {
    console.log(result);
    if (result === b){
      clearInterval(i);
    }
    result++;
  }, 1000);
}
getNambs (7, 15)
