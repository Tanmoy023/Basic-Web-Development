console.log(3**4);
console.log("3" == 3); // '==' check the value is same or not
console.log("3" === 3);
console.log("3" === "3"); // '===' check the value with his type
let a = 3; var b = 3;
console.log(a === b); // both are integer type

let age = 18;
if(age < 18){
    console.log("Your age is lower then 18. Soo you can't drive");
}
else if(age == 18){
    console.log("Just now you are aligible for driving.");
}
else{
    console.log("You are aligible for driving");
}

let d, e=12, f=10;
d = (e<f) ? (f-e) : (e-f); // if (e<f) is true then do (f-e) other wise do (e-f);
console.log(d);