// Eloquent JS P80 : Deep Comparison

function deepEqual(val1, val2) {
  if (val1 == null && val2 == null) {
    return true;
  } else if (val1 == null || val2 == null) {
    return false;
  } else if (typeof val1 == 'object' && typeof val2 == 'object') {
    pp1 = Object.keys(val1);
    pp2 = Object.keys(val2);
    if (pp1.length != pp2.length) { return false; }
    function readList(i) {
      if (i <= pp1.length - 1) {
        if (deepEqual(pp1[i], pp2[i])) {
          if (deepEqual(val1[pp1[i]], val2[pp2[i]])) {
            return readList(i + 1);
          } else {
            return false;
          }
        } else {
          return false;
        } 
      } else {
        return true;; 
      } 
    }
    return readList(0);
  } else {
    return (val1 === val2); 
  }
}

//console.log(deepEqual(null, null));
//console.log(deepEqual(1, 1));
//console.log(deepEqual('1', 1));

let obj1 = {
  fname: 'yassine',
  lname: 'temtam',
  age: 30
};

let obj2 = {
  fname: obj1,
  lname: 'temtam',
  age: 37
};

let obj3 = {
  fname: obj1,
  lname: 'temtam',
  age: 37
};

let obj4 = {
  fname: obj3,
  lname: 'temtam',
  age: 37 
};

let obj5 = {
  fname: obj1,
  lname: 'temtam',
};
console.log(deepEqual(obj2, obj5));
