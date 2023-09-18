// <==================== important array methods =======================>

// const numbers = [4, 2, 5, 8];

// function multiplyBy2(number, index) {
//     // console.log("index is", index);
//     // console.log(`${number} X 2 = ${number * 2}`);
//     console.log(`index is ${index} and number is ${number} X 2 = ${number * 2}`);
// }

// // multiplyBy2(numbers[0], 0);
// // multiplyBy2(numbers[1], 1);
// // multiplyBy2(numbers[2], 2);
// // multiplyBy2(numbers[3], 3);

// for(let i = 0; i<numbers.length; i++) {
//     // console.log(numbers[i]);
//     // console.log(i);
//     multiplyBy2(numbers[i], i);
// }

// <-------------------- forEach method -------------------->
// variableName.forEach() - forEach() array ko change nahi karta hai, balke wo condition ka heshab se newArray deta hai.

// const numbers = [4, 2, 5, 8];

// const multiplyBy2 = function(number, index) {
//     console.log(`index is ${index} and number is ${number} X 2 = ${number * 2}`);
// }

// numbers.forEach(multiplyBy2);

// const numbers = [4, 2, 5, 8];

// numbers.forEach(function(number, index) {
//     console.log(`index is ${index} and number is ${number} X 2 = ${number * 2}`);
// });

// const numbers = [4, 2, 5, 8];

// numbers.forEach(function(number, index) {
//     // console.log(number * 2);
//     // console.log(`${number} x 3 = ${number * 3}`);
//     console.log(`${number} x 3 = ${number * 3}, index is ${index}`);
// });

// const numbers = [4, 2, 5, 8];

// numbers.forEach((number) => {
//     console.log(`${number} X 2 = ${number * 2}`);
// });

// const users = [
//     {firstName : "Rohit", age : 20},
//     {firstName : "Abhay", age : 20},
//     {firstName : "myComputer", age : 19},
//     {firstName : "Faizan", age : 20},
// ]

// // users.forEach((user) => {
// //     console.log(user.firstName);
// // });

// users.forEach(function(user) {
//     console.log(user.firstName);
// });

// for(let user of users) {
//     console.log(user.firstName);
// }
// <-------------------- map method ------------------------>
// variableName.map() - map() array ko change nahi karta hai, balke wo condition ka heshab se newArray deta hai.

// const numbers = [2, 4, 5, 1, 8];

// const square = function(number) {
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const numbers = [3, 4, 6, 1, 8];

// function square(number) {
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const numbers = [3, 4, 6, 1, 8];

// const square = (number) => {
//     return number * number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const numbers = [1, 2, 3, 4, 5];

// const squareNumber = numbers.map(function(number) {
//     return number * number;
// });

// console.log(squareNumber);

// const numbers = [1, 2, 3, 4, 5];

// const squareNumber = numbers.map((number) => {
//     return number * number;
// });

// console.log(squareNumber);

// const numbers = [1, 2, 3, 4, 5];

// const squareNumber = numbers.map((number, index) => {
//     return `number is ${number * number} and index is ${index}`;
// });

// console.log(squareNumber);

// const users = [
//     {firstName : "Rohit", age : 20},
//     {firstName : "Abhay", age : 20},
//     {firstName : "myComputer", age : 19},
//     {firstName : "Faizan", age : 20},
// ];

// users.map((user) => {
//     console.log(user.firstName);
// });

// // for(let user of users) {
// //     console.log(user.firstName);
// // }

// const users = [
//     {firstName : "Rohit", age : 20},
//     {firstName : "Abhay", age : 20},
//     {firstName : "myComputer", age : 19},
//     {firstName : "Faizan", age : 20},
// ];

// const userNames = users.map(function(user) {
//     return user.firstName;
// });

// console.log(userNames);

// const users = [
//     {firstName : "Rohit", age : 20},
//     {firstName : "Abhay", age : 20},
//     {firstName : "myComputer", age : 19},
//     {firstName : "Faizan", age : 20},
// ];

// const userNames = users.map((user) => {
//     return user.firstName;
// });

// console.log(userNames);

// const users = [
//     {firstName : "Rohit", age : 20},
//     {firstName : "Abhay", age : 20},
//     {firstName : "myComputer", age : 19},
//     {firstName : "Faizan", age : 20},
// ];

// const userNames = users.map(user => {
//     return user.firstName;
// });

// console.log(userNames);
// <-------------------- filter method ---------------------->
// variableName.filter() - filter() array ko change nahi karta hai, balke wo condition ka heshab se newArray deta hai.

// const numbers = [1, 2, 3, 4, 5, 6];

// const isEven = function(number) {
//     return number % 2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isOdd = function(number) {
//     return number % 2 !== 0;
// }

// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isEven = (number) => {
//     return number % 2 === 0;
// }

// const evenNumber = numbers.filter(isEven);
// console.log(evenNumber);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isOdd = (number) => {
//     return number % 2 !== 0;
// }

// const oddNumbers = numbers.filter(isOdd);
// console.log(oddNumbers);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isEven = numbers.filter((number) => {
//     return number % 2 === 0;
// });

// console.log(isEven);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isOdd = numbers.filter((number) => {
//     return number % 2 !== 0;
// });

// console.log(isOdd);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isEven = numbers.filter(function(number) {
//     return number % 2 === 0;
// });

// console.log(isEven);

// const numbers = [1, 2, 3, 4, 5, 6];

// const isOdd = numbers.filter(function(number) {
//     return number % 2 !== 0;
// });

// console.log(isOdd);
// <-------------------- reduce ---------------------->
// variableName.reduce() -- reduce maei two value ko pass keya jata hai.
// variableName.reduce() - reduce() direct value deta hai.

// const numbers = [1, 2, 3, 4, 5, 10];

// // aim : sum of all numbers in array

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);

// accumulator, currentValue , return
//      1              2          3
//      3              3          6
//      6              4          10
//      10             5          15
//      15             10         25

// const numbers = [1, 2, 3, 4, 5, 10];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

// accumulator, currentValue, return
//      0              1         1
//      1              2         3
//      3              3         6
//      6              4         10
//      10             5         15
//      15             10        25

// const numbers = [1, 2, 3, 4, 5, 10];

// const sum = numbers.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 10];

// const calculate = function(accumulator, currentValue) {
//     return accumulator + currentValue;
// }

// const sum = numbers.reduce(calculate);
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5, 10];

// const calculate = (accumulator, currentValue) => {
//     return accumulator + currentValue;
// }

// const sum = numbers.reduce(calculate);
// console.log(sum);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ];

// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 0);

// console.log(totalAmount);

// totalPrice, currentProduct(currentValue), return
//      0                    {12000}             12000
//    12000                {22000}             34000
//    34000                {15000}             49000

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 15000}
// ];

// const totalAmount = userCart.reduce(function(totalPrice, currentProduct) {
//     return totalPrice + currentProduct.price;
// }, 0);

// console.log(totalAmount);

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 15000},
// ];

// const totalAmount = userCart.reduce(function(totalPrice, currentProduct) {
//     return totalPrice + currentProduct.price;
// }, 0);

// console.log(totalAmount);

// <===================== sort method ======================>
// <-------------- ASCII TABLE --------------->
// <-------------- char : ascii value ----------->

// '0' : 48
// '1' : 49
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57



// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64



// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122



// '{' : 123
// '|' : 124
// '}' : 125

// sort
// 5, 9 1200, 400, 3000   -- eshe mujhee sort karna hai, ascending order(small to big) and descending order(big to small). For example,
// 5, 9, 400, 1200, 3000 -- ascending order
// 3000, 1200, 400, 9, 5 -- descending order

// sort karne ka leya javaScript maei ak method hai, sort(variableName.sort()) method.
// javaScript numbers ko number shamajh ka sort nahi karta balke string shamajh ka karta hai.
// sort as a argument callback function leta hai.

// const numbers = [5, 9, 1200, 400, 3000];
// // [5, 9, 1200, 400, 3000];
// // [53(5), 57(9), 49(1), 52(4), 51(3)] - upar ka numbers ka ascii value.

// numbers.sort();
// console.log(numbers);  // esh ka output wrong hai. fix it below:-

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a, b)=>{
//     return a - b;  // // Note : - value ko ascending order maei laneai ka leya function maei return a - b write down karte hai.

// });
// console.log(numbers);  // esh ka output right hai.

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers);

// 1200, 410
// a - b ----------> 790
// a - b ----------> postive (greater than 0) -----> huwa to phalaei b(410) and fir a(1200) hoga.
// b fir a aaega
// 410, 1200

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a, b) => {
//     return b - a;
// });
// console.log(numbers);

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort(function(a, b) {
//     return b - a;
// });
// console.log(numbers);

// a - b -------> negative --------> hoga to phaleai a hoga fir b hoga.
// 5, 9 -------> -4
// a hoga fir b hoga
// 5, 9

// Note : - value ko descending order maei laneai ka leya function maei return b - a write down karte hai.


// javaScript names ko upperCase(big letter) se lowerCase(small letter) ka side sort karta hai.
// befor(phale) upperCase ko sort karega fir after(baad) lowerCase ko sort karega.

// const userNames = ['rohit','abc', 'aabc', 'abhay', 'myComputer', 'faizan', 'Rohit', 'Abhay', 'ABC'];
// userNames.sort();
// console.log(userNames);

// <---------- realistic example of sort method ----------->

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];

// products.sort((a, b) => {
//     return a.price - b.price;
// });
// console.log(products);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];

// products.sort(function(a, b) {
//     return a.price - b.price;
// });
// console.log(products);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];

// products.sort((a, b) => {
//     return b.price - a.price;
// });
// console.log(products);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];
// products.sort(function(a, b) {
//     return b.price - a.price;
// });
// console.log(products);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];

// const lowToHigh = products.slice(0).sort(function(a, b) {
//     return a.price - b.price;
// });

// console.log(lowToHigh);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];

// const highToLow = products.slice(0).sort((a, b) => {
//     return b.price - a.price;
// });

// console.log(highToLow);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ];

// const lowToHigh = products.slice(0).sort((a, b) => {
//     return a.price - b.price;
// });

// console.log(products);
// console.log(lowToHigh);

// const products = [
//     {productId : 1, productName : "p1", price : 300},
//     {productId : 2, productName : "p2", price : 3000},
//     {productId : 3, productName : "p3", price : 200},
//     {productId : 4, productName : "p4", price : 8000},
//     {productId : 5, productName : "p5", price : 500},
// ]

// const highToLow = products.slice(0).sort(function(a, b) {
//     return b.price - a.price;
// });

// console.log(products);
// console.log(highToLow);