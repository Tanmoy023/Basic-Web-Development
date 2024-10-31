// Normal Function
function myFunc(name){
    console.log("Hii "+name+" your college is : CEMK");
    console.log("Hii "+name+" your univercity is : MAKAUT");
}
myFunc("Tanmoy");
myFunc("Sankha");

function myFunc2(a, b){
    return a+b;
}
let result = myFunc2(10,5);
console.log("Addition of 10 & 5 is : "+result);

function multiply(c, d=10){
    return c*d;
}
let result2 = multiply(5);
console.log("5 multiply with function value : "+result2);
let result3 = multiply(5,11);
console.log("5 multiply with given value : "+result3);

// Arrow Function
const myFuncVariable = (roll) => {
    console.log("Roll no "+roll+" place present here");
}
myFuncVariable(1);
myFuncVariable(2);
myFuncVariable(3);