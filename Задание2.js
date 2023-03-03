const obj = {
    a: 1,
    b: 2,
}
function getFunk(str, obj) {
    return str in obj;
}
console.log (getFunk('d', obj))