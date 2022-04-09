// Eloquent JS P79
// Version 2 without using built-in function shift()

function reverseArray(ary) {
  let new_ary = [];
  for (let i = ary.length - 1; i >= 0; i--) {
      new_ary.push(ary[i]);
  }
  
  return new_ary;
}

ary1 = [1, 2, 3, 4, 5];
ary2 = [1, 'b', true, "hello", undefined];


console.log(reverseArray(ary1));  // --> [5, 4, 3, 2, 1]
console.log(reverseArray(ary2));  // --> [undefined, "hello", true, 1]
