

let arr = [500, 600, 900, 700, 5000, 9000];


//map
let map=arr.map((value)=>{fxxx
    // return value+10;
    return value*1.18;
})


let filter = arr.filter((value)=>{
    return value>900;
})


let reduce = arr.reduce((acc, val)=>{
    return acc+val;
}, 0)

console.log(map);
console.log(filter);
console.log(reduce);