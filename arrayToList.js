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

function prepend(elem, list) {
  let properties = Object.keys(list);
  let obj = {};
  obj[properties[0]] = elem;
  obj[properties[1]] = list;
  return (obj);
}

function nth(list, index) {
  let elem = [];
  elem = listToArray(list);
  for (let i = 0; i < elem.length; i++) {
    if (index == i) { return elem[i]; }
  }
  return undefined;
}

ary = [1, 2, 3];
list = arrayToList(ary);
console.log(list);
console.log(listToArray(list));
list = prepend(0, list);
console.log(list);
console.log(nth(list, 3));

