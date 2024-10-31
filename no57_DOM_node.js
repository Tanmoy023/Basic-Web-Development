// console.log("Hellow world");
// console.log(document.body);
// console.log(document.body.childNodes); // in the body each and every element concider childNodes(element / element.className) of body. any space, tab and text between two element there all are also concider as a childNodes(text). comment's are concider as a childNodes(comment). all of those childNodes store in a array
// console.log(document.body.childNodes[0]);

// children node or element
let a = document.body.childNodes[1]; // store the result of 'document.body.childNodes[1]' in a variable.
// console.log(a);
// console.log(a.childNodes);
// console.log(a.firstChild); // dom.firstChild give first childNodes
// console.log(a.lastChild); // dom.lastChild give last childNodes
// console.log(a.firstElementChild); // it avoid all text childNodes and only give a actual element childNodes, which is also be his first element childNodes
// console.log(a.lastElementChild); // same as firstElementChild it give a last element childNodes.

// a.firstElementChild.style.color = "blue";
// a.lastElementChild.style.backgroundColor = "red";

// console.log(a.children); // it egnor all text childNodes and give all element childNodes, as children

// let b = a.childNodes
// console.log(b[1]);

// sibling node or element
// console.log(a.children[3].nextElementSibling); // give next element of a.children[3]
// console.log(a.children[3].previousElementSibling); // give previous element of a.children[3]

// parent node or element
// console.log(a.parentElement); // give the parentElement of given dom


// let t = document.body.children[1];
// console.log(t);
// console.log(t.rows); // give each and every tr-tag of this table
// console.log(t.caption); // give the caption-tag of this table 
// console.log(t.tHead); // output : null ?
// console.log(t.tFoot); // output : null ?
// console.log(t.tBodies); // ?
// console.log(t.tBodies.rows); // output: undefined ?