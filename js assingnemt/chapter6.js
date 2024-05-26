// 1.Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

document.write('<h1>Result<h1>')
document.write("<p>The value of a is :10</p>")
document.write("<p>............................</p>")
document.write("<p>The value of a++ is : 11</p>")
document.write("<p>Now the value of a is :11</p>")
document.write("<p>The value of ++a is : 11</p>")
document.write("<p>Now the value of a is :11</p>")
document.write("<p>The value of --a is : 11</p>")
document.write("<p>Now the value of a is :11</p>")
document.write("<p>The value of a-- is : 11</p>")
document.write("<p>Now the value of a is :11</p>")

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

 let a = 2, b = 1;
 let= --a;
 let= --a - --b;
 let= --a - --b + ++b;
 let= --a - --b + ++b + b--;
 console.log(a+b)

// 3. Write a program that takes input a name from user &
// greet the user.
// Concatenating
 let userName  = ("ATIF KHAN ")
 print("Hello ",  + userName +  "! Welcome.")

//  5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.


function multiplicationTable() {
    var number = document.getElementById("numberInput").value;
    document.getElementById("multiplicationTable").innerHTML = table;
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


// # Taking input of subject names from the user

let subject1 = ("ENGLISH ")
let subject2 = ("URDU ")
let subject3 = ("MATH")

let total_marks = 100*3

console.log("Subject 1:", subject1)
console.log("Subject 2:", subject2)
console.log("Subject 3:", subject3)
console.log("Total marks", total_marks)
let obtained_marks_subject1 =("Obtained marks " + subject1 + total_marks)
console.log(obtained_marks_subject1 =("Obtained marks " + subject1 + total_marks))
var percentage = (obtained_Marks / total_Marks) * 100;


