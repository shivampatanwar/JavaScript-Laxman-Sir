


//crud

//create  -> 

// object  literal 
// let obj = {

//     id: 120,
//     name : "shivam"
// }


//read -> 
// console.log(obj.id);
// console.log(obj.name);
// console.log(obj["id"]);
// console.log(obj["name"]);



//update

// existing property
// obj.id=220;

// new property
// obj.age=25;


//delete
//property
// delete obj.age;

//object
// delete obj;  ->   not working

// console.log(obj);






//nested object

let objs = {
    id: 125,
    mobile:{
        name: "samsung",
        color:"black",
        price: 56000
    }
}

// console.log(objs.mobile);

// console.log(objs.mobile.name);
// console.log(objs.mobile.color);
// console.log(objs.mobile.price);


// console.log(objs["mobile"]);

// console.log(objs["mobile"]["name"]);
// console.log(objs["mobile"]["color"]);
// console.log(objs["mobile"]["price"]);




// console.log({}==[]);
// console.log({}===[]);



// console.log(objs=null);

console.log(objs); 

// console.log(`name of phone : ${objs.mobile.name}, color: ${objs.mobile.color}, price : ${objs.mobile.price}`);