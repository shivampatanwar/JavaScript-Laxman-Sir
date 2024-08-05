
// function gp() {
//     var  a = 10;
//     let b = 20;
//     const c = 30;
//     function p() {
//         let x = 40;
//         console.log(x)
//         console.log(b)
//         function ch() {
//             let y = 50;
//             console.log(y)
//             console.log(c)
//         }
//         ch();
//     }
//     p();

    
// }
// gp();



function gp() {
    var  a = 10;
    let b = 20;
    const c = 30;
    function p() {
        let x = 40;
        console.log(x);
        console.log(b);
        function ch() {
            let y = 50;
            console.log(y);
            console.log(c);
        }
        return ch;
    }
    return p;  
}
gp()()();



