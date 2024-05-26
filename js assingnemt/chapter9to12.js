//1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city =("KARACHI: ")
//     if .lower() == "karachi":
//         console.log("Welcome to the city of lights!")
//     else
//         console.log("Welcome!")
function myFunction() {
    let text;
    let person = prompt("Enter city name:");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      text = "Hello " + person + "! WELL COME TO KARACHI?";
    }
    document.getElementById("demo").innerHTML = text;
  }
// 2.  Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter Gender");
        
if(gender==="Male")
    alert("Good Morning Sir");
else if(gender==="Female")
    alert("Good Morning Ma’am");

//3.  Write a program to take input color of road traffic signal
//  from the user & show the message according to this table:
let signal = ['red','yellow','green']
    for(let i=1; i<0; i++ ){
        console.log("must stop",signal[i])
    }
for(let i=0; i<2; i++ ){
        console.log("ready to move" ,signal[i])
    }
    for(let i=0; i<3; i++ ){
      console.log("move now" ,signal[i])
  }

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");}
 let b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}