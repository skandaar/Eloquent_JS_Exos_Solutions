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
ary = [1, 2, 3];
list = arrayToList(ary);
console.log(list);

function listToArray(o) {
  let ary = Object.keys(o);
  let obj = o[ary[1]];
  let elem = [];
  elem.push(o[ary[0]]);
  function accessList() {
    if (obj == null) {
      return elem;
    } else if (obj[ary[1]] == null) {
      elem.push(obj[ary[0]]);
      return elem;
    } else {
      elem.push(obj[ary[0]]);
      obj = obj[ary[1]];
      return accessList();
    }
  }
  return accessList();
}
console.log(listToArray(list));

