// at() method------
// The at() method takes an integer value and returns the character at that index.
// The index of the first character is 0, the second character is 1, and so on.
// You can also use negative integers, which count back from the last string.
// For example, -1 returns the last character, -2 returns the second to last character, and so on.

var a="stefff";
var letter = a.at(2);
console.log(letter);

// concat() method--------
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


//slice()--------
let b = "Apple, Banana, Kiwi";
let part = b.slice(7, 13);
console.log(part);
//extracts part from position
let c  = "Apple, Banana, Kiwi";
let partt = c.slice(7);
console.log(partt);
//extracts part from position -12
let d  = "Apple, Banana, Kiwi";
let parttt = d.slice(-12);
console.log(parttt);


//UPPERCASE ----------
let t1 = "Hello World!";
let t2 = t1.toUpperCase();
console.log(t2);
//LOWERCASE ----------
let t3 = "Hello World!";
let t4 = t3.toLowerCase();
console.log(t4);


//isWellFormed() method-------
// The isWellFormed() method returns true if a string is well-formed, otherwise it returns false.
let tex = "Hello world!";
let result = tex.isWellFormed();
console.log(result);
// The string contains an unpaired high surrogate (\uD800), so it is not well-formed, and the method returns false.
let f = "Hello World \uD800";
let g = f.isWellFormed();
console.log(g);


//trim() method-----------
// The trim() method removes whitespace from both sides of a string.
// Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).
let text5 = "      Hello World!      ";
let text6 = text5.trim();
console.log(text6);

//trimStart() method-------
let text7 = "     Hello World!    h ";
let text8 = text7.trimStart();
console.log(text8);

//trimEnd() method-------
let text9 = "     Hello World!    h ";
let text10 = text9.trimEnd();
console.log(text10);