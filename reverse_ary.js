// Eloquent JS P79

function reverseArray(ary) {
  let new_ary = [];
  for (let elem of ary) {
    new_ary.unshift(elem);
  }
  
  return new_ary;
}

ary1 = [1, 2, 3, 4, 5];
ary2 = [1, 'b', true, "hello", undefined];


console.log(reverseArray(ary1));  // --> [5, 4, 3, 2, 1]
console.log(reverseArray(ary2));  // --> [undefined, "hello", true, 1]
