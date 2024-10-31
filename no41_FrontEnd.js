alert("Hello user"); // alert is used to display one pop-up to user with a massage
console.log("This code is running now.."); // console.log is use as a print function
var a = prompt("Enter your roll number : "); // prompt is use to take input from user
console.log("Your number is : "+a);
var UserInput = confirm("If you want to use this web site so click ok other wise click cancel");
if(UserInput){
    console.log("Thanks to click ok. your device is safe now.");
}
else{
    console.log("Why you click cancel ? your device is hacked now.");
}
document.title = "Java script introduction"
document.body.style.backgroundColor = "aqua"