// Class selector
let b = document.getElementsByClassName("box");
console.log(b);
b[2].style.backgroundColor = "red";

// id selector
let i1 = document.getElementById("id-1");
i1.style.color = "aqua";

// query selector
let c = document.querySelector(".box");
c.style.backgroundColor = "yellow";
let cAll = document.querySelectorAll(".box");
cAll.forEach(e => {
    e.style.border = "5px solid black";
})

// Tag name selector
let t = document.getElementsByTagName("div");
console.log(t);

// mathes, closest &
console.log(t[2].matches("#id-1"));
console.log(t[3].matches("#id-1"));
console.log(t[3].closest(".box"));
console.log(document.querySelector(".container").contains(i1));
console.log(document.querySelector(".container").contains(document.querySelector("body")));
console.log(document.querySelector("body").contains(document.querySelector(".container")));

