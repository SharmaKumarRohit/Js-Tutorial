// <======================== block scope vs function scope =============================>

// let and const are block scope -- agar kisee block meai let and const hai to aap usha(let and const) ushe block ka andar access kar shakte hoo. ush block ka bahar access nahi kar shakte hoo. For example,

// {
//     // let and const access nahi hoga keueke esha block ka bahar access keya jaraha hai.
//     // let firstName = "Rohit";
//     // const firstName = "Rohit";
// }

// console.log(firstName);

// Ab eshe(let and const) access kar shakte hai keueke ya block ka andar hai. eshliya access kar shakte hai. For example,
// {
//     let firstName = "Rohit";
//     // const firstName = "Rohit";
//     console.log(firstName);
// }

// {
//     let  firstName = "Rohit";
// }

// console.log(firstName);

// {
//     const firstName = "Abhay";
//     console.log(firstName);
// }

// var is function scope -- var ko block ka andar hoo ya fir block ka bahar ushe(var ko) kahe v access keya jaa shakta hai. For example,

// {
//     // var ko block bahar access keya jaa shakta hai.

//     var firstName = "Rohit";
// }
// console.log(firstName);

// {
//     // var ko block ka andar v access keya jaa shakta hai.

//     var firstName = "Rohit";
//     console.log(firstName);
// }

// {
//     var firstName = "Rohit";
//     console.log(firstName);
// }

// {
//     console.log(firstName);
// }

// <------- Note:- curly brackets( {} ) ka andar ka content ko block kahte hai. ---------->

// if(true) {
//     console.log("myComputer");
// }

// if(true) {
//     let firstName = "myComputer";
//     console.log(firstName);
// }

// if(true) {
//     // let firstName = "myComputer";
//     var firstName = "myComputer";
// }

// console.log(firstName);

// function myApp() {
//     if(true) {
//         // let firstName = "myComputer";
//         var firstName = "myComputer";
//         console.log(firstName);
//     }

//     if(true) {
//         console.log(firstName);
//     }

//     console.log(firstName);
// }

// myApp();

// <==================== default parameters ==================>

// <------ default parameters ka matlab hai ke agar parameter maei value nahi deya hoo too parameter maei aalag se value defined karte hai. For example, ---------->

// function addTwo(a, b) {
//     return a + b;
// }

// // const ans = addTwo(4, 5);
// const ans = addTwo(4);
// console.log(ans);

// function addTwo(a, b) {
//     if(typeof b === "undefined") {
//         b = 0;
//     }

//     // undefined ko solve karne ka leya ya old method hai.

//     return a + b;
// }

// const ans = addTwo(4);
// console.log(ans);

// function addTwo(a, b = 0) {
//     return a + b;
// }

// // const ans = addTwo(4, 8);
// const ans = addTwo(4);
// console.log(ans);

// <==================== rest parameters ======================>

// <------ rest parameters ka matlab hai kisee function maei defined element ka aalaba v another element ko add kar lena are called rest parameters. For example, ---------->

// function myFunc(a, b, c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// myFunc(4, 5, 6, 9, 10, 11);

// function myFunc(a, b, ...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     // console.log(`c is ${c}`);
//     console.log(`c is`, c);
// }

// myFunc(4, 5, 6, 9, 10, 11);

// function addAll(...number) {
//     let sum = 0;
//     for(let num of number) {
//         sum += num;
//     }
//     return sum;
// }

// const ans = addAll(1, 2, 3, 4, 5);
// console.log(ans);

// const myFunc = function(...numbers) {
//     let sum = 0;
//     for(let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// const ans = myFunc(1, 2, 3, 4, 5);
// console.log(ans);

// const addAll = (...numbers) => {
//     let sum = 0;
//     for(let number of numbers) {
//         sum += number;
//     }
//     return sum;
// }

// const ans = addAll(1, 2, 3, 4, 5);
// console.log(ans);

// function factTorial(...numbers) {
//     let fact = 1;
//     for(let number of numbers) {
//         fact *= number;
//     }
//     return fact;
// }

// const ans = factTorial(1, 2, 3, 4, 5);
// console.log(ans);

// const factTorial = function(...numbers) {
//     let fact = 1;
//     for(let number of numbers) {
//         fact *= number;
//     }
//     return fact;
// }

// const ans = factTorial(1, 2, 3, 4, 5, 6);
// console.log(ans);

// const factTorial = (...numbers) => {
//     let fact = 1;
//     for(let number of numbers) {
//         fact *= number;
//     }
//     return fact;
// }

// const ans = factTorial(1, 2, 3, 4, 5);
// console.log(ans);

// <==================== parameter destructuring =========================>

// const person = {
//     firstName : "Rohit",
//     gender : "male",
// }

// const personDetails = (obj) => {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// personDetails(person);

// const person = {
//     firstName : "Rohit",
//     gender : "male",
// }

// const personDetails = function(obj) {
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }

// personDetails(person);

// const person = {
//     firstName : "Rohit",
//     gender : "male"
// }

// const personDetails = ({firstName, gender}) => {
//     console.log(firstName);
//     console.log(gender);
// }

// personDetails(person);

// const person = {
//     firstName : "Rohit",
//     gender : "male",
//     age : 500
// }

// function personDetails({firstName, gender, age}) {
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// personDetails(person);

// <===================== callback function ========================>

// <-------- function ka andar kucha v pass kar shakte hai. For example, array, object, string, number etc. ----------->

// function myFunc(a) {
//     console.log(a);
//     console.log("Hello World");
// }

// // myFunc([1, 3, 4]);
// // myFunc("abc");
// // myFunc({name: "Rohit"});
// myFunc(1);

// function myFunc2(name) {
//     console.log("inside my func 2");
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback) {
//     console.log("Hello there I am a func and I can...")
//     callback("Rohit");
// }

// myFunc(myFunc2);

// Note : - kisee function ko as a input leya aur ushe function maei se callback kardeya. eshe ko he callback function kahte hai.

// const myFunc2 = function(name) {
//     console.log(`Your name is ${name}`);
//     console.log("inside my Func 2");
// }

// const myFunc = function(callback) {
//     console.log("Hello World");
//     callback("Rohit");
// }

// myFunc(myFunc2);

// <====================== function returning function =====================>

// const myFunc = function() {
//     // return "a";
//     // return [1, 2, 3];
//     // return {name: "Rohit", age: 20};
//     return 1;
// }
// const ans = myFunc();
// console.log(ans);

// Note : - function return kara shakte hai.
// function ko return karne par wo gesh variable maei stroe hoga wo variable v function bangaega aur ushe call v karshakte hai. For Exmaple,
// function ko higher order function v kahte hai.

// const myFunc = function() {
//     const hello = function() {
//         // console.log("Hello World");
//         return "Hello World";
//     }
//     return hello;
// }
// const ans = myFunc();
// // console.log(ans);
// // Yaha par ans ak function hai keuke wo(ans) ak function ko store kara hai, jesh she wo v ak function bangaya hai, ab ans v calling function bangaya hai.
// // ans();
// console.log(ans());

// const myFunc = function() {
//     return function() {
//         return "Hello World";
//     }
// }
// const ans = myFunc();
// // console.log(ans);
// ans();
// console.log(ans());