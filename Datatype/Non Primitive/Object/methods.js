
// let obj = {
//     id : 1,
//     name:"shivam",
//     phone:9685430664
// }


// //

// console.log(Object)



// let myObj =[
//     {
//         id:1
//     },
//     {
//         id:2
//     }
// ]


// console.log(myObj);
// console.log(myObj[0]);
// console.log(myObj[1]);



// let objs = {
//     id:1,
//     name:"shivam",
//     phone:9685430664
// }

//freeze  -> nothing is possible

// Object.freeze(objs);
// console.log(Object.isFrozen());
// objs.id=2;    -> not possible
// objs.age=25;     -> not possible
// delete obj.name;   -> not possible
// console.log(objs);



//seal -> only update possible

// Object.seal(objs)
// console.log(Object.isSealed(objs));
// objs.id=2;   
// objs.age=25;     -> not possible
// delete obj.name;   -> not possible
// console.log(objs);



// assign

// let a = {
//     id: 1,
//     city: "bilaspur",   
// }
// let b = {
//     id: 2,
//     phone: 9685430664,
//     state: "chhattisgarh"
// }

// let c = Object.assign(a,b);
// console.log(c);




// let obj = {
//     id:1,
//     name:"shivam",
//     phone:9685430664
// }


//keys and values and entries
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));




// create method takes {} or null
let obj = Object.create({});
console.log(obj)
obj.id=1;

console.log(obj);
console.log( typeof obj);