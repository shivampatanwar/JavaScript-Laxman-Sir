


// global scope
// var a= 10;

// function d(){
//     var b = 20;   // functional scope

// }

// d();0
// console.log(a);
// // console.log(b);  //  b is not defined




// Global scope
// var a = 10;
// let b = 20;
// const c = 30;


// Access inside Function
// function z() {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// z();


// Access inside Block
// {
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }




// Functional Scope


// function z() {
//     var a = 10;
//     let b = 20;
//     const c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// z();

// console.log(a);  // a is not defined because Function Scope we can not access outside
// console.log(b);  // b is not defined because Function Scope we can not access outside
// console.log(c); // c is not defined because Function Scope we can not access outside




// Block Scope
{
    var a = 10;
    let b = 20;
    const c = 30;
    // console.log(a);
    // console.log(b);
    // console.log(c);
}

console.log(a);
// console.log(b);  // b is not defined because Block Scope we can not access outside
// console.log(c); // c is not defined because Block Scope we can not access outside