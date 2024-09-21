//❤️❤️
let a = 10;
console.log(a);//10 hoisting doesn't exist
a = 100;

if(true){
    let a = 200;
    console.log(a);//200
}
console.log(a);//100

//❤️❤️
var a = 10;
console.log(a);//10  hoisting doesn't exist
a = 100;

if(true){
    var a = 200;
    console.log(a);//200
}
console.log(a);//200


//❤️❤️
let a = 10;
console.log(a);//10  hoisting doesn't exist
a = 100;

if(true){
    var a = 200;
    console.log(a);//200
}
console.log(a);//200