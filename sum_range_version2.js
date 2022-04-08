function range(start, end, step) {
  let ary = [];
  if (start <= end && (step == undefined || step == 0)) {
    while (start <= end) {
      ary.push(start);
      start++;
    }
  } else if (start <= end && step > 0) {
    while (start <= end) {
      ary.push(start);
      start += step;
    } 
  } else if (start > end && step < 0) {
    while (start >= end) {
      ary.push(start);
      start += step;
    } 
  } else if (start > end && (step == undefined || step == 0)) {
    while (start >= end) {
      ary.push(start);
      start--;
    }
  }

  return ary;
}

function sum(ary) {
  let sum = 0;
  for (let number of ary) {
    sum += number;
  }
 
  return sum;
}

console.log(sum(range(5, 1, -1)));  // --> 15
console.log(sum(range(5, 1, 0)));   // --> 15
console.log(sum(range(5, 1)));      // --> 15

console.log(sum(range(1, 5, 2)));   // --> 9

console.log(sum(range(1, 5, 1)));   // --> 15
console.log(sum(range(1, 5, 0)));   // --> 15
console.log(sum(range(1, 5)));      // --> 15

console.log(sum(range(1, 5, -2)));  // --> 0
console.log(sum(range(5, 1, 2)));   // --> 0
