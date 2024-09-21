// let true = true;//can't be used as variable can't be datatype

// let s = true;
// console.log(s);


//GENERAL COMPARISON:- Typecast is possible
// let ans = s == 1;


//STRICT COMPARISON:- Typecast is not possible
// let ans = s === 1;


// QUE 1
let ans = 18;
if(ans<18){
    console.log("Chala Ja")
}
else if(ans>=18 && ans<=25){
    console.log("Ishq no entry")
}
else{
    console.log("Le maza le")
}

//QUE 2
//agar pahali condition true hogi toh agali check nahi hogi
let attendence = 75;
let marks = 33;
if(attendence > 75 || marks > 33){
    console.log("Pass")
}
else{
    console.log("Fail")
}

//SHORTCIRCUITING PROVING  //agar pahali condition true hogi toh agali check nahi hogi
let attendence1 = 76;
let marks1 = 33;
if(attendence1 > 75 || ma > 33){
    console.log("Pass")
}
else{
    console.log("Fail")
}