

// (function() {
//     console.log("hello");
// })
// (),
// (function() {
//     console.log("hello");
// })
// ();




let s =5;
(function() {
    console.log("hello");
    let s = 50; 
    console.log(s);
})
()



var a =10;
{
    var a = 10;
}


const x = 10;
function p() {
    const x = 100;
    console.log(x);
}
p();