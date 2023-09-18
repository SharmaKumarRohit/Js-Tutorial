// <===================== This methods ======================>
// function inside object - object ka andar function
// methods - agar function ko object ka andar defined ya write karna are called methods.

// const person = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log("person name is Rohit and person age is 8");
//     }
// }

// // console.log(person.about);
// person.about();

// const person = {
//     firstName : "Rohit",
//     // firstName : "Abhay",
//     age : 8,
//     // jab maei firstName change karu to wow change mera function maei define person name maei hona chaheya esh change ko apply karne ka leya this(this.variableName) method ka use karte hai.
//     about : function() {
//         // console.log("person name is Rohit and person age is 8");
//         // console.log(`person name is ${firstName} and person age is ${age}`); // wrong execution
//         // console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//         // console.log(this);
//         // console.log(this.firstName, this.age);
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// }

// person.about();

// const person = {
//     firstName : "Abhay",
//     age : 20,
//     about : function() {
//         console.log(`person name is ${this.firstName} and person age is ${this.age}`);
//     }
// }
// person.about();

// function personInfo() {
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : personInfo
// }

// const person2 = {
//     firstName : "Abhay",
//     age : 20,
//     about : personInfo
// }

// const person3 = {
//     firstName : "myComputer",
//     age : 19,
//     about : personInfo
// }

// person1.about();
// person2.about();
// person3.about();

// <=============== this or window ================>

// console.log(this);
// console.log(window);

// function myFunc() {
//     // console.log(this);
//     console.log(window);
//     // window and this ko direct use karne par javaScript ke window open hojate hai. ash na ho esh leya "use strict" mode ka use karte hai.
//     // this and window dono ak he kam karta hai, aur esh compare karne par true print hoga.
// }
// myFunc();

// "use strict";
// function myFunc() {
//     console.log(this);
// }
// myFunc();

// <================ call, apply, bind ================>

// <================ call method ===================>

// function hello() {
//     console.log("hello world");
// }
// hello(); // function calling direct method and second method below(necha)
// hello.call(); // function ko call dot(.)call() lagakar v karshakte hai

// functionName.call(pointing functionName) - call() method se ak function ka uses another function kaleya v kar shakte hai. bus call() method maei ush function name enter krna hai. For example,

// const person1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const person2 = {
//     firstName : "Abhay",
//     age : 20,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// person1.about();
// person2.about();

// const person1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// // person1.about.call();
// // person1.about.call(person1);

// const person2 = {
//     firstName : "Abhay",
//     age : 8,
// }

// // person1.about.call();
// person1.about.call(person2);

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age,);
//     }
// }

// user1.about();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// // mujhee use karna hai user1 ka about user2 ka leya
// // esh use karne ka leya call() method ka use karte hai.

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// user1.about();
// user1.about.call(user2); // user1 ka about user2 ka leya use keya call() method se.
// user1.about.call(); // agar user1 ka about target kar ke agar call() method ko empty rakha jaei too result meai undefined dega.
// // agar aap chate hai ke undefined na dee too at list wow yourself call() kar ley. For example,
// user1.about.call(user1);

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function(hobby, favMusician) {
//         console.log(this.firstName, this.age, hobby, favMusician);
//     }
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// user1.about.call(user2, "guitar", "mozart");

// function about(hobby, favMusician) {
//     console.log(this.firstName, this.age, hobby, favMusician);
// }

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// about.call(user1,"guitar", "mozart");
// about.call(user2, "guitar", "mozart");

// <============== apply =====================>
// functionName.apply() - apply() v same call() ka jasha hai, but esh maei extra value array maei pass karna hota hai. For example,

// function about(hobby, favMusician) {
//     console.log(this.firstName, this.age, hobby, favMusician);
// }

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// about.apply(user1, ["guitar", "mozart"]);
// about.apply(user2, ["guitar", "mozart"]);

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function(hobby, favMusician) {
//         console.log(this.firstName, this.age, hobby, favMusician);
//     }
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// user1.about.apply(user2, ["guitar", "mozart"]);
// user1.about.apply(user1, ["guitar", "mozart"]);

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// user1.about.apply(user2);
// user1.about.apply();
// user1.about.apply(user1);

// <================ bind =====================>
// functionName.bind() - bind() kuch nahi karega, but bind ak function return karega aur ush function keshe variable maei store kar shakte hai fir variable(function) ko call karbaa shakte hai. For example,

// function about(hobby, favMusician) {
//     console.log(this.firstName, this.age, hobby, favMusician);
// }

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// // const func = about.bind(user1, "guitar", "bach");
// // func();

// const func = about.bind(user2, "guitar", "bach");
// func();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function(hobby, favMusician) {
//         console.log(this.firstName, this.age, hobby, favMusician);
//     }
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// const func1 = user1.about.bind(user2, "guitar", "bach");
// func1();
// const func2 = user1.about.bind(user1, "guitar", "bach");
// func2();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const user2 = {
//     firstName : "Abhay",
//     age : 20,
// }

// const func1 = user1.about.bind(user2);
// func1();
// const func2 = user1.about.bind(user1);
// func2();

// <============= don't do this mistake =================>

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// // don't do this mistake

// // user1.about();
// // avoid this mistake
// // esh maei user1 ke binding(bind() method) myFunc se nahi ke gaei hai, aur this maei koe value assign nahi hoo shakta. and avoid this mistake.
// const myFunc = user1.about;
// myFunc();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : function() {
//         console.log(this.firstName, this.age);
//     }
// }

// const myFunc = user1.about.bind(user1);
// myFunc();

// <================= arrow function ==================>
// arrow function ka this nahi hota. arrow function ka this apna surrounding(window) se leta hai.

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : () => {
//         console.log(this.firstName, this.age);
//     }
// }

// user1.about();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about : () => {
//         console.log(this.firstName, this.age);
//     }
// }
// // arrow function ka jo this hai ushe aap change nahi kar shakte. For example,
// user1.about.call(user1);

// <=============== Object ka function key value pair shortcut ==================>

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     // about : function() {
//     //     console.log(this.firstName, this.age);
//     // }
//     // esh maei direct key value pair write karna hai. For example,
//     about() {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     about() {
//         console.log(this.firstName, this.age);
//     }
// }
// user1.about();

// const user1 = {
//     firstName : "Rohit",
//     age : 8,
//     // object maei function ko write karna ka short method hai.
//     about() {
//         console.log(this.firstName, this.age);
//     }
// }

// Note :- object ka andar ka function ko method v bolte hai.