// Eloquent JS P56


function isEven(number) {
  number = number >= 0 ? number : -number; 
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number - 2) == 1;
  }
}

console.log(isEven(50));
console.log(isEven(-4));
