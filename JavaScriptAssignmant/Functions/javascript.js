//Question 1: Defining and Calling a Function
// Create a JavaScript program that demonstrates how to define
// and call a function.
// Your program should:
// • Define a function named showWelcome().
// • Display a welcome message inside the function using
// console.log().
// • Call the function to execute its code.
// • Call the same function multiple times to demonstrate
// code reusability.
// • Display the results using console.log()

function showWelcome() {
    console.log("Welcome to java script function class");
}

showWelcome();
showWelcome();
showWelcome();


// Question 2: Function Execution Flow
// Create a JavaScript program that demonstrates the execution
// flow of a function.
// Your program should:
// • Define a function named showMessage() that displays
// "Learning JavaScript Functions".
// • Display "Start" before calling the function.
// • Call showMessage().
// • Display "End" after the function call.
// • Call the function again at another point in the program.
// • Use console.log() to clearly observe the order in which
// the statements execute.

function showMessage() {
    console.log("Learning JavaScript Functions");
}

console.log("Start");
showMessage();
console.log("End");
showMessage();


// Parameters & Arguments
// Question 1
// Create a JavaScript program that demonstrates how
// parameters and arguments work in a reusable function.
// Your program should include:
// • Define a greet(name) function with name as a parameter.
// • Display a welcome message using the parameter.
// • Call the function with at least three different names as
// arguments.
// • Define a showNumber(number) function that displays the
// number received through its parameter.
// • Call the function with at least two different number
// arguments.
// • Display all results using console.log().

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Rani");
greet("aashi");
greet("Anuj");

function showNumber(number) {
    console.log("The number is: " + number);
}

showNumber(22);
showNumber(15);
showNumber(25);


// Question 2
// Create a JavaScript program that demonstrates multiple
// parameters and arguments.
// Your program should include:
// • Define an add(a, b) function with two parameters.
// • Pass two numbers as arguments and display their sum.
// • Call the function again with different arguments.
// • Define an introduce(name, age, city) function with three
// parameters.
// • Call the function by passing a name, age, and city in the
// correct order.
// • Display each received value using console.log().
// • Demonstrate that the first argument is assigned to the
// first parameter, the second argument to the second
// parameter, and so on.

function add(a, b) {
    console.log(a + b);
}

add(2, 26);
add(12, 7);

function introduce(name, age, city) {
    console.log("hii my name is", name, "i am", age, "year old. I live in", city, ".");
}

introduce("Rani", 22, "Bhopal");


// Return Values Assignment
// Question 1
// Create a JavaScript program that demonstrates how a function
// can return calculated results.
// Your program should include:
// • Define an add(a, b) function that returns the sum of two
// numbers.
// • Define a multiply(a, b) function that returns the
// multiplication result.
// • Define a square(number) function that returns the square
// of a number.
// • Call each function with suitable arguments.
// • Store the returned results in variables.
// • Display the stored results using console.log().

// Changed add to addReturn to avoid duplicate declarations
function addReturn(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function square(number) {
    return number * number;
}

// Call the functions and store the returned results
let sum = addReturn(10, 5);
let product = multiply(4, 3);
let squared = square(6);

// Display the results
console.log("Sum:", sum);
console.log("Multiplication:", product);
console.log("Square:", squared);


// Question 2
// Create a JavaScript program that demonstrates how a
// returned value can be stored and used in another
// calculation.
// Your program should include:
// • Define an add(a, b) function that returns the sum.
// • Store the returned value in a variable named result.
// • Display the value of result.
// • Use result in another calculation, such as multiplying it by
// 2.
// • Display the final calculated value using console.log().
// • Also create a separate function that uses console.log() to
// display a result, so you can demonstrate the difference
// between return and console.log().

// Changed add to addResult to avoid duplicate declarations
function addResult(a, b) {
    return a + b;
}

// Store the returned value in a variable
let result = addResult(10, 5);

// Display the result
console.log("Result:", result);

// Use result in another calculation
let finalResult = result * 2;

// Display the final calculated value
console.log("Final Result:", finalResult);

// Separate function using console.log()
function displaySum(a, b) {
    console.log("Sum displayed directly:", a + b);
}

// Call the separate function
displaySum(10, 5);


// Question 1
// Create a JavaScript program that demonstrates how default
// parameters work when arguments are provided or
// omitted.
// Your program should include:
// • Define a greet(name = "Guest") function.
// • Call the function without an argument and display the
// result.
// • Call the same function with a name argument and display
// the result.
// • Define a showNumber(number = 10) function.
// • Call it once without an argument and once with a different
// number.
// • Display the results using console.log().
// • Clearly demonstrate that the provided argument is used
// instead of the default value.

// Changed greet to greetDefault to avoid duplicate declarations
function greetDefault(name = "Guest") {
    return "Hello, " + name + "!";
}

// Call without an argument
console.log(greetDefault());

// Call with a name argument
console.log(greetDefault("Rahul"));

// Function with a default number
function showNumberDefault(number = 10) {
    return number;
}

// Call without an argument
console.log("Default Number:", showNumberDefault());

// Call with a different number
console.log("Provided Number:", showNumberDefault(25));


// Question 2
// Create a JavaScript program that demonstrates multiple
// default parameters with return values.
// Your program should include:
// • Define an add(a = 10, b = 5) function that returns the
// sum.
// • Call the function without arguments.
// • Call it with only one argument.
// • Call it with two arguments.
// • Store the returned results in separate variables.
// • Display all three results using console.log().
// • Define a calculateTotal(price, quantity = 1) function that
// returns price * quantity.
// • Call it once without providing the quantity and once with a
// quantity.
// • Display both returned totals.

// Changed add to addDefault to avoid duplicate declarations
function addDefault(a = 10, b = 5) {
    return a + b;
}

// Call without arguments
let result1 = addDefault();

// Call with one argument
let result2 = addDefault(20);

// Call with two arguments
let result3 = addDefault(20, 30);

// Display all results
console.log("Result 1:", result1);
console.log("Result 2:", result2);
console.log("Result 3:", result3);

// Changed calculateTotal to calculateTotalDefault
function calculateTotalDefault(price, quantity = 1) {
    return price * quantity;
}

// Call without providing quantity
let total1 = calculateTotalDefault(100);

// Call with a quantity
let total2 = calculateTotalDefault(100, 3);

// Display both totals
console.log("Total without quantity:", total1);
console.log("Total with quantity:", total2);


// Question 1
// Create a JavaScript program that demonstrates how a
// function expression works with parameters and
// arguments.
// Your program should include:
// • Create a greet function expression and store it in a
// variable.
// • The function should accept a name parameter.
// • Call the function with at least three different names as
// arguments.
// • Create an introduce function expression with name and
// city parameters.
// • Call the function by providing a name and city.
// • Display the received values using console.log().

// Changed greet to greetExpression to avoid duplicate declarations
const greetExpression = function(name) {
    console.log("Hello, " + name + "!");
};

// Call the function with three different names
greetExpression("Rahul");
greetExpression("Priya");
greetExpression("Amit");

// Create an introduce function expression
const introduceExpression = function(name, city) {
    console.log("My name is " + name + " and I live in " + city + ".");
};

// Call the function with name and city
introduceExpression("Rahul", "Bhopal");


// Question 2
// Create a JavaScript program that demonstrates a function
// expression with return values and a default parameter.
// Your program should include:
// • Create an add function expression with two parameters.
// • Return the sum of the two parameters.
// • Store the returned value in a variable and display it using
// console.log().
// • Create a calculateTotal function expression with price and
// quantity = 1 parameters.
// • Call the function without providing the quantity and
// display the returned result.
// • Call the same function again with a quantity argument
// and display the returned result.
// • Demonstrate that the provided argument replaces the
// default parameter value.

// Changed add to addExpression to avoid duplicate declarations
const addExpression = function(a, b) {
    return a + b;
};

// Store and display the returned value
let expressionResult = addExpression(10, 20);
console.log("Sum:", expressionResult);

// Changed calculateTotal to totalExpression to avoid duplicate declarations
const totalExpression = function(price, quantity = 1) {
    return price * quantity;
};

// Call without providing quantity
let expressionTotal1 = totalExpression(100);
console.log("Total with default quantity:", expressionTotal1);

// Call with a quantity argument
let expressionTotal2 = totalExpression(100, 3);
console.log("Total with provided quantity:", expressionTotal2);