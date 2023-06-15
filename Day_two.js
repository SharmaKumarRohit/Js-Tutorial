// <============= if else condition ==============>
// let num = 15;

// if(num % 2 == 0) {
//     console.log("Even");
// }
// else {
//     console.log("Odd");
// }

// <================ truthy and falsy values =================>

// falsy values -- agr declearetion value maei koei value nahi ho to vo falsy values hoge. For Exmaple,

// false
// ""
// null
// undefined
// 0

// let firstName = ""; // falsy value

// if(firstName) {
//     console.log(firstName);
// }
// else {
//     console.log("firstName is kinda empty");
// }

// truthy values -- agr declearetion value maei koei value ho to vo truthy values hoge. For Exmaple,
// "abc"
// 1, -1

// let firstName = "Rohit";

// if(firstName) {
//     console.log(firstName);
// }
// else {
//     console.log("firstName is kinda empty");
// }

// <============== ternary operator =================>

// let age = 20;
// let drink;

// if(age >= 5) {
//     drink = "coffee";
// }

// else {
//     drink = "milk";
// }

// console.log(drink);

// <=========== ternary operator / conditional operator ===============>

// let age = 20;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// <============ AND(&&) and OR(||) operator ================>

// let age = 20;
// let firstName = "Rohit";

// if(firstName[0] == "R") {
//     console.log("Your Name Starts with R");
// }

// if(age > 18) {
//     console.log("Your age above 18");
// }

// if(firstName[0] == "R" && age > 18) {
//     console.log("Name starts with R and above 18");
// }

// else {
//     console.log("inside else");
// }

// if(firstName[0] == "R" || age > 18) {
//     console.log("Name starts with R and above 18");
// }

// else {
//     console.log("inside else");
// }

// <============ nested if else ================>

// Creating for guessing Game
// winning number 19

// 19 your guess is right
// 17 too low
// 20 too hight
// prompt -- prompt ko input lene ka leya use karte hai. By default prompt string maei ho ta hai aur number ko v string maei convert kar deta hai, esleya fir se esha number maei karne ka leya prompt ka befor maei additionSymbol(+) ka use karte hai geshashe wo fir se number maei convert ho jaei.

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number between(0 to 30)");

// if(userGuess == winningNumber) {
//     console.log("Your Guess is Right");
// }

// else {
//     if(userGuess > winningNumber) {
//         console.log("Your Guess is high");
//     }

//     else {
//         console.log("Your Guess is low");
//     }
// }

// <============ else if =============>
// if
// else if
// else if
// else if
// else

// let tempInDegree = 45;

// if(tempInDegree < 0) {
//     console.log("extremely cold outside");
// }

// else if(tempInDegree < 16) {
//     console.log("It is cold outside");
// }

// else if(tempInDegree < 25) {
//     console.log("wheather is okay");
// }

// else if(tempInDegree < 35) {
//     console.log("Lets go for swim");
// }

// else if(tempInDegree < 45) {
//     console.log("turn on AC");
// }

// else {
//     console.log("too hot!!");
// }

// let day = 1;

// if(day == 1) {
//     console.log("Monday");
// }

// else if(day == 2) {
//     console.log("Tuesday");
// }

// else if(day == 3) {
//     console.log("Wednesday");
// }

// else if(day == 4) {
//     console.log("Thrusday");
// }

// else if(day == 5) {
//     console.log("Friday");
// }
// else if(day == 6) {
//     console.log("Saturday");
// }

// else if(day == 7) {
//     console.log("Sunday");
// }

// else {
//     console.log("Invalid day");
// }

// <============== switch statement ================>

// let day = 0;

// switch(day) {
//     case 0:
//         console.log("Monday");
//         break;
//     case 1:
//         console.log("Tuesday");
//         break;
//     case 2:
//         console.log("Wednesday");
//         break;
//     case 3:
//         console.log("Thrusday");
//         break;
//     case 4:
//         console.log("Friday");
//         break;
//     case 5:
//         console.log("Saturday");
//         break;
//     case 6:
//         console.log("Sunday");
//         break;
//     default : console.log("Invalid Day");
// }

// <=============== while loop ================>
// let i = 0;

// while(i <= 9) {
//     console.log(i);
//     i++;
// }

// console.log(`current value is ${i}`);
// console.log("hello");

// <============ while loop example ==============>
// let sum = 0, i = 0;

// while(i <= 10) {
//     sum += i;
//     i++;
// }

// console.log("Sum is :", sum);

// (n*(n+1))/2 -- formula of sum first n natural number

// let n = 10;
// let sum = (n*(n+1))/2;
// console.log(sum);

// <=============== intro to for loop ==================>
// print 0 to 9

// for(let i = 0; i<=9; i++) {
//     console.log(i);
// }

// <============ for loop example =============>

// sum of 10 natural number.

// let sum = 0;
// for(let i = 0; i<=10; i++) {
//     sum += i;
// }
// console.log(sum);

// factorial of 10 natural number

// let fact = 1;
// for(let i = 1; i<=10; i++) {
//     fact = fact * i;
// }

// console.log(fact);

// <================ break keyword ================>

// for(let i = 0; i<=9; i++) {
//     if(i == 5) {
//         break;
//     }
//     console.log(i);
// }

// console.log("Hello there");

// <================ continue keyword ===============>

// for(let i = 0; i<=9; i++) {
//     if(i == 5) {
//         continue;
//     }
//     console.log(i);
// }

// console.log("Hello there");

// <================= do while loop ================>

// do while loop -- Do While loop ak bar chalta he chalta hai, keyu na execution wrong he ho.

// let i = 10;

// do{
//     console.log(i);
//     i++;
// }while(i<=9);

// console.log(`Current value is ${i}`);

// <============== intro to arrays =============>
// This is a reference data type or object data type
// Array -- collection of mixed data type are called arrys. For example, -- number(1, 2, 2.5), string("abc", "Rohit").
// Array -- ordered collection of items. For Example,

// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let mixed = [1, 2, 3.14, 2.5, "abc", "Rohit"];
// console.log(mixed);
// console.log(mixed[0]);
// console.log(mixed[1]);
// console.log(mixed[2]);
// console.log(mixed[3]);
// console.log(mixed[4]);
// console.log(mixed[5]);

// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits);
// fruits[0] = "banana";
// console.log(fruits);

// let obj = {}; // object literal
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));



// <============== how to create arrays ================>

// let number = [1, 2, 3, 4, 5];
// console.log(number);
// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);

// <============== array indexing =====================>

// let mixed = [1, 2.5, "abc", null, undefined];
// console.log(mixed);
// console.log(mixed[0]);
// console.log(mixed[1]);
// console.log(mixed[2]);
// console.log(mixed[3]);
// console.log(mixed[4]);

// <================ array push pop ====================>

// push(variableName.push()) -- array maei element ko add karega. For Example,

// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits);
// fruits.push("banana");
// console.log(fruits);

// pop(variableName.pop()) -- pop array ka element ko remove karta hai fir ush removed element ko print(console.log) kara shakte hai. For Example,

// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits);
// let popped = fruits.pop();
// console.log(fruits);
// console.log("Popped value is", popped);

// <================= array shift unshift =================>

// unshift(variableName.unshift()) -- unshift array ka element ko starting se add karta hai. For Example,

// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits);
// let fruitUnshifted = fruits.unshift("banana", "myFruits");
// console.log(fruits);

// shift(variableName.shift()) -- shift array ka element ko starting se remove karta hai or removed array element ko store v karta hai. For Example,

// let fruits = ["mango", "apple", "grapes"];
// console.log(fruits);
// let removedFruits = fruits.shift();
// console.log(fruits);

// Note :- (push & pop) fast hai compare to (shift & unshift) se.

// <=============== primitive vs reference data types ====================>

// primitive data type -- primitive data type stack name ke memory maei store hota hai or esh sha increment karne par value change nahi hote hai. For Example,

// let num1 = 6;
// let num2 = num1;
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);
// num1++;
// console.log("After incrementing num1");
// console.log("value is num1 is", num1);
// console.log("value is num2 is", num2);

// Note :- num1 and num2(primitive data type) memory(stack) maei alg alg space lata hai. esh leya num1 ko increment karne par num1 value change hogae but num2 ke nahi.

// Reference data type -- Reference data type heap name ke memory maei store hote hai or esh ka value ko change karne par value change nahi hote hai. For Example,

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("After pushing element to arrary1");
// console.log("array1", array1);
// console.log("array2", array2);

// Note :- array1 and array2(Reference data type) ko same memory(Heap) address melne ka karan array1 and array2 maei same value input huwa, esleya same output print(console.log) huwa.