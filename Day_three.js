// <================== how to clone array ===================>

// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat(["item3", "item4"]);
// let array2 = [].concat(array1);
// let array2 = [].concat(array1, ["item3", "item4"]);
// new way
// spread operator

// let array2 = [...array1];
// let array2 = [...array1, "item3", "item4"];
// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray];

// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1)
// console.log(array2)

// <================= how to concatenate two arrays ==================>

// let array1 = ["item1", "item2"];
// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray];
// let array2 = [...array1, "item3", "item4"];
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);

// <============== for loop in array =================>

// let fruits = ["mango", "apple", "grapes", "banana"];

// console.log(fruits.length);
// console.log(fruits[fruits.length-1])
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// for(let i = 0; i<=fruits.length-1; i++) {
//     console.log(i);
// }

// for(let i = 0; i<fruits.length; i++) {
//     console.log(i);
// }

// for(let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i]);
// }

// print fruits element uppercase

// for(let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i].toUpperCase());
// }

// let fruits2 = [];

// for(let i = 0; i<fruits.length; i++) {
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

// <=================== use const for creating array ========================>

// Heap memory ["mango", "apple"] x011

// const fruits = ["mango", "apple"];
// fruits.push("grapes", "banana");
// console.log(fruits);

// <============= while loop in array ================>

// const fruits = ["mango", "apple", "grapes"];
// const fruits2 = [];

// let i = 0;

// while(i<fruits.length) {
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }

// console.log(fruits2);

// <=================== for of loop in array ==================>

// const fruits = ["mango", "apple", "grapes", "fruits4", "fruits5"];

// for(let fruit of fruits) {
//     console.log(fruit.toUpperCase());
// }

// const fruits = ["mango", "apple", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let fruit of fruits) {
//     fruits2.push(fruit.toUpperCase());
// }

// console.log(fruits2);

// <================ for in loop in array ==================>

// for in loop index(0, 1, 2, 3, 4) ke value ko print karta hai. For Example,

// const fruits = ["mango", "apple", "grapes", "fruits4", "fruits5"];

// for(let index in fruits) {
//     console.log(fruits[index].toUpperCase());
// }

// const fruits = ["mango", "apple", "grapes", "fruits4", "fruits5"];
// const fruits2 = [];

// for(let index in fruits) {
//     fruits2.push(fruits[index].toUpperCase());
// }

// console.log(fruits2);

// <===================== array destructuring =========================>

// const myArray = ["value1", "value2"];

// let myVar1 = myArray[0];
// let myVar2 = myArray[1];

// console.log(myVar1);
// console.log(myVar2);

// const myArray = ["value1", "value2"];

// let [myVar1, myVar2] = myArray;
// console.log(myVar1);
// console.log(myVar2);

// const myArray = ["value1", "value2", "value3"];

// let [myVar1, myVar2, myVar3] = myArray;
// console.log(myVar1);
// console.log(myVar2);
// console.log(myVar3);

// const myArray = ["value1", "value2", "value3"];

// let [myVar1, , myVar2] = myArray;
// console.log("Variable of my array1", myVar1);
// console.log("Variable of my array2", myVar2);

// const myArray = ["v1", "v2", "v3", "v4"];
// let myNewArray = myArray.slice(2);

// let [myVar1, myVar2] = myArray;
// console.log("value of myvar1", myVar1);
// console.log("value of myvar2", myVar2);
// console.log(myNewArray);

// const myArray = ["value1", "value2", "value3", "value4"];

// let [myVar1, myVar2, ...myNewArray] = myArray;
// console.log("value of myVar1", myVar1);
// console.log("value of myVar2", myVar2);
// console.log(myNewArray);

// <==================== objects reference type ==================>

// <===================== arrays are good but not sufficient ========================>

// <===================== for real world data ========================>

// <===================== objects store key value pairs =======================>

// <====================== objects don't have index =====================>

// <===================== how to create objects ========================>

// const person = {name: "Rohit", age: 20};
// console.log(person);
// console.log(typeof person);

// <====================== how to access data from objects ====================>

// <---------- first method ------------>

// const person = {name: "Rohit", age: 20};
// console.log(person);
// console.log(person.name);
// console.log(person.age);

// const person = {
//     name: "Rohit",
//     age: 20,
//     hobbies: ["coding", "playingGame", "Cleaning"]
// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[1]);
// console.log(person.hobbies[2]);

// <---------- second method --------------->

// const person = {
//     name: "Rohit",
//     age: 20,
//     hobbies: ["coding", "playingGames", "Cleaning"]
// }

// console.log(person);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["hobbies"]);
// console.log(person["hobbies"][0]);
// console.log(person["hobbies"][1]);
// console.log(person["hobbies"][2]);

// <====================== how to add key value pair to objects ==================>

// <------------- first method --------------->

// person.gender = "male";
// console.log(person);
// console.log(person.gender);

// <------------ second method ------------->

// person["gender"] = "male";
// console.log(person);
// console.log(person["gender"]);

// <================== difference between dot and bracket notaion =========================>

// const person = {
//     "name": "Rohit",
//     "age": 20,
//     "person hobbies": ["coding", "playingGames", "Cleaning"]
// }

// console.log(person);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["person hobbies"]);
// console.log(person["person hobbies"][0]);
// console.log(person["person hobbies"][1]);
// console.log(person["person hobbies"][2]);

// const key = "email";
// const person = {
//     name: "Rohit",
//     age: 20,
//     "person hobbies": ["coding", "playingGames", "Cleaning"]
// }

// console.log(person);
// person[key] = "abhaysharma@gmail.com";
// console.log(person["email"]);
// console.log(person.email);
// console.log(person);

// <============== how to iterate object ====================>

// for in loop

// const person = {
//     name: "Rohit",
//     age: 20,
//     "person hobbies": ["coding", "playingGames", "Cleaning"]
// }

// for(let key in person) {
//     // console.log(key);
//     // console.log(person[key]);
//     console.log(key, ":", person[key]);
//     // console.log(`${key} : ${person[key]}`);
// }

// Object.keys

// const person = {
//     name: "Rohit",
//     age: 20,
//     "person hobbies": ["coding", "playingGames", "Cleaning"]
// }

// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));
// const val = Array.isArray(Object.keys(person));
// console.log(val);

// for of loop in object

// const person = {
//     name: "Rohit",
//     age: 20,
//     "person hobbies": ["coding", "playingGames", "Cleaning"]
// }

// for(let key of Object.keys(person)) {
//     // console.log(key);
//     // console.log(person[key]);
//     // console.log(key, ":", person[key]);
//     console.log(`${key} : ${person[key]}`);
// }