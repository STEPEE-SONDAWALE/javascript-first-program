// at() method
// The at() method takes an integer value and returns the character at that index.
// The index of the first character is 0, the second character is 1, and so on.
// You can also use negative integers, which count back from the last string.
// For example, -1 returns the last character, -2 returns the second to last character, and so on.

var a="stefff";
var letter = a.at(2);
console.log(letter);

// concat() method
// The concat() method concatenates (joins) two or more strings.
// This method does not change the existing strings. It returns a new string.
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// The concat() method can be used instead of the plus operator (+) to join strings.
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
console.log(text);