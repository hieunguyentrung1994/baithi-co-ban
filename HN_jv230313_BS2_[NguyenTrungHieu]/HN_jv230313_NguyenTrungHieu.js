let word = prompt("nhập từ đang sai chính tả vào dưới");
// "hELlo WORLd HoW arE yoU";

function convertword(word) {
  let words = word.split(" ");
  let newWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].toUpperCase() === words[i]) {
      newWords.push(words[i].toLowerCase());
    } else {
      newWords.push(
        words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()
      );
    }
  }
  return newWords.join(" ");
}
console.log(convertword(word));
