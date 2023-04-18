//cách 1 không sử dụng hàm sort
let number = [3, 25, 49, 48, 12];
let temp = 0;
for (i = 0; i < number.length; i++) {
  for (j = i + 1; j < number.length; j++) {
    if (number[i] < number[j]) {
      tenp = number[i];
      number[i] = number[j];
      number[j] = temp;
    }
  }
}
console.log(number);

//cách 2 sử dụng hàm sort
let number2 = [3, 25, 49, 48, 12, 4];
number2.sort(function (a, b) {
  return b - a;
});
console.log(number2);
