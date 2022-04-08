let pattern = "";
for (let j = 0; j < 8; j++) {
  if (j % 2 == 0) {
    for (let i = 0; i < 8; i++) {
      if (i % 2 == 0) {
        pattern += '#';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  } else {
    for (let i = 0; i < 8; i++) {
      if (i % 2 == 0) {
        pattern += ' ';
      } else {
        pattern += '#';
      }
    }
    pattern += '\n';
  }
}
console.log(pattern);
