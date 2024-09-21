// //Arrays
// //1 D
// let arr = [10,"Sam",true,'Raza',false,undefined,null];
// // console.log(arr);


// //2 D
// let arr1 = [10,20,["Sam",[false,true],"Raza"],30];
// // console.log(arr1[0]);//10
// console.log(arr1[2]);//["Sam",[false,true],"Raza"]
// console.log(arr1[2][1]);//[false,true]
// console.log(arr1[3]);//30

// let arr2 = [10,20,[30,40,[0,600],50],60];
// console.log(arr2[2][2][1]);//600



//ARRAY METHODS
//Function which are defined in an object
// let person = {
//     age:20,//property
//     degree:function(){'Good morning!!'}
// }
// power.age
// // console.log();
// // console.log(person.degree)



let arr3 = [1,2,3,4,1];
console.log(arr3)//[1,2,3,4,1]
console.log(arr3.length);//5
console.log(arr3.lastIndexOf(1))//4
console.log(arr3.pop())//1
let returntype = arr3.pop()
console.log(returntype)//1
// console.log(arr3.find(2))
console.log(arr3.reverse())//copy ele auto deleted [4, 3, 2, 1]
console.log(arr3.toString())//4,3,2,1
arr3.push("Sam")
console.log(arr3)//[4, 3, 2, 1, 'Sam']
let x = arr3.push("ok","no");
console.log(x)      //It returns its length
