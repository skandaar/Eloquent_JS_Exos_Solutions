// Eloquent JS P56

/*
function countBs(pattern) {
  let count = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] == 'B') { count++;}
  }
  return count;
}

console.log(countBs("Babar is a cute small Bear with little Beard"));
*/

function countChar(pattern, character) {
  let count = 0;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] == character) {
      count++;
    }
  }
  return count;
}
pattern = "Babar is a cute small Bear with little Beard"
console.log(countChar(pattern, 'a'));
