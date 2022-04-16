// Eloquent JS P79

function arrayToList(ary) {
  let value = 0;
  let rest = {};
  function creatObj(i) {
    value = ary[i];
    if (i == ary.length - 1) {
      rest = null;
      return ({value, rest})
    } else {
      return ({value, rest: creatObj(i + 1)})
    }
  }
  return creatObj(0);
}
ary = [1, 3, 5];
obj = arrayToList(ary);
console.log(obj);

