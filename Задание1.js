const obj = {
  a: 1,
  b: 2,
}
function ownKeys(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { 
      console.log(key, obj[key]);
    }
  }
}
ownKeys(obj)