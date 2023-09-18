// let number = [1, 2, 3];
// console.log(number);

// let number = new Array(1, 2, 3);
// console.log(Array.prototype);
// console.log(number);

// kisee number ka prototype ko find karna ka leya Object.getPrototypeOf(variableName) ka use keya jata hai.
// Object.getPrototypeOf(variableName)

// let number = [1, 2, 3];
// Object.getPrototypeOf(number);
// console.log(number);

// let number = [1, 2, 3];
// console.log(Object.getPrototypeOf(number));
// console.log(number);

// let number = [1, 2, 3];
// console.log(Array.isArray(Array.prototype));
// console.log(number);

// function hello() {
//     console.log("Hello");
// }
// // prototype
// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);
// hello.prototype.push("1");
// console.log(hello.prototype);
// console.log(Array.isArray(hello.prototype));

// function hello() {
//     console.log("hello");
// }

// console.log(hello.prototype);
// hello.prototype = {};
// console.log(hello.prototype);
// hello.prototype.key1 = "value1";
// console.log(hello.prototype);
// console.log(hello.prototype.key1);

// function hello() {
//     console.log("hello");
// }

// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);
// hello.prototype.push("1");
// console.log(hello.prototype);

// <===================== class keyword ========================>

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
//     return "too ha na";
// }

// const user1 = new CreateUser('Rohit', 'Kumar', 'rohitkumar@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18.call(user1));
// console.log(user1.sing.apply(user1));
// // this prototype fix it class keyword

// <------- class keyword ------>

// class defineClassName{
//     // class keyword ka andar constructor object create karega.
//     constructor(value1, value2, value3, ....) {
//         this.value1 = value1;
//         this.value2 = value2;
//         this.value3 = value3;
//     }

//     // define prototype value
//     about = function() {
//         console.log("define it prototype");
//     }
// }
// // beina new keyword aap constructor ko call nahi kar shakte.
// const user1 = new defineClassName('value1', 'value2', 'value3', ...);

// <-------- example of class keyword ------->

// class CreateUser {
//     constructor(firstName, lastName, email, age, address) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about = function() {
//         return `${this.firstName} is ${this.lastName} Years Old`;
//     }

//     is18 = function() {
//         return this.age >= 18;
//     }

//     sing = function() {
//         return "too na aa jaja";
//     }
// }

// const user1 = new CreateUser('Rohit', 'Kumar', 'rohitsharma@gmail.com', 3, "my address");
// console.log(user1);
// console.log(user1.about());
// console.log(user1.is18());
// console.log(user1.sing());
// console.log(Object.getPrototypeOf(user1));

// const user2 = new CreateUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user2);
// console.log(user2.about.call(user2));
// console.log(user2.is18.call(user2));
// console.log(user2.sing.call(user2));
// console.log(Object.getPrototypeOf(user2));

// const user3 = new CreateUser('myComputer', 'amazing', 'mycomputeramazing@gmail.com', 18, "my address");
// console.log(user3);
// console.log(user3.about.apply(user3));
// console.log(user3.is18.apply(user3));
// console.log(user3.sing.apply(user3));
// console.log(Object.getPrototypeOf(user3));

// class CreateUser{
//     constructor(firstName, lastName, email, age, address) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about = function() {
//         return `${this.firstName} is ${this.age} Years Old`;
//     }

//     is18 = function() {
//         return this.age >= 18;
//     }

//     sing = function() {
//         return "too na na na la";
//     }

//     func = function(a) {
//         console.log(a);
//     }
// }
// // new keyword ko lagaka he constructor ko call karne hai. nahi to call nahi hoga.
// const user1 = new CreateUser('Abhay', 'Sharma', 'abhaysharma@gmail.com', 20, "my address");
// console.log(user1);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.email);
// console.log(user1.age);
// console.log(user1.address);
// console.log(user1.about());
// console.log(user1.is18.call(user1));
// console.log(user1.sing.apply(user1));
// user1.func("Rohit");
// const userFunc = user1.func.bind(user1);
// userFunc("Rohit");

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     // I'm using it function short method ok, don't confused
//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }
// }

// const animal1 = new Animal('Paatha', 3);
// console.log(animal1);
// console.log(animal1.name);
// console.log(animal1.age);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());
// console.log(animal1.isCute());

// class Dog{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }
// }

// const dog1 = new Dog('tommy', 3);
// console.log(dog1);
// console.log(dog1.name);
// console.log(dog1.age);
// console.log(dog1.eat());
// console.log(dog1.isSuperCute.call(dog1));
// console.log(dog1.isCute.apply(dog1));

// extends - extends property ko use karne se ak class ke property maei de hue all mentods ko extends ke help se dushare class ko v de shakte hai.
// extends se Animal ko de gaei all property use kar shakte hai dushare class maei v. For example, class Dog maei use kar shakte hai.

// <---- Using extends Property ---------->

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }
// }
// // class Dog ko sub or derived Class bolega and class Animal ko parent or base class bolega.
// class Dog extends Animal{

// }

// const tommy = new Dog('tommy', 3);
// console.log(tommy);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.eat());
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     eat() {
//         return `${this.name} is eating`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }
// }

// class Dog extends Animal{

// }

// const tommy = new Dog('tommy', 1);
// console.log(tommy);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.eat());
// console.log(tommy.isSuperCute(tommy));
// console.log(tommy.isCute.apply(tommy));

// object / instance
// Note : - Object ko instance v bolte hai.

// <=============== super() keyword ===============>

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     run() {
//         return `${this.name} is runing at ${this.speed} Kmph`;
//     }
// }

// const tommy = new Dog('tommy', 1, 45);
// console.log(tommy);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.speed);
// console.log(tommy.run());
// console.log(tommy.eat());
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat = function() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute = function() {
//         return this.age <= 1;
//     }
//     isCute = function() {
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     run = function() {
//         return `${this.name} is runing at ${this.speed} Kmph`;
//     }
// }

// const tommy = new Dog('tommy', 1, 45);
// console.log(tommy);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.run());
// console.log(tommy.eat());
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());

// same method is subclass - matlab agar class Dog maei eat() method hue to eat() method execute hoga. agr class Dog maei eat() method nahi hue too wow apne extends maei matlab class Animal maei eat() method ko find karega aur execute karega.

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     eat() {
//         return `Modified Eat : ${this.name} is eating`;
//     }
//     run() {
//         return `${this.name} is runing at ${this.speed} Kmph`;
//     }
// }

// const tommy = new Dog('tommy', 1, 45);
// console.log(tommy);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.speed);
// console.log(tommy.eat());
// console.log(tommy.run.call(tommy));
// console.log(tommy.isSuperCute.apply(tommy));
// const tommyCute = tommy.isCute.bind(tommy);
// console.log(tommyCute());

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     eat() {
//         return `Modified Eat : ${this.name} is eating`;
//     }
//     run() {
//         return `${this.name} is runing at ${this.speed} Kmph`;
//     }
// }

// const tommy = new Dog('tommy', 1, 45);
// console.log(tommy);
// console.log(tommy.name);
// console.log(tommy.age);
// console.log(tommy.eat());
// console.log(tommy.run());
// console.log(tommy.isSuperCute());
// console.log(tommy.isCute());

// <=============== getter and setters ================>

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Rohit', 'Kumar', 3);
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName());
// // maei chata hu ke fullName me parenthesis() na lagau fullName ko property ka jaesha use karu esh ka leya getter method matlab get method ka use karte hai.
// console.log(person1.fullName);
// get method use - get method ko function before(phale) write karne se functionName ke property sameple property ka jasha treat ka shakte hai. For example below,

// <------ Using get method(Getter Method) ------>

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Abhay', 'Sharma', 20);
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.age);
// console.log(person1.fullName);

// <------ setName(value1, value2) --------->
// setName(value1, value2) - setName() method se class ka andar define name ko change kar shakte hai. For example,

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     setName(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Abhay', 'Sharma', 20);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.setName('Rohit', 'Kumar');
// console.log(person1.firstName);
// console.log(person1.lastName);

// biena setName() ko use keya v firstName and lastName ko change keya ja shakta hai. For example,

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('myComputer', 'amazing', 19);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.firstName = "Rohit";
// person1.lastName = "Kumar";
// console.log(person1.firstName);
// console.log(person1.lastName);

// <------- Using set method(Setters Methods) ---------->

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('Rohit', 'Kumar', 3);
// console.log(person1.firstName);
// console.log(person1.lastName);
// person1.fullName = "Abhay Sharma" // but, maei ya chata hue ke maei esh line ka code ko execute karu to result maei mujhee current fullName change ho kar line maei jo fullName hai wow execute ho. aesha karne ka leya set() method matlab setters method ka use karega. For example below,
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() { // get() method se esh fullName ko direct property ka jashe use kar shakta hu.
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" "); // ya split property fullName ka andar ka space ko check karega jashe he split ko space mela wow ak ko firstName maei store karega aur lastName ko v store karga. matlab agar fullName("Rohit Kumar") huwa too Rohit ko firstName maei and Kumar ko lastname maei store karega.
//         // eshe phale array destructuring keya gaya.
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person('Rohit', 'Kumar', 3);
// console.log(person1.fullName);
// person1.fullName = "Abhay Sharma";
// console.log(person1.fullName);

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person('Abhay', 'Sharma', 20);
// console.log(person1);
// console.log(person1.fullName);
// person1.fullName = "Rohit Kumar";
// console.log(person1);
// console.log(person1.fullName);

// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     eat() {
//         return `Modified Eating : ${this.name} is eating`;
//     }
//     run() {
//         return `${this.name} is runing at ${this.speed} Kmph`;
//     }
// }

// const animal1 = new Dog('Sheru', 1, 45);
// console.log(animal1);
// console.log(animal1.eat());

// class Animal{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return `${this.name} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed) {
//         super(name, age);
//         this.speed = speed;
//     }
//     eat() {
//         return `Modified Eating : ${this.name} is eating`;
//     }
//     run() {
//         return `${this.name} is runing at ${this.speed} Kmph`;
//     }
// }

// const animal1 = new Animal('Sheru', 3);
// console.log(animal1);
// console.log(animal1.eat());

// <============== static methods and properties =================>
// static methods and properties direct class par working nahi hai.
// class ka andar methods ko object he call kar shakta hai, but kujh asha kar shakte hai ke direct class see call kara shakte hai, static se.
// static methods direct class se related hote hai.
// static meai ak static method hota hai aur ak static property hote hai.

// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     eat() {
//         return `${this.firstName} is eating`;
//     }
//     isSuperCute() {
//         return this.age <= 1;
//     }
//     isCute() {
//         return true;
//     }
// }
// const person1 = new Person('Rohit', 'Kumar', 3);
// console.log(person1);
// console.log(person1.eat());

// <---- Using static method and static properties ------>

// class Person{
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     // static method - static method ko direct class se he call kar shakte hai(Person.classInfo() static method ko esh tarah se call karega), esh ka leya object banane ke jarurat nahi hote hai. For example,
//     static classInfo() { // this is a static method
//         return "this is person class";
//     }

//     // static property - static property ko direct class se he call kar shakte hai(Person.decs static property ko esh tarah se call karega), esh ka leya object banane ke jarurat nahi hote hai. For example,
//     static decs = "static property"; // this is a static property
    
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     set fullName(fullName) {
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     eat() {
//         return `${this.firstName} is eating`;
//     }

//     isSuperCute() {
//         return this.age <= 1;
//     }

//     isCute() {
//         return true;
//     }
// }

// const person1 = new Person('Abhay', 'Sharma', 20);
// // console.log(person1.classInfo()); // static method ko object ka shath call nahi kar shakte. Direct class ka shath call karte hai.
// const ans = Person.classInfo(); // static method ko print karne ka right method
// console.log(ans);
// // console.log(person1.decs); // static property ko object ka shath print nahi kar shakte. Direct class ka shath print karte hai.
// console.log(Person.decs); // static property ko print karne ka right method

class Person{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    static classInfo() {
        return "this is a static method and this is person class";
    }

    static desc = "static property";

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat() {
        return `${this.firstName} is eating`;
    }

    isSuperCute() {
        return this.age <= 1;
    }

    isCute() {
        return true;
    }
}

const person1 = new Person('Rohit', 'Kumar', 3);
// <---- static method printing --------->
const ans = Person.classInfo();
console.log(ans);
console.log(Person.classInfo());

// <--- static property printing ------>
console.log(Person.desc);

// <----- get() method(Getter Method) printing ------->
console.log(person1.fullName);

// <------ set() method(setters Method) printing -------->
person1.fullName = "Abhay Sharma";
console.log(person1.fullName);

// <------ eat() printing ----->
console.log(person1.eat());

// <----- isSuperCute() printing -------->
console.log(person1.isSuperCute.call(person1));

// <----- isCute() printing ------->
console.log(person1.isCute.apply(person1));