for (let i = 0; i < 10; i++) { // TRaditional for loop
    console.log(i);
}

const OBJ ={
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e"
}
for (const key in OBJ) { // for-in loop
    if (Object.hasOwnProperty.call(OBJ, key)) {
        const element = OBJ[key];
        console.log(key,":",element);
    }
}

for(const c of "Tanmoy"){ // for-of loop
    console.log(c);
}

let w = 10;
while(w>0){ // while loop
    console.log(w);
    w--;
}

let d = -10;
do{ // do-while loop
    console.log(d);
    d--;
} while(d>0);