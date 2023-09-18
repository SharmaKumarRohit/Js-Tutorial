// <================ object oriented javaScript =======================>
// function hello() {
//     console.log("Hello World");
// }

// hello();
// javaScript maei jo function hai wow function too hai, but wow object v hai. For example,
// function combo hai object ka aur function ka
// javaScript function ===> function + object (esh ka matlab hai javaScript function combo hai function ka aur object ka)
// you can add your own(apana) properties

// function hello() {
//     console.log("Hello World");
// }

// hello.myOwnProperties = "my unique value";
// console.log(hello.myOwnProperties); // proved - function object ke tarha behave karta hai.

// functionName.name - ya name property function ka name bata aega. For example,

// function hello() {
//     console.log("Hello World");
// }

// console.log(hello.name);

// name property ---> tells function name;

// function provides more usefull properties. For example, call, apply, bind method bhi provide karta hai function.

// function hameai free spaces provide karta hai. actual mei free space jesa kuch nahi hota free space mai empty object {} ko bol raha hai sirf samjane ke liye hai.

// function ka andar free spaces melte hai esh spaces ko object bolte hai, aur esh space ka object ko prototype kahte hai.

// prototype object eshe function maei value ko add karna ka leya use keya jata hai.

// function hello() {
//     console.log("Hello World");
// }

// console.log(hello.prototype);

// only function provide prototype property

// function hello() {
//     console.log("Hello World"); // prototype present
// }

// const hello = {key1 : "value1"}; // prototype is not present

// const hello = ["value1"]; // prototype is not present

// prototype only function maei he hota hai. aur object and array ka andar nahi hota prototype property.

// if(hello.prototype) {
//     console.log("prototype is present");
// }
// else {
//     console.log("prototype is not present");
// }

// function se jo prototype melta hai, ushe ham use kar shakte hai(value ko add kar shakte hai). For example,

// function hello() {
//     console.log("Hello World");
// }

// hello.prototype.abc = "abc";
// hello.prototype.xyz = "xyz";
// hello.prototype.sing = function() {
//     return "lalalla";
// }
// console.log(hello.prototype.sing());
// console.log(hello.prototype.xyz);
// console.log(hello.prototype.abc);
// console.log(hello.prototype);

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

// const userOne = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(userOne);
// console.log(userOne.about());
// console.log(userOne.is18());
// console.log(userOne.sing());
// console.log(createUser.prototype);

// <------------ Using Prototype method -------------->

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// createUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} Years Old`;
// }

// createUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// createUser.prototype.sing = function() {
//     return "lalalla";
// }

// const user1 = createUser('Rohit', 'kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// const user2 = createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));
// console.log(user2.sing.call(user2));

// const user3 = createUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 19, "my address");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));
// console.log(user3.sing.apply(user3));

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// createUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} Your Old`;
// }

// createUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// createUser.prototype.sing = function() {
//     return "la la la na na";
// }

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18.call(user1));
// // console.log(user1.sing.apply(user1));
// const userOne = user1.sing.bind(user1);
// console.log(userOne());

// <==================== new keyword ==================>
// const createUser = function(firstName, age) {
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function() {
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser('Rohit', 3);
// console.log(user1);
// console.log(user1.firstName);
// console.log(user1.age);
// user1.about();

// new keyword yahaa tein(three) kam kar raha hai.
// 1.) empty object create kar raha hai. aur ush empty object ke value this = {} hai.
// 2.) return karega empty object ko matlab this = {} ko.
// 3.) new keyword prototype maei add keya hua value ko khud he link kar dega, aur mujhee Object.create() need nahi hoge.

// const createUser = function(firstName, lastName, email, age, address) {
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// createUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} Years Old`;
// }

// createUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// createUser.prototype.sing = function() {
//     return "too he hai na";
// }

// const user1 = createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18.call(user1));
// console.log(user1.sing.apply(user1));

// new keyword
// 1.) empty object this = {}
// 2.) return this

// __proto__ and [[prototype]] same as
// __proto__
// official ecmascript document
// [[prototype]]

// constructor function

const createUser = function(firstName, lastName, email, age, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
    // new keyword khud return karta hai, too return karne ke jarurat nahi hai.
}

// createUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} Years Old`;
// }

// createUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// createUser.prototype.sing = function() {
//     return "too na na la la";
// }

// const user1 = new createUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// const user2 = new createUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));
// console.log(user2.sing.call(user2));

// const user3 = new createUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 19, "my address");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));
// console.log(user3.sing.apply(user3));

// const CreateUser = function(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.addres = address;
// }

// CreateUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} Years Old`;
// }

// CreateUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// CreateUser.prototype.sing = function() {
//     return "too na na la de de";
// }

// const user1 = new CreateUser('Rohit', 'Sharma', 'rohitsharma@gmail.com', 35, "Mumbai");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());

// const user2 = new CreateUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));
// console.log(user2.sing.call(user2));

// const user3 = new CreateUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 19, "my address");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));
// console.log(user3.sing.apply(user3));

// const user4 = new CreateUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address")
// console.log(user4);
// const user4one = user4.about.bind(user4);
// console.log(user4one());
// const user4two = user4.is18.bind(user4);
// console.log(user4two());
// const user4three = user4.sing.bind(user4);
// console.log(user4three());

// const CreateUser = function(firstName, lastName, email, age, address) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
// }

// CreateUser.prototype.about = function() {
//     return `${this.firstName} is ${this.age} Years Old`;
// }

// CreateUser.prototype.is18 = function() {
//     return this.age >= 18;
// }

// CreateUser.prototype.sing = function() {
//     return "too na na la na";
// }

// const user1 = new CreateUser('Rohit', 'Kumar', 'rohitsharma@gmail.com', 3, "my address");
// const user2 = new CreateUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// const user3 = new CreateUser('myComputer', 'moon', 'mycomputermoon@gmail.com', 18, "my address");

// // CreateUser ke all key ko print karna hai.
// // for(let key in user1) {
// //     // console.log(key);

// //     if(user1.hasOwnProperty(key)) {
// //         console.log(key);
// //     }
// // }

// // but, maie chata hu ke only CreateUser ke he key ko print kare prototype ke key nahi print kare.
// //esh ka leya property hai, - variableName.hasOwnProperty(loop variableName)
// // example of hasOwnProperty()
// // hasOwnProperty() only CreateUser ke key ko he print karega.

// for(let key in user1) {
//     if(user1.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }