
//Named Function Hoisting
a();
function a() {
    console.log(10);
}

//Other than nested Function Hoisting
b();
let b = function() {
    console.log("b");
}