// 1.Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

let num1 = 50;
let num2 = 50;
let num3 = num1 + num2;
console.log('The num3 of ' + num1 + ' and ' + num2 + ' is: ' + num3);


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

// Subtraction
num1 = 10
num2 = 5
result = num1 - num2
console.log("Subtraction result:", result) 

// Multiplication
num1 = 10
num2 = 5
result = num1 * num2
console.log("Multiplication result:", result)

// Division
num1 = 10
num2 = 5
result = num1 / num2
console.log("Division result:", result)

// Modulus
num1 = 10
num2 = 3
result = num1 % num2
console.log("Modulus result:", result)


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

let num;
document.write("Value after variable declaration is: " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num++;
document.write("Value after increment is: " + num + "<br>");
num += 7;
document.write("Value after addition is: " + num + "<br>");
num--;
document.write("Value after decrement is: " + num + "<br>");
let remainder = num % 3;
document.write("The remainder is: " + remainder + "<br>");



// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


let ticketPrice = 600;
let buyingTickets = 5
let totalCost = ticketPrice * buyingTickets
console.log("Buying " + buyingTickets + " movie tickets is " + totalCost );



// 5. Write a script to display multiplication table of any
// number in your browser. E.g
// The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

let celsiusTemperature = 30;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
console.log(celsiusTemperature + "NNoC is " + fahrenheitTemperature + "NNoF");
let fahrenheitTemp = 86;
let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
console.log(fahrenheitTemp + "NNoF is " + celsiusTemp + "NNoC");



// 6.Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

let priceItem1 = 100;
let priceItem2 = 150;
let quantityItem1 = 2;
let quantityItem2 = 1;
let shippingCharges = 50;
let totalCostItem1 = priceItem1 * quantityItem1;
let totalCostItem2 = priceItem2 * quantityItem2;
let subtotal = totalCostItem1 + totalCostItem2;
let totalCost1 = subtotal + shippingCharges;
console.log("Price of item 1: " + priceItem1);
console.log("Price of item 2: " + priceItem2);
console.log("Ordered quantity of item 1: " + quantityItem1);
console.log("Ordered quantity of item 2: " + quantityItem2);
console.log("Shipping charges: " + shippingCharges);
console.log("Subtotal: " + subtotal);
console.log("Shipping charges: " + totalCost);


// 7.Compute the total cost & show the receipt in your browser.

let priceItem3 = 100;
let priceItem4 = 150;
let quantityItem3 = 2;
let quantityItem4 = 1;
let shippingCharges1 = 50;
let totalCostItem3 = priceItem3 * quantityItem3;
let totalCostItem4 = priceItem4 * quantityItem4;
let subtotal1 = totalCostItem3 + totalCostItem4;
let totalCost2 = subtotal1 + shippingCharges1;
document.write("<h1>shopping receipt:</h1>" );
document.write("<p>Price of item 3: </p>" + priceItem3);
document.write("<p>Price of item 4: </p>" + priceItem4);
document.write("<p>Ordered quantity of item 3: </p>" + quantityItem3);
document.write("<p>Ordered quantity of item 4:</p> " + quantityItem4);
document.write("<p>Shipping charges: </p>" + shippingCharges);
document.write("<p>Subtotal: </p>" + subtotal);
document.write("<p>Shipping charges:</p> " + totalCost);


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

let totalMarks = 500;
let marksObtained = 425;
let percentage = (marksObtained / totalMarks) * 100;
console.log("Total marks: " + totalMarks);
console.log("Marks obtained: " + marksObtained );
console.log("Percentage: " + percentage);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

let usDollars = 10;
let saudiRiyals = 25;
let usDollarsToPK = 104.80;
let saudiRiyalsToPK = 28;
let totalPK = (usDollars * usDollarsToPK) + (saudiRiyals * saudiRiyalsToPK);
console.log("Total currency to Pakistani Rupees: " + totalPK);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

let number = 10;
let` result = ((number + 5) * 10) / 2;
console.log("Result: " + result);


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

let currentYear = new Date().getFullYear();
let birthYear = 1990; 
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
console.log("Current Year: " + currentYear);
console.log("Birth Year: " + birthYear);
console.log("Possible Age 1: " + age1);
console.log("Possible Age 2: " + age2);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

let favoriteSnack = "cake , sweetes";
let currentAge = 33;
let maximumAge = 65;
let amountPerDay = 2;
let yearsRemaining = maximumAge - currentAge;
let daysRemaining = yearsRemaining * 365; 
let totalSnacksNeeded = daysRemaining * amountPerDay;
console.log("You will need " + totalSnacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge);