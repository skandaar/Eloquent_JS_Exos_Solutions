for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0) {
    console.log("Fizz");
  }
  if (number % 5 == 0 && number % 3 != 0) {
    console.log("Buzz");
  }
  if (number % 5 == 0 && number % 3 == 0) {
    console.log("FizzBuzz");
  }
}
