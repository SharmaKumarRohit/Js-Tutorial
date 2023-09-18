// <======================= find method =======================>

// variableName.find() - find() method v as a input callback function ko leta hai. For example,

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string) {
//     return string.length === 3;
// }

// const ans = isLength3("dog");
// console.log(ans);

// const myArray = ["Hello", "cat", "dog", "lion"];

// function isLength3(string) {
//     return string.length === 3;
// }

// const ans = isLength3("doggy");
// console.log(ans);

// const myArray = ["Hello", "cat", "dog", "lion"];
// const myArray = ["Hello", "catt", "dog", "lion"];
// const myArray = ["Hello", "catt", "doggy", "lion"];
// const myArray = ["Hello", "cat", "doggy", "lion"];

// function isLength3(string) {
//     return string.length ===3;
// }

// const ans = myArray.find(isLength3);
// console.log(ans);

// const myArray = ["Hello", "cat", "dog", "lion"];

// const ans = myArray.find((string) => {
//     return string.length === 3;
// });

// console.log(ans);

// const myArray = ["Hello", "cat", "dog", "lion"];

// const ans = myArray.find(string => string.length === 3);
// console.log(ans);

// const users = [
//     {userId : 1, userName : "Rohit"},
//     {userId : 2, userName : "Abhay"},
//     {userId : 3, userName : "myComputer"},
//     {userId : 4, userName : "Faizan"},
//     {userId : 5, userName : "Santosh"},
// ];

// const ans = users.find((user) => user.userId === 3);
// console.log(ans);

// const users = [
//     {userId : 1, userName : "Rohit"},
//     {userId : 2, userName : "Abhay"},
//     {userId : 3, userName : "myComputer"},
//     {userId : 4, userName : "Faizan"},
//     {userId : 5, userName : "Santosh"},
// ];

// const userData = users.find((user) => {
//     return user.userId === 3;
// });

// console.log(userData);

// const users = [
//     {userId : 1, userName : "Rohit"},
//     {userId : 2, userName : "Abhay"},
//     {userId : 3, userName : "myComputer"},
//     {userId : 4, userName : "Faizan"},
//     {userId : 5, userName : "Santosh"},
// ];

// const userData = users.find(function(user) {
//     return user.userId === 3;
// });

// console.log(userData);

// const users = [
//     {userId : 1, userName : "Rohit"},
//     {userId : 2, userName : "Abhay"},
//     {userId : 3, userName : "myComputer"},
//     {userId : 4, userName : "Faizan"},
//     {userId : 5, userName : "Santosh"},
// ];

// function isUserData(user) {
//     return user.userId === 3;
// }

// const ans = users.find(isUserData);
// console.log(ans);

// <================== every method ==================>
// variableName.every() - every() method tab he true return karega jab array element true hoo. For example,

// const numbers = [2, 4, 6, 8, 10];
// // every method maei agar all numbers even hoga to he true return hoga nahi to false return karega, agar ak v odd hoga to false return karega.
// // callback function -------> true / false (boolena)

// // every method --------> true / false (boolean)

// const isEven = numbers.every((even) => {
//     return even % 2 === 0;
// });
// console.log(isEven);

// const numbers = [2, 4, 6, 8, 10]; // // ya condition true return karega.

// // every() method maei agar array ka all numbers satisfy(even numbers) hoga too he true return karega agar ak v condition satisfy nahi hoga too false return karega.

// const isEven = numbers.every((even) => {
//     return even % 2 === 0;
// });
// console.log(isEven);

// const numbers = [2, 4, 6, 9, 10]; // ya condition false return karega.
// const isEven = numbers.every((even) => {
//     return even % 2 === 0;
// });
// console.log(isEven);

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 15000},
// ];

// const ans = userCart.every((productItem) => {
//     return productItem.price < 30000;
// });
// console.log(ans);

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 35000},
// ];

// const ans = userCart.every((productItem) => productItem.price < 30000);
// console.log(ans);

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 15000},
// ];

// const ans = userCart.every(function(productItem) {
//     return productItem.price < 30000;
// });
// console.log(ans);

// <======================== some method ==========================>
// variableName.some() - some() maei agar element ka ak v condition satisfy hoga to true return karega , agar element maei ak v condition satisfy nahi hoga to wow false return karega.

// const numbers = [3, 5, 7, 8, 9];
// const isEven = numbers.some((even) => even % 2 === 0);
// console.log(isEven);

// const numbers = [3, 5, 7, 9, 11];

// // kya ek bhi number esa hai jo even hai, agar hai to true return karega nahi too false return karega.
// const isEven = numbers.some((even) => {
//     return even % 2 === 0;
// });
// console.log(isEven);

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 15000},
//     {productId : 4, productName : "macbook", price : 250000},
// ];

// const ans = userCart.some((productItem) => productItem.price > 100000);
// console.log(ans);

// const userCart = [
//     {productId : 1, productName : "mobile", price : 12000},
//     {productId : 2, productName : "laptop", price : 22000},
//     {productId : 3, productName : "tv", price : 15000},
//     {productId : 4, productName : "macbook", price : 250000},
//     {productId : 5, productName : "iPhone", price : 150000},
// ];

// const ans = userCart.some(function(productItem) {
//     return productItem.price > 100000;
// });
// console.log(ans);

// <=================== fill method ====================>

// const myArray = new Array(10).fill(-1);
// // new(keyword)
// // new Array(value) -- new Array(10) se ak new array banega jesh maei 10 item hoga.
// // and fill(value) -- fill(-1) method se new Array maei kon se value hoge wow define hoga.
// console.log(myArray);

// const myArray = new Array(10).fill(0);
// console.log(myArray);
// <---------- value, start, end ----------->

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // variableName.fill(value, startingIndex, endingIndex);

// myArray.fill(0, 2, 5);
// console.log(myArray);

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// myArray.fill(0, 1, 4);
// console.log(myArray);

// <================= splice method ==================>
// <-------- start, delete, insert ------------->

// const myArray = ["item1", "item2", "item3"];
// // delete
// // variableName.splice(startingIndex, delete)
// // startingIndex kaha se start karna hai. For example, 0(index), 1(index), 2(index), 3(index)
// // delete(value of delete item) ketna item ko delete karna hai.

// myArray.splice(1, 1);
// console.log(myArray);

// const myArray = ["item1", "item2", "item3"];
// myArray.splice(2, 1);
// console.log(myArray);

// const myArray = ["item1", "item2", "item3"];
// // insert
// //variableName.splice(startingIndex, delete(value), insert);
// // startingIndex kaha se start karna hai. For example, 0(index), 1(index), 2(index), 3(index)
// // fill on delete value
// // insert kya karna hai. For example, string, number etc.
// myArray.splice(1, 0, "inserted Item");
// console.log(myArray);

// const myArray = ["item1", "item2", "item3"];
// myArray.splice(2, 0, "inserted item1", "inserted item2");
// console.log(myArray);

// const myArray = ["item1", "item2", "item3"];
// myArray.splice(0, 3, "Rohit", "Abhay", "myComputer");
// console.log(myArray);

// const myArray = ["item1", "item2", "item3"];
// myArray.splice(1, 2, "insertedItem2", "insertedItem3");
// console.log(myArray);

// <------ deleted item ko print v kara shakte hai. ------------>

// const myArray = ["item1", "item2", "item3"];
// const deletedItem = myArray.splice(1, 1);
// console.log(deletedItem); // ya deleted item ko print karega.
// console.log(myArray);

// const myArray = ["item1", "item2", "item3"];
// const deletedItem = myArray.splice(0, 3);
// console.log(deletedItem); // deleted item ko print v kara shakte hai.
// console.log(myArray);

// <=============== iterables ===================>
// jispe hum for of loop laga sake wow iterables kahee jate hai.
// string, array are iterable

// <--------- string iterable hote hai. --------->

// const firstName = "Rohit";
// for(let char of firstName) {
//     console.log(char);
// }

// <---------- array iterable hote hai ------------->

// const items = ['item1', 'item2', 'item3'];
// for(let item of items) {
//     console.log(item);
// }

// <---------- object iterable nahi hote hai ------------>

// const obj = {'key1' : 'value1', 'key2' : 'value2'};
// for(let objs of obj) {
//     // <------- object is not iterable ------------>
//     console.log(objs);
// }

// <================== array like object ================>
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai wow array like object kahte hai.
// example :- string

// const firstName = "Rohit";
// // <----- string array like object hote hai ------>
// // <------ string ko boolege array like object ------->
// console.log(firstName.length);
// console.log(firstName[2]);

// const firstName = "Abhay";
// console.log(firstName.length);
// console.log(firstName[3]);

// <=================== Sets (it is iterable) =====================>
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed -- set ka andar order ke v koe guarante nahi hai, agar koe Set([1, 2, 3]) hai to wow Set[(2, 1, 3)] v ho shakta hai.
// unique items only (no duplicates allowed)

// const numbers = new Set([1, 2, 3]); // set banane ka syntax phale new keyword fir space fir set();
// // set ka andar koe v iterable(string and array) ko define kar shakte hai.
// console.log(numbers);

// const numbers = new Set([1, 2, 3, 3]);
// // set ka andar duplicates allowed nahi hai, ak element ko ak set maei ak he baar present hoga, dubaara fir wahe element present nahi hoga. For example, 3 ko ak element maei ak he baar write down kar shakte hai, fir write down nahi kar shate hai.
// // agar set maei koe number repeat hoga to set ushe ignore kar dega add nahi karega.
// console.log(numbers);

// console.log(numbers[0]); // No index-based access
// // set ka andar kiess index ko access nahi kar shakte hai, agar karega to wow result maei undefined dega.

// const strings = new Set("abc");
// // set maei string v durable hai.
// console.log(strings);

// set ko empty set rakhte hai, fir
// const numbers = new Set();
// // variableName.add(value) --  add() se value ko set ka andar add v karte hai.
// numbers.add(1);
// numbers.add(2);
// console.log(numbers);

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(items);
// numbers.add(items);
// // agar maei esh items ko again add karu set maei to items add nahi hoge kukiee set main duplicate allowed nahi hai.
// // agar items add keya too items ignore hoga, add nahi hoga.
// console.log(numbers);

// agar items ko direct add keya jae too wow add hoga, kukiee direct add karne par dono ke memory address different hoge, aur items add hogaega. For example,

// const numbers = new Set();
// numbers.add(1);
// numbers.add(['item1', 'item2']);
// numbers.add(['item1', 'item2']);
// console.log(numbers);

// set maei agar kiee element ko check karna hai kee wow element hai ya fir nahi hai, esh ka leya ak method hai has() method.
// variableName.has(value) - has() check karega ke wow element hai ya fir nahi.
// has() se check karega ke wow element ush set maei hai ya fir nahi. For example,

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(items);
// if(numbers.has(1)) {
//     console.log("1 is present");
// }
// else {
//     console.log("1 is not present");
// }
// console.log(numbers);

// <------- set are iterable(set iterable hote hai.) ----->
// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// for(let number of numbers) {
//     console.log(number);
// }

// <----- set ko tab use karna chaheya jab apk pass koe unique value ho. For example, unique ids

// const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);
// console.log(myArray);

// <--- set ka andar direct length property ko use karka length find nahi kar shakte hai. For example -->

// const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements.length);

// <-- find length on set use this trick ---->

// const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// const uniqueElements = new Set(myArray);
// // esh set ka andar ketna unique element hai, 5 unique element hai.
// let length = 0;
// for(let element of uniqueElements) {
//     length++;
// }
// console.log(length);

// const myArray = [1, 2, 4, 4, 5, 6, 5, 6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements) {
//     length++;
// }
// console.log(`Unique value is ${length}`);