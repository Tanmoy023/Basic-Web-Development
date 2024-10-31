let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Array with for loop
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

// Array with forEach loop
 arr.forEach((value, index, array)=>{
    console.log(value,index,array);
 })

// Array with forOf loop
 for (const value of arr) {
    console.log(value);
}

// Array with map
let newArr = arr.map((value, index, array)=>{
    return value**2;
})
console.log(newArr);

// Array with filter
const myFunc =(a) =>{
    if(a>8){
        return true;
    }
    return false
}
console.log(arr.filter(myFunc)) // output : [ 9, 10 ]
// 'Filter' is used to create a new array from an existing one, containing only those items that satisfy a condition specified in a function. 

// Array with reduce
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const add = (a, b) =>{
    return a+b;
}
console.log(arr2.reduce(add)); // output : 45
// 'Reduce' is used to apply a function against an accumulator and each element in the array, with the aim of reducing the array to a single output value.

// Array form a string
console.log(Array.from("Tanmoy"));