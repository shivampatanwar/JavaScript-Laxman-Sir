function test(callback, t) {
    callback();
    console.log(t);
}


function callback() {
    console.log("Hello");
}

test(callback, "JavaScript");
