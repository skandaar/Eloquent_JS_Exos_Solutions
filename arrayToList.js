// Eloquent JS P79

function arrayToList(ary) {
  let value = 0;
  let rest = {};
  function creatObj(i) {
    value = i;
    if (i == ary.length - 1) {
      rest = null;
      return ({value, rest})
    } else {
      return ({value, rest: creatObj(i + 1)})
    }
  }
  return creatObj(0);
}
ary = [0, 1, 2];
obj = arrayToList(ary);
console.log(obj);

