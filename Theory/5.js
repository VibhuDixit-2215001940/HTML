//for-in are applied on non iterable items thus can be applied on objects only.
let obj = {     //Non linear Unordered
    naam : 'kaju',
    age : 1,
    papa : 'Sudhanshu'

}
for(let i in obj){
    console.log(i);//naam age papa 
    //Only keys will be print as for in loops directed to only keys.✨✨
    console.log(obj.i);//undefined  
    //In for in loops . dot operator doesn't work array method works✨✨
    console.log(obj[i]);//kaju 1 sudhanshu
}

//Outside the for-in loops . dot operator works
console.log(obj.age);//1
//Outside the for-in loops arrays method doesn't work
console.log(obj[1]);//undefined



//for-of loops are applied on iterable items thus can be applied on arrays.Not on objects.
let chotaKaju = [10,20,true,null,5.1,60];//linear ordered
for(let j of chotaKaju){
    console.log(j);//10,20,true,null,5.1,60
}

