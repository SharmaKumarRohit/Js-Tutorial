// <========================= Maps ==========================>
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects


// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object ko object literal v kahte hai.
// object literal
// key --> string
// key --> symbol
// object literal ka keys(firstName and age) hamesha string and symbol maei hota hai.

// const person = {
//     "firstName" : "Rohit",
//     "age" : 6,
//     1 : "one",
// }
// console.log(person[1]);
// console.log(person["1"]);
// console.log(person);
// for(let key in person) {
//     // console.log(key);
//     console.log(typeof key);
// }
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person.age);
// console.log(person["age"]);

// const person = {
//     firstName : "Rohit",
//     age : 6,
// }
// console.log(person.firstName);
// console.log(person["firstName"]);

// <---- maps v apna andar object key value pairs ko store karega. ----->

// const person = new Map(); // Map ko define karne ka syntax
// // new(keyword) space Map();
// // Map() maei key value ko add karne ka leya set() ka use karte hai.
// // variableName.set('key', 'keyValue') -- set() This property use Map() maei value ko add karta hai.
// person.set('firstName', 'Rohit');
// person.set('age', 7);
// person.set(1, 'one');
// console.log(person);
// // map(object) ke value ko person.firstName ya person["firstName"] se access nahi kar shate hai. agar print karega too result maei undefined dega.
// // console.log(person.firstName);
// // console.log(person["firstName"]);

// // Map(object) ke value ko access karne ka leya get() method ka use karte hai.
// // variableName.get() - get() se map ke value ko access karte hai.
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.get(1));

// // map object ka all keys ko print karne ka leya keys() method ka use karhei hai.
// // varibleName.keys() - keys() ka use Map() ka all keys value ko access karne ka leya use karte hai.
// console.log(person.keys()); // keys() method MapIterator hota hai.

// // keys() par loop chala kar v print kar shate hai.
// for(let key of person.keys()) {
//     // console.log(key);
//     console.log(key, typeof key);
// }

// <--- map() object maei koe key value pair de shakte hai. For example,

// const person = new Map();
// person.set([1, 2, 3], "oneTwoThree");
// person.set({1: 'one'}, "oneAnotherOne");
// console.log(person);
// console.log(person.keys());
// for(let key of person.keys()) {
//     // console.log(key);
//     console.log(key, typeof key);
// }

// <---- Note :- Map(object) and map method dono defferent hai, nake same. ------>
// <----- map is an iterable ----->

// const person = new Map();
// person.set('firstName', 'Rohit');
// person.set('age', 7);
// person.set(1, 'one');

// // for(let key of person) {
// //     console.log(key);
// //     // map iterat ho kar array de ta hai.
// //     // console.log(Array.isArray(key));
// // }

// for(let [key, value] of person) {
//     // console.log(key, value);
//     console.log(`${key} : ${value}`);
// }

// const person = new Map([['firstName', 'Rohit'],['age', 7]]);
// console.log(person);
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.keys());

// const person = new Map([['firstName', 'Rohit'], ['age', 7]]);
// console.log(person);
// console.log(person.get("firstName"));
// console.log(person.get("age"));
// console.log(person.keys());

// for(let key of person.keys()) {
//     console.log(key);
// }

// for(let [key, value] of person) {
//     console.log(key, value);
// }

// const person1 = {
//     id: 1,
//     firstName: "Rohit",
// }

// const userInfo = new Map();
// userInfo.set(person1, {age: 7, gender: "male"});
// console.log(userInfo);
// console.log(person1.id);
// console.log(person1.firstName);
// console.log(userInfo.get(person1));
// console.log(userInfo.get(person1).age);
// console.log(userInfo.get(person1).gender);

// const person1 = {
//     id: 1,
//     firstName: "Rohit",
// }

// const person2 = {
//     id: 2,
//     firstName: "myComputer",
// }

// const extraInfo = new Map();

// extraInfo.set(person1, {age: 8, gender: "male"});
// extraInfo.set(person2, {age: 9, gender: "female"});
// console.log(extraInfo);

// // Person1 Info
// console.log(person1.id);
// console.log(person1.firstName);
// console.log(extraInfo.get(person1));
// console.log(extraInfo.get(person1).age);
// console.log(extraInfo.get(person1).gender);

// // Person2 Info
// console.log(person2.id);
// console.log(person2.firstName);
// console.log(extraInfo.get(person2));
// console.log(extraInfo.get(person2).age);
// console.log(extraInfo.get(person2).gender);

// <=================== clone using Object.assign =====================>

// object store hota hai heap name ke memory maei.

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// }

// esh object maei obj ka value obj2 maei assign keya gaya.

// const obj2 = obj;
// console.log(obj);
// console.log(obj2);

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = obj;
// obj.key3 = "value3";
// // obj maei agar value add keya too wow value obj2 maei v assign hogaya keuke obj and obj2 ak he memory ko point kar rahe hai, but maei nahi chata ke obj maei add keya value obj2 maei assign hoo. ush ka leya object ko clone karna hota hai.
// // cloning doo types se kar shakte hai - 1) spread opreater and 2) Object.assign
// // cloning karne se agar maei obj maei value ko add karu too wow value obj2 maei add nahi hoga, ya cloning karne ka faeeda hai.
// console.log(obj);
// console.log(obj2);

// <-------- cloning for spread operator --------->
// spread operator(...variableName)
// spread operator new version ka new method hai.

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = {...obj}; // using spread operator
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = {...obj};
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// <------ Object.assign() ----------->
// Object.assign({}, variableName) - Object.assign(curly bracket empty hoga{}, variableName(object))
// Object.assign() old version ka old method hai.

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);

// const obj = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = Object.assign({}, obj);
// obj.key3 = "value3";
// obj2.key4 = "value4";
// console.log(obj);
// console.log(obj2);

// <============= optional chaining ===============>

// const user = {
//     firstName : "Rohit",
//     address : {houseNumber : 12345},
// }

// console.log(user);
// console.log(user.firstName);
// console.log(user.address);
// console.log(user.address.houseNumber);

// const user = {
//     firstName : "Rohit",
//     // address : {houseNumber : 1234},
//     // ya address aave na ho but, baad maei aagaei(address) taab tak address ko print kare to error na dee ush ka leya dot(.) ka befor(pahla) question mark(?) lagate hai jeshe wow error too throw nahi karega but, undefined result maei print karega.
//     // object maei key value na hone par fir v print keya gaya hoo too wow undefined dee but, error na dee.
//     // object maei key value na hone par fir v print keya gaya hoo too esh error ko stop karne ka leya dot(.) before(pahla) question mark(?) lagate hai.
//     // dot(.) ka before question mark(?) laga ne ka matlab hai ke agar object maei key(For example address) hoo too key value ko print karega , agar key value nahi hoo too error na de kar undefined result maei print kare.
//     // question mark(?) before maei and dot(.) after maei lagana hai.
// }

// console.log(user?.firstName); // esh ka matlab hai - agar user.firstName exist kare too key value print hoo nahi too wow error na dee mujhee undefined dee.
// console.log(user?.address?.houseNumber); // esh ka matlab hai - agar user.address.houseNumber exist kare too key value print hoo nahi too wow error na dee mujhee undefined dee.

// const user = {
//     firstName : "Rohit",
//     // address : {houseNumber : 1234567890},
// }

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);