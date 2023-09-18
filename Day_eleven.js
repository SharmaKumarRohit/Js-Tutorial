// <============== Object Oriented JavaScript =====================>
// const user = {
//     firstName : "Rohit",
//     lastName : "Kumar",
//     email : "rohitkumar@gmail.com",
//     age : 2,
//     address : "House Number, Colony, pincode, state",
//     about : function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }
// }

// // agar mere pass 1 user agar hai too ya object right hai, but user 1 se over huae too for example, 1000 ya 2000 huae too ya right nahi hai. soution below,

// const aboutUser = user.about();
// console.log(aboutUser);

// <---------- 1.) function (that function create object) --------------->
// <----------- 2.) add key value pair -------------->
// <--------- 3.) object ko return krega -------------->

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     }
//     user.is18 = function() {
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     }
//     user.is18 = function() {
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user1);

// <--------- Normal function call --------->
// const about = user1.about();
// console.log(about);
// const is18 = user1.is18();
// console.log(is18);

// <--------- call method function call ---------->
// const about = user1.about.call(user1);
// console.log(about);
// const is18 = user1.is18.call(user1);
// console.log(is18);

// <------- apply method function call --------->
// const about = user1.about.apply(user1);
// console.log(about);
// const is18 = user1.is18.apply(user1);
// console.log(is18);

// <----- bind method function return karega. ----------->
// const about = user1.about.bind(user1);
// console.log(about);
// const is18 = user1.is18.bind(user1);
// console.log(is18);

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     }
//     user.is18 = function() {
//         return this.age >= 18;
//     }
//     return user;
// }

// // but, this is a complex problem.

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// const user1About = user1.about();
// console.log(user1About);
// const user1Is18 = user1.is18();
// console.log(user1Is18);

// const user2 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// const user2About = user2.about.call(user2);
// console.log(user2About);
// const user2Is18 = user2.is18.call(user2);
// console.log(user2Is18);

// const user3 = createUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 19, "my table");
// console.log(user3);
// const user3About = user3.about.apply(user3);
// console.log(user3About);
// const user3Is18 = user3.is18.apply(user3);
// console.log(user3Is18);

// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }
// }

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} Years Old.`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }
// }

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());

// const user2 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));

// const user3 = createUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 18, "my table");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));

// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     },
//     sing : function() {
//         return 'toon na na na la la';
//     }
// }

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     user.sing = userMethods.sing;
//     return user;
// }

// const user1 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = {
//     key3 : "value3",
// }

// console.log(obj1.key1);
// console.log(obj1.key2);
// console.log(obj2.key3);

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = {
//     key3 : "value3",
// }

// // maei chata hu ke agar obj2 ka pass key1 na meila too JavaScript khud jaea obj1 ka pass aur dekha ke obj1 maei key1 hai ya nahi hai agar hai too obj2 ka leya key1 leka aae, aur print kare.
// console.log(obj2.key1);

// const obj2 = {};
// obj2.key3 = "value3";
// console.log(obj2.key3);

// there is one more way to create empty object.(matlab JavaScript maei ak aur method hai jeshe empty object create keya ja shakta hai. For example,)
// Object.create(object variableName)

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// console.log(obj2.key3);
// console.log(obj2.key1);

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = Object.create(obj1);
// // console.log(obj2);
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// // console.log(obj2.key2);
// console.log(obj2.key3);

// this is happening

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// // __proto__

// // offical ecmascript documentation

// // [[prototype]]

// // __proto__, [[prototype]] - jab empty object create karte hai aur object link karte ush ka baad joob object print hota hai ush ka necha __proto__ ya fir [[prototype]] lekha hota hai.
// // browser maei agar __proto ho ya fir [[prototype]] doono he same hai aur dono ka matlab v same he hai.

// // prototype

// // __proto__, [[prototype]] ya doono same hai, but prototype same nahi hai ya doono ka.
// // browser maei __proto__ ashe lekha hoga ya fir [[prototype]] ashe lekha hoga.

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// console.log(obj2);
// console.log(obj2.__proto__); // obj2 ka proto hogaya obj1 ka shath line 293 ka karan(const obj2 = Object.create(obj1);)
// // obj2.__proto__ - eshe dandar v bolte hai
// // abhi hamne baat ke __proto__ ki
// // jisko documentation mein [[prototype]] likha hua hai
// // browser ke console mei __proto__ bhi likha ho sakta hai
// // aur [[prototype]] bhi likha ho sakta hai
// // javaScript mai ek prototype property alag se bhi hoti hai
// // prototype function maei hoti hai.
// console.log(obj2.__proto__);
// // obj2 ka __proto__ hua obj1 se keshe hua Object.create() property se eshe empty object v create hota hai aur ak obj ko second obj se link v kar shak te hai. taa ke agar obj2 maei wow value na hoo too wow obj1 maei value ko find kare.

// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     },
//     sing : function() {
//         return "toon na na na la la";
//     }
// }

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     user.sing = userMethods.sing;
//     return user;
// }

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// const user2 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));
// console.log(user2.sing.call(user2));

// const user3 = createUser('myComputer', 'Cham', 'mycomputercham@gmail.com', 18, "my address");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));
// console.log(user3.sing.apply(user3));

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = Object.create(obj1);
// obj2.key3 = "value3";
// // obj2.key2 = "unique";
// console.log(obj2.key3);
// console.log(obj2.key2);

// const userMethods = {
//     about : function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     },
//     sing : function() {
//         return "toon na na na la la";
//     }
// }

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser('Rohit', 'Sharma', 'rohitsharma@gmail.com', 35, "Mumbai");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// const user2 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "Bihar");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));
// console.log(user2.sing.call(user2));

// const user3 = createUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 19, "Burnpur");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));
// console.log(user3.sing.apply(user3));
// // This is a improve code for object orientent JavaScript.