// delete and replace element from Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.splice(8); // from 8 index delete all element
console.log("in arr from 8 index delete all element then, arr : " + arr);

arr.splice(1, 2); // from 1 index delete 2 element
console.log("in arr from 1 index delete 2 element then, arr : " + arr);

arr.splice(1, 2, 300, 400, 500); // from 1 index delete 2 element and put 300,400,500 in there
console.log("in arr from 1 index delete 2 element and put 300, 400 & 500 in there then, arr : " +arr);
