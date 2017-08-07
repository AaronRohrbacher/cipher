var input = prompt("Enter a sentence");


console.log(input);

var firstLast = function(inputString) {
  var first = inputString.charAt(0).toUpperCase();
  var lastChar = (inputString.length-1);
  var last = inputString.charAt(lastChar).toUpperCase();
  return first + last;
};

var switchLetters = function(letters) {
return letters.split("").reverse().join("");

};

var letterCount = function(inputString) {
  var rounded= Math.floor(inputString.length/2);
  return inputString.charAt(rounded)+inputString;
};

var newString = letterCount(input);
var letters = (firstLast(input));
jQuery(document).ready(function() {
  // jQuery ("h1").click(function() {
  //   alert(input);
  // });
  jQuery ("h1").click(function() {
    $("#unencoded").html('<h1 id="unencoded">'+switchLetters(newString)+"</h1>");
    $("#encoded").hide();
  });
});




console.log(letters);



console.log(switchLetters(letters));

console.log(input + switchLetters(letters));

console.log(newString);

console.log(switchLetters(newString));
