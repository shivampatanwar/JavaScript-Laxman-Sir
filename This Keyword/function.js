
console.log(window);
console.log(this);


var a = 10;
let b = 20;
const c = 30;

console.log(this.a);
console.log(this.b);
console.log(this.c);

console.log(window.a);
console.log(window.b);
console.log(window.c);


function x() {
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
}
x();