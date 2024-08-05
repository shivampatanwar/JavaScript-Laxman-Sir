
// let arr = [1, 'hi', null, undefined, 10n, true, {}, function(){}];
// console.log(arr);

// // let a = {};

// // let b = 10;

// //check array is not
// // console.log(Array.isArray(arr));
// // console.log(Array.isArray(a));
// // console.log(Array.isArray(b));





// //1.  unshift  -> begining or start  -> add
// arr.unshift(1000);
// console.log(arr);
// //2.  shift   ->  end -> remove
// // arr.shift(1000);
// arr.shift();
// console.log(arr);



// //3.  push -> begining or start -> add
// arr.push(1000);
// console.log(arr);
// //4.  pop ->  end -> remove
// // arr.pop(1000);
// arr.pop();
// console.log(arr);


// //5. splice
// let ar = [1, 2, 3, 4];

// console.log(ar);
// ar.splice(0, 1, "hi", "java", "js");

// console.log(ar);


// //6. slice 
// let a = [1, 2, 3, 4];
// console.log(a.slice(1,2));


// //6. flat 
// let f = [1, 2, 3, 4, [5, 6, 7]];
// console.log(f.flat());


// let a1 = [1, 2, 3, 4, 5];

// // val 
// for(val of a1){
//     console.log(val);
// }


// // index 
// for(i in a1){
//     console.log(i);
// }

// //foreach
// let b= [1, 2, 3, 4, 5]
// b.forEach((v, i)=>{
//     console.log(i, v);
// }) 


// //reverse
// let c = [1, 2, 3, 4, 5];
// c.reverse()
// console.log(c);


// //include 
// let d = [1, 2, 3, 4, 5];
// console.log(d.includes(5));
// console.log(d.includes(9));


// //add value in any index
// let  e = [1, 2, 3];
// e[6]=50;
// console.log(e);


// //sort
// let aa = [1, 2, 11, 4, 6, 3, 5];
// aa.sort();
// console.log(aa)


// //sort
// let cc = [1, 2, 4, 6, 3, 5];
// let sort = cc.sort((a, b)=>{
//     // return a-b;
//     return b-a;
// })
// console.log(sort);



//toString()
let dd = [1, 2, 3, 4, 5];
console.log(dd.toString());


//join
console.log(dd.join(""));
console.log(dd.join(", "));

//concat
console.log(dd.concat([9, 8, 7], [7, 8, 9]));

//flat 
let p =[1, 2, 3, [4, 5, 6], [7, 8, 9]];
console.log(p);
console.log(p.flat());






