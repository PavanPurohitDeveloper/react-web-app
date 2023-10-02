/* eslint-disable */
function f1() {
    var x = 10;
    if (x == 10) {
        var y = 20;
        var y = 30; //this is called shadowing
    }
    console.log("f1() ==> x=" + x + " y=" + y);
}

f1();

function f2() {
    x = 10;
    console.log("f2() ==> x=" + x);
    var x; // this is called hoisting..
}

f2();

//let == block scope variable
function f3() {
    let x; //this is outerblock
    x = 10;
    if (x == 10) { //this is inner block
        let y = 20;
        console.log("f3() ==> x=" + x + " y=" + y); //this is accessible.. will work..
    }
    //console.log("f3() ==> x=" + x + " y=" + y); //this will give error
}

f3();

//const
function f4() {
    const x = 10;
    //x = 20; //this will not allow
    console.log("f4() ==> x=" + x)
}

f4();

//string - backtick  ` `
function f5() {
    var username = "John";
    var age = 22;
    var msg1 = "Hello !" + " " + username + "you will be " + (age + 1) + " next year.";
    console.log("f5() ==> " + msg1);

    var msg2 = `Hello ! ${username} you will be ${age + 1} next year.`;
    console.log("f5() ==> " + msg2);
}

f5();

//undefined
function f6() {
    var x;
    console.log("x= " + x);

}

f6();

//Array
function f7() {
    var values = ["A", 10, true, ["Hyd", "Delhi"], function () { console.log("Hello!") }];
    console.log(values[1]);
    console.log(values[3][1]);
    console.log(values[4]()); //paranthesis is used to call the function inside array.

    var [name, id, stock, cities, hello] = values;
    console.log("f7() ==> " + cities[1]);
    hello(); //to access the function..
}
f7();

function f8() {

    var x = 10; //


}