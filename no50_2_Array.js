// Those things will change the actual Array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("remove last element of arr by pop() method : " + arr.pop());
console.log("after pop() last element form arr, arr : " + arr);
console.log("add 'nice' in the last of arr by push() method : " + arr.push("nice"));
console.log("after push() new element on arr, arr : " + arr);
console.log("remove first element of arr by shift() method : " + arr.shift());
console.log("after shift() last element form arr, arr : " + arr);
delete arr[2]; // if it able to delete this index element so it return true, oher wise return false
console.log("after remove index no 2 element from arr by delete keyword, arr : " + arr);
