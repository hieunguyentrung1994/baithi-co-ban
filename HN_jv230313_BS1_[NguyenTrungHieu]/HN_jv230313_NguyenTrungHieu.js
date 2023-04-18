let number = [3, 5, 88, 99, 76, 8, 4, 5, 85, 63];
let result = [];
for (i = 0; i < number.length; i++) {
  if (result < number[i]) {
    result = number[i];
  }
}
console.log(result);
