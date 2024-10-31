console.log("This is for promises");

let prom1 = new Promise((resolve, reject) => {
    let rd = Math.random();
    console.log(rd);
    if(rd<0.5){
        reject("in prom1 This random number is no supported");
    }
    else{
        setTimeout(() => {
            console.log("Time limit is over for pom1");
            resolve("The End, Successfully for prom1");
        }, 1000)
    }
})
// prom1.then((e) => {
//     console.log(e);
// }).catch((error) => {
//     console.log(error);
// })

let prom2 = new Promise((resolve, reject) => {
    let rd = Math.random();
    console.log(rd);
    if(rd<0.5){
        reject("in prom2 This random number is no supported");
    }
    else{
        setTimeout(() => {
            console.log("Time limit is over for prom2");
            resolve("The End, Successfully for prom2");
        }, 1000)
    }
})

let pAll = Promise.reject([prom1, prom2]);
pAll.then((e) => {
    console.log(e);
}).catch((error) => {
    console.log(error);
})