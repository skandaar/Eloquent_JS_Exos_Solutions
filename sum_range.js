function range(start, end) {
  let ary = [];
  while (start <= end) {
    ary.push(start);
    start++;
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

console.log(sum(range(0, 3)));

