var inputString = prompt("Enter a sentence");
console.log(inputString);

var firstLast = function(inputString) {
  var first = inputString.charAt(0).toUpperCase();
  var lastChar = (inputString.length-1);
  var last = inputString.charAt(lastChar).toUpperCase();
  return first + last;
};


var letters = (firstLast(inputString));
console.log(letters);

  var switchLetters = function(letters) {
  return letters.split("").reverse().join("");

}

console.log(switchLetters(letters));

console.log(inputString + switchLetters(letters));

var letterCount = function(inputString) {
  var rounded= Math.floor(inputString.length/2);
  return inputString.charAt(rounded)+inputString;
}
var newString = letterCount(inputString);
console.log(newString);

console.log(switchLetters(newString));
