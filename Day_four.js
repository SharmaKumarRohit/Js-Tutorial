// <================== computed properties ===================>

// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1", // asha kucha kar na hai.
//     objkey2 : "myvalue2",
// }

// step -- 1

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);

// step -- 2

// const obj = {}

// obj[key1] = value1;
// obj[key2] = value2;

// console.log(obj);

// <======================== spread(...) operator ====================>

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// // const newArray = [...array1, ...array2, 89, 69];
// // const newArray = [..."abc"];
// // const newArray = [..."123456789"];
// const newArray = [..."abc", ..."123456789"]
// console.log(newArray);

// <================== spread(...) operator in object =======================>

// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
// }

// const obj2 = {
//     key3 : "value3",
//     key4 : "value4",
//     key1 : "uniquevalue"
// }

// const newObject = {...obj1};
// const newObject = {...obj2};
// const newObject = {...obj1, ...obj2};
// const newObject = {...obj2, ...obj1};
// const newObject = {...obj1, ...obj2, key69 : "value69"}; // add key value on object
// const newObject = {..."abc"};
// const newObject = {...["item1", "item2"]}
// const newObject = {..."abcdefghijklmnopqrstuvwxyz"}
// console.log(newObject);

// <==================== object destructuring ====================>

// const band = {
//     bandName: "led zeppelin",
//     famousSong: "stairway to heaven",
// }

// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);

// const var1 = band.bandName;
// const var2 = band.famousSong;
// console.log(var1, var2);

// short cut trick

// const band = {
//     bandName: "led zeppeling",
//     famousSong: "stairway to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",
// }

// const {bandName, famousSong} = band;
// console.log(bandName, famousSong);

// const {bandName: var1, famousSong: var2} = band;
// console.log(var1, var2);

// const {bandName, famousSong, ...restProps} = band;
// console.log(bandName, famousSong);
// console.log(restProps);