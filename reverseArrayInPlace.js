// Eloquent JS P79


function reverseArrayInPlace(ary) {
  let size = ary.length;
  for (let i = size - 1; i >= 0; i--) {
    ary.push(ary[i]);
  }
  for (let i = 0; i < size; i++) {
    ary.shift();
  }
  return ary;
}


let ary1 = [1, 2, 3, 4, 5];
let ary2 = ['a', 'b', 'c'];
console.log(reverseArrayInPlace(ary1));  // --> [5, 4, 3, 2, 1]
console.log(reverseArrayInPlace(ary2));  // --> ['c', 'b', 'a']
console.log(ary1);                       // --> [5, 4, 3, 2, 1]
