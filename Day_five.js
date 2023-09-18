// <======================= objects inside array =========================>
// very useful in real world applications

// const users = [{}, {}, {}];

// const users = [
//     {},
//     {},
//     {},
// ]

// const users = [
//     {userId: 1, userName: "Rohit", gender: "male"},
//     {userId: 2, userName: "Abhay", gender: "male"},
//     {userId: 3, userName: "myComputer", gender: "female"},
// ]

// console.log(users);

// for(let user of users) {
//     console.log(user);
//     console.log(user.userId);
//     console.log(user.userName);
//     console.log(user.gender);
// }

// <======================== nested destructuring ===================>

// const users = [
//     {userId: 1, userName: "Rohit", gender: "male"},
//     {userId: 2, userName: "Abhay", gender: "male"},
//     {userId: 3, userName: "myComputer", gender: "female"},
// ]

// const [] = users; // destructuring

// const [user1, user2, user3] = users;
// console.log(user1, user2, user3);

// const [{userName}, , {gender}] = users;
// console.log(userName);
// console.log(gender);

// const [{userName: user1Name, userId}, , {gender: user3gender}] = users;
// console.log(user1Name);
// console.log(userId);
// console.log(user3gender);

// <===================== Function declaration =========================>

// function singHappyBirthday() {
//     console.log("Happy Birthday to you..........");
// }

// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();

// function twoPlusFour() {
//     console.log(2 + 4);
// }

// twoPlusFour();
// twoPlusFour();
// twoPlusFour();
// twoPlusFour();

// function twoPlusFour() {
//     return 2 + 4;
// }

// twoPlusFour();
// console.log(twoPlusFour());
// const returnValue = twoPlusFour();
// console.log(returnValue);

// function sumTwoNumbers(number1, number2) {
//     return number1 + number2;
// }

// const returnedValue = sumTwoNumbers(9, 5);
// console.log(returnedValue);

// NaN ka matlab hai ke Not a Number(NaN). Or (undefined + undefined) v NaN hota hai.
// console.log(undefined + undefined);

// function sumThreeNumbers(number1, number2, number3) {
//     return number1 + number2 + number3;
// }

// const returnedValue = sumThreeNumbers(2, 3, 4);
// console.log(returnedValue);

// Agar three value ko na dekar two value dege to NaN(Not a Number) dega. For Example,
// console.log(2 + 3 + undefined);

// is Even
// input : 1 number
// output : true, false

// function isEven(num) {
//     return num % 2 == 0;
// }

// const numValue = isEven(2);
// console.log(numValue);

// function isEven(num) {
//     if(num % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isEven(2));

// function isEven(num) {
//     if(num % 2 == 0) {
//         return true;
//     }

//     return false;
// }

// console.log(isEven(2));

// function
// input : string
// output : firstCharacter

// function firstCharacter(firstString) {
//     return firstString[0];
// }

// console.log(firstCharacter("Rohit"));

// function
// input : array, target (number)
// output : index of target if target present in array

// function findTarget(array, target) {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// const myArray = [1, 3, 8, 90];
// const ans = findTarget(myArray, 11);
// console.log(ans);

// function findTarget(array, target) {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i] == target) {
//             return i;
//         }
//     }

//     return -1;
// }

// const myArray = ["Rohit", "Abhay", "myComputer"];
// const ans = findTarget(myArray, "myComputer");
// console.log(ans);

// <====================== function expression ==========================>

// const singHappyBirthday = function() {
//     console.log("Happy BirthDay to you.........");
// }

// singHappyBirthday();

// const sumThreeNumbers = function(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// const ans = sumThreeNumbers(2, 3, 8);
// console.log(ans);

// const isEven = function(num) {
//     return num % 2 === 0;
// }

// const ans = isEven(2);
// console.log(ans);

// const firstCharacter = function(string) {
//     return string[0];
// }

// console.log(firstCharacter("Rohit"));

// const findTarget = function(array, target) {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// const myArray = [1, 3, 8, 90];
// const ans = findTarget(myArray, 90);
// console.log(ans);

// <======================= arrow functions ==========================>

// arrow( => ) -- Esh arrow( => ) ka matlab hai ke ya ak function hai.

// const singHappyBirthday = () => {
//     console.log("Happy Birthday to you.............");
// }

// singHappyBirthday();

// const sumThreeNumbers = (number1, number2, number3) => {
//     return number1 + number2 + number3;
// }

// const ans = sumThreeNumbers(2, 3, 4);
// console.log(ans);

// const isEven = (number) => {
//     return number % 2 === 0;
// }

// const ans = isEven(1);
// console.log(ans);

// const firstCharacter = (anyString) => {
//     return anyString[0];
// }

// const ans = firstCharacter("Abhay");
// console.log(ans);

// const findTarget = (array, target) => {
//     for(let i = 0; i<array.length; i++) {
//         if(array[i] === target) {
//             return i;
//         }
//     }

//     return -1;
// }

// const myArray = [1, 3, 8, 90];
// const ans = findTarget(myArray, 1);
// console.log(ans);

// const isEven = number => {
//     return number % 2 === 0;
// }

// console.log(isEven(2));

// const isEven = number => number % 2 === 0;
// console.log(isEven(2));

// const firstCharacter = anyString => {
//     return anyString[0];
// }

// console.log(firstCharacter("Rohit"));

// const firstCharacter = anyString => anyString[0];

// console.log(firstCharacter("Abhay"));

// <===================== hoisting =======================>

// hello();
// function hello() {
//     console.log("Hello World"); // function declartion ka case maei function declare karne se before wow(function calling) valid but function expersion and function arrow ka case maei invalid hai. Esh behaviour ko hoisting kahte hai.
// }

// hello();
// const hello = function() {
//     console.log("Hello World");
// }

// hello();
// const hello = () => {
//     console.log("Hello World");
// }

// console.log(hello);
// var hello = "Hello World";

// console.log(hello);
// let hello = "Hello World";

// console.log(hello);
// const hello = "Hello World";

// <================ function inside function =====================>

// const app = () => {
//     const myFuc = () => {
//         console.log("hello from myfuc");
//     }

//     const addTwo = (num1, num2) => {
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => {
//         return num1 * num2;
//     }
//     console.log("inside app");
//     myFuc();
//     console.log(addTwo(2, 3));
//     console.log(mul(2, 3));
// }

// app();

// function app() {
//     const myFunc = () => {
//         console.log("hello from myfunc");
//     }

//     const addTwo = (num1, num2) => num1 + num2;

//     const mul = (num1, num2) => num1 * num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2, 3));
//     console.log(mul(2, 3));
// }

// app();

// <==================== lexical scope ==========================>

// lexical scope -- jab kisee function ko another function ka ander banaya jata hai to, variables ko dundtha hai agar variable nahi melta hai to wow function ka bahar dundtha hai. esha he lexical scope kahte hai.

// const myVar = "Value1";

// function myApp() {

//     function myFunc() {
//         // const myVar = "Value69";
//         const myFunc2 = () => {
//             console.log("inside myFunc", myVar);
//         }

//         myFunc2();
//     }

//     console.log(myVar);
//     myFunc();
// }

// myApp();