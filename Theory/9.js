// //LEXICAL SCOPING --> local varaiable + parent LS
// let a = 10;
// console.log(a);//10 hoisting doesn't exist
// function fun(){
//     console.log(a);//10
// }
// fun();
// //Lexical Scope
// //It is defined as local memory(MCP) + parents lexical scope(which means parents local memory and its parents LS and so onnnn...)

///------------------------------O/p ------100 10-------
// let a1 = 10;
// function fun1(){
//     let b = 100;
//     function fun2(){
//         console.log(b);
//         function fun3(){
//             console.log(a1);
//         }
//         fun3();
//     }
//     fun2();
// }
// fun1();

// ///------------------------------O/p ------undefined 200 10-------
// var a2 = 10;
// function fun2(){
//     console.log(a2);//undefined
//     var a2 = 200;
//     console.log(a2);//200
// }
// fun2();
// console.log(a2);//10

// ///------------------------------O/p ------10 10 10-------
// var a22 = 10;
// function fun2(){
//     console.log(a22);//10
//     // var a2 = 200;
//     console.log(a22);//10
// }
// fun2();
// console.log(a22);//10

// ///------------------------------O/p ------10 Error-------
// var a = 10;
// if(true){
//     console.log(a);//10
//     var a = 200;
//     console.log(b);//Uncaught ReferenceError: Cannot access 'b' before .....due to let type variable below DTZ makes error
//     console.log(a);
// }
// let b = 300;
// console.log(b);

// ///------------------------------O/p ------10 200 10 200 300-------
// var a = 10;
// if(true){
//     console.log(a);//10
//     var b = 200;
//     console.log(b);//200
//     console.log(a);//10
// }
// console.log(b);//200
// b = 300;
// console.log(b);//300


// ///------------------------------O/p ------10 undefined 200 300-------
var a = 10;
if(true){
    console.log(a);//10
    var a = 200;
    console.log(b);//undefined due to lexical scope of b var type
    console.log(a);//200
}
var b = 300;
console.log(b);//300