// to add two or more Array's
let Arr1 = ["Tanmoy", "Sankha", "Milan"];
let Arr2 = ["Sankha", "Rahul"];
let Arr3 = ["Nikhil", "Sourip"];
let Arr4 = Arr1.concat();
console.log("After Copy Arr1 in Arr4 then, Arr4 : " + Arr4);
let Arr5 = Arr1.concat(Arr2);
console.log("After add Arr1 and Arr2 in Arr5 then, Arr5 : " + Arr5);
let Arr6 = Arr1.concat(Arr2, Arr3);
console.log("After add Arr1, Arr2 and Arr3 in Arr6 then, Arr6 : " + Arr6);
