let month = prompt("nhập vào tháng");
let year = prompt("nhạp vào năm");
function lastDay(month, year) {
  if (month === 2) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === p)) return 29;
  } else {
    return 28;
  }
  if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}
console.log(lastDay(month, year));
