// use strict mode wrong code write down karne par warning throw karta hai

// "use strict";

// -- console.log() sample print the output --

// console.log(`Hello World`);
// console.log('Hello World');
// console.log("Hello World");

// intro to variables

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable

// firstName = ="Rohit"; -- (Do not use this code. This is a bad practice.)
// Declare and after use it.
// var firstName = "Rohit";

// use a variable
// console.log(firstName);

// change value

// firstName = "Abhay";
// console.log(firstName);

// rules for naming variables

// you cannot start with number
// example :-
// 1value (invalid)
// value1 (valid)
// var 1value = "Rohit"; -- (invalid)
// var value1 = "Rohit"; -- (valid)


// you can use only underscore( _ ) or dollar symbol( $ )
// first_name (valid)
//_firstname (valid)
// var first_name = "Rohit"; -- (valid) // snake case writing
// var _firstname = "Rohit"; -- (valid) // snake case writing
// _firstname and first_name maei underscore( _ ) lagne par esha snake case writing kahte hai.

// first$name (valid)
// $firstname (valid)
// var first$name = "Rohit"; -- (valid)
// var $firstname = "Rohit"; -- (valid)

// you cannot use spaces
// var first name = "Rohit"; -- (Invalid)

// first name (invalid)
// var first name = "Abhay"; -- (Invalid)

// convention
// start with small letter and use camelCase
// var firstName = "Rohit"; // camel case writing
// esh maei firstName ko camelCase writing esh maei before maei small letter and after maei capital letter lekha hai.

// let keyword
// declare variable with let keyword

// let firstName = "Rohit";
// console.log(firstName);
// firstName = "Abhay";
// console.log(firstName);


// block scope vs function scope (covered later in this tutorial)

// declare constants

// const pi = 3.14;
// console.log(pi);

// String indexing

// let firstName = "RohitSharma";

//   R   o   h   i   t
//   0   1   2   3   4

// console.log(firstName[0]);
// console.log(firstName[1]);
// console.log(firstName[2]);
// console.log(firstName[3]);
// console.log(firstName[4]);

// length of string
// firstName.length

// console.log(firstName.length);

// last Index : length - 1

// console.log(firstName[firstName.length-1])
// console.log(firstName[firstName.length-2])

// variableName.trim() --- Content ka andar ka extra spaces ko remove karta hai. For Example,

// let firstName = "     Rohit     ";
// console.log(firstName.length);
// firstName = firstName.trim();
// console.log(firstName);
// console.log(firstName.length);

// variableName.toUpperCase() -- Content ko upper case maei kar deta hai. For Exmaple,

// let firstName = "Rohit Kumar Sharma";
// firstName = firstName.toUpperCase();
// console.log(firstName);

// variableName.toLowerCase() -- Content ko lower case maei kar deta hai. For Exmaple,

// let firstName = "Rohit Kumar Sharma";
// firstName = firstName.toLowerCase();
// console.log(firstName);

// variableName.slice() -- Ya content ko between se slice(kaat) deta hai. For Example,

// start index
// end index
// variableName.slice(startIndex, endIndex);
// R  O  H  I  T  A  B  H  A  Y
// 0  1  2  3  4  5  6  7  8  9

// let firstName = "RohitAbhay";
// console.log(firstName);
// firstName = firstName.slice(0, 5);
// console.log(firstName);

// typeof operator

// let age = 20;
// let firstName = "Rohit";
// console.log(typeof age);
// console.log(typeof firstName);
// console.log(typeof 20);
// console.log(typeof "Rohit");

// data types (primitive data types)
// (1.) string "Rohit"
// (2.) number 2, 4, 5.6
// (3.) booleans
// (4.) undefined
// (5.) null
// (6.) BigInt
// (7.) Symbol


// 20(Number) = "20"(String)
// convert number to string.

// let age = 20;
// console.log(typeof age);
// age = String(age);
// console.log(typeof age);

// ----- Trick -----

// let age = 22;
// age = age + "";
// console.log(typeof age);

// convert string to number.

// let firstName = "20";
// console.log(typeof firstName);
// firstName = Number(firstName);
// console.log(typeof firstName);

// ----- Trick -----
// Step -- 1
// let newStr = "20";
// console.log(typeof newStr);
// newStr = +newStr;
// console.log(typeof newStr);

// Step -- 2
// let newStr = +"20";
// console.log(typeof newStr);

// string concatenation (concatenation ka matlab hai two strings ko add karna). For Example,

// let firstName = "Rohit";
// let lastName = "Kumar";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// let string1 = "17";
// let string2 = "10";

// let newString = +string1 + +string2;
// console.log(newString);

// template string

// let age = 20;
// let firstName = "Rohit";

// // "My name is Rohit and My age is 20"

// let fullContent = "My name is" + " " + firstName + " "+ "and My age is" + " " + age;
// console.log (fullContent);

// let age = 20;
// let firstName = "Rohit";

// let fullContent = `My name is ${firstName} and My age is ${age}.`; // Template string
// console.log(fullContent);

// undefined

// var fullName;
// console.log(typeof fullName);
// let age;
// console.log(typeof age);

// null

// let myVariable = null;
// console.log(myVariable);
// myVariable = "Rohit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);

// BigInt

// let myNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// let sameMyNumber = BigInt(9999999999999999999999999999999);
// console.log(sameMyNumber);

// Ak bigint and number ko add nahi keya jashakta hai. For Example,

// let myNumber = 123;
// let sameMyNumber = 1234n;
// console.log(myNumber + sameMyNumber);

// booleans & comparison operator

// booleans
// true, false

// let num1 = 3;
// let num2 = 7;

// console.log(num1 > num2);
// console.log(num1 < num2);

// == vs ===
// == -- ya data type check nahi karega(matlab string hai ya fir number). For Example,

// let num1 = 7;
// let num2 = 7;

// console.log(num1 == num2);

// === -- ya data type check karega(matlab string hai ya fir number). For Example,

// let num1 = "7";
// let num2 = 7;

// console.log(num1 === num2);

// != vs !==
// != -- ya data type check nahi karega

// let num1 = 8;
// let num2 = 7;

// console.log(num1 != num2);

// !== -- ya data type check karega

// let num1 = "7";
// let num2 = 7;
// console.log(num1 !== num2);