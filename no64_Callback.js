console.log("Line one");
console.log("Line two");
setTimeout(() =>{
    console.log("Line third");
}, 2000);
setTimeout(() =>{
    console.log("Line fourth");
}, 0);
console.log("Line fifth");

const callback = (arg) => {
  console.log(arg);
}
const loadScript = (src, callback) => {
    let sc = document.createElement("Script"); // create a script element
    sc.src = src; // give src value(src="?") to your recently created script element(sc)
    sc.onload = callback("Tanmoy Patra"); // sc.onload mean when this created script is Successfully loaded or completely run, callback("...") is perform
    document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);
