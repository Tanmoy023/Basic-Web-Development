console.log("In java script there 3types of variables are present. -var, let & const");

var a = 4; // using 'var' you can use it globaly
let b = 6; // using 'let' you only use it localy
const id = 23; // using 'const' you only use it localy and you can't change it's value

var myname = "Tanmoy";
let sem = "6th sem";
const title = "patra";

console.log(a + b + 10);
console.log(typeof a, typeof b, typeof myname);
console.log(sem);

// id = 97; // you can't change it just for it is a const variable

if (true) {
    var myname = "suman"; // var is a global variable
    let sem = "six"; // let is a local variable
    const title = "p...."; // const is a local variable
}
console.log(myname);
console.log(sem);
console.log(title);

let d = 21;
let e = 6.74;
let f = "CEMK";
let g = false;
let h = undefined;
let i;
let j = null;
console.log(d, e, f, g, h, i, j);
console.log(typeof d, typeof e, typeof f, typeof g, typeof h, typeof i, typeof j);

let intro = {
    "univercity": "MAKAUT",
    "univercity roll": 10700121097
}
console.log(typeof intro)
console.log(intro);
intro.grad = 7.64;
console.log(intro);
intro.grad = 6.74;
console.log(intro);
