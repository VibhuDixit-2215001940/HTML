fun();//This is possible in js  to call function before its initiazalization
        //Thus in js hoisting for function is okkkkkk.
console.log(a);//undefined
var a = 10;

function fun(){
    console.log("Function fun called");
}
//HOISTING --> Accessing a variable or a function before its declaration is called Hoisting.
//All (let, var & const) can be hoist but in 2 diff. styles.
//var --> in this case we get undefined
//let, const --> in this case we get error
// Dead Temporal Zone(DTZ)

//✌️✌️
fun1();
console.log(a1);//Uncaught ReferenceError: Cannot access 'a1' before initialization-->Means that it is send in DT zone which is b|w MCP & CEP
let a1 = 10;

function fun1(){
    console.log("Function fun called2 times");
}


//✌️✌️
fun2();
console.log(a2);//Uncaught ReferenceError: Cannot access 'a2' before initialization -->Means that it is send in DT zone which is b|w MCP & CEP
const a2 = 10;

function fun2(){
    console.log("Function fun called 3 times");
}


//✌️✌️
fun2();
console.log(a2);//Uncaught ReferenceError: a2 is not defined
// let a2 = 10;

function fun2(){
    console.log("Function fun called 3 times");
}