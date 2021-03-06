var str = "My name is Thamizh Thileepan";
console.log(str.repeat(3));
//This method is used to repeat the given string by which the user gives the number.

console.log(str.startsWith("My"));
//This method is used to find whether the string starts with the particular value. It returns either true or false.

console.log(str.fontcolor("green"));
//This method is used to change the font color of the string given by the user.

console.log(str.replace("Thamizh Thileepan", "Thamizh Thileepan N R"));
//This method is used to replace a word with another word in a string.

console.log(str.fontsize(30));
//This method of string is used to change the size of the text in string.

console.log(str.includes("Prabhakaran"));
//This method is used to check the availability of a particular word in the given string in terms of true or false.

var x = "bc";
var y = "ad";
var z = y.localeCompare(x);
console.log(z);
/*Returns -1 if x is sorted before y,
Returns 0 if the two strings are equal,
Returns 1 if x is sorted after y.*/