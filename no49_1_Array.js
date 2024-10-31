// Those things don't change the actual Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("arr : " + arr);
console.log("arr length : " + arr.length);
console.log("arr[2] : " + arr[2]);
arr[1] = 100;
console.log("after giving set 100 in arr[1], arr[1] : " + arr[1]);
console.log("type of arr : " + typeof arr); // object
console.log("arr element : " + arr.toString());
console.log("separate all element with '&', arr : " + arr.join(" & "));
console.log("show arr from index 2 : " + arr.slice(2)); // start with index 2 and goto end
console.log("show arr from index 2 to before index 10 : " + arr.slice(2, 10)); // start with index 2 and before of index 10
console.log(arr.slice(0, -2)); // start with index o and go upto before of last 2 array-value. output : [ 0, 1, 2, 3, 4, 5, 6, 7, 8]
console.log("The index of 10 in arr is : "+arr.indexOf(10));