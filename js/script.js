//1. Convert the following highlighted identifiers to Camel Case notation:
/*
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;


//2. Example of a:
123 //Numeric literal expression
"This is a string" //String literal expression
true //Boolean literal expresion
null //null literal expression

//3. Give me two examples of complex / variable expressions.
let Expression1 = 10 / (5 - 3) + 5;
let Expression2 = 5 + (3 * 3) - 4; 


//4. Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, your age, referral source, contact you.
var firstName;
var lastName;
var address;
var city;
var state;
var zipCode;
var age;
var referralSource;
var ContactYou;

//5. Take the 3 of the 9 variables that you created above and demostrate 3 ways for declaring and assigning values to those variables.
var firstName = "Areli";
let firstName = "Areli";
const firstName = "Areli";

var address = "Lake One";
let address = "Lake One";
const address = "Lake One";

var zipCode = 12345;
let zipCode = 12345;
const zipCode = '12345';

//6. Create a variable. 
//Add a number and a string and display the coerced result in the browser's console window.
let address = " lake one"
address = (6789 + address);
console.log ('This is my address ' + address);

//7. Create two variables. 
//For the first variable, add a Boolean and string and display the coerced result.
//For the second variable, add a number and a Boolean and display the coerced result.
let isAdult = 'Adult: ' + true;
console.log(isAdult);

let age = (18 + ' years old');
console.log(age);


//8. Is the following string literal valid? If not, how would you fix it?
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
window.console.log(someString);


//9. Create a variable that produces a null value in the console window. 
//Then, create a variable that produces an undefined value in the console window.
let x = null;
window.console.log('The value of X is ' + x);

let y;
window.console.log('The value of Y is ' + y);

//10. Use the unary typeof operator on various literals to return the following 
//types within the console window: string, number, Boolean, object, and undefined.
window.console.log('The typeof \'Hello\' is ' + typeof 'Hello');
window.console.log('The typeof \'2\' is ' + typeof '2');

window.console.log('The typeof hi is ' + typeof hi);
window.console.log('The typeof new Date() is ' + typeof new Date());
window.console.log('The typeof typeof [1,2,3] is ' + typeof [1,2,3]);

x = 4      // x=4
y = x++    // y = 4 and  x = 5
window.console.log('The value of X is ' + x);
window.console.log('The value of Y is ' + y);

a= 4      // a=4
b = a--    // b = 4 and  a = 3
// sets y to the value before decrementing and it removes 1 from a
window.console.log('The value of a is ' + a);
window.console.log('The value of b is ' + b);

window.console.log('The value of !0 is ' + !0);
window.console.log('The value of !true is ' + !true);


//11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:
// Hello Areli Jimenez, welcome to the JavaScript class!
//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators 
//to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
let name = "Areli Jimenez";
alert('Hello ' + name + '! How are you today?');


//12. Declare a variable called name and set it equal to your name. 
//Substitute your name in the previous alert string with the variable instead.
let name = "Areli Jimenez.";
alert('Hello ' + name + '  Welcome to the JavaScript class!');


//13. Declare a variable called course and set it equal to “JavaScript”.
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
let course = 'JavaScript';
alert('Course ' + course);


//14. Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display 
//as follows:
//Hello Areli Jimenez.
//Welcome to the JavaScript class!

let course = 'JavaScript';
alert('Hello Areli Jimenez. \nWelcome to the  ' + course + ' class!');


//15. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response 
//will now be captured in the name variable. 
userName = prompt('What is your name? ');
let course = 'JavaScript';

document.write(`Hello ${userName}<br/>`);
document.write(`Welcome to the  ${course} class!`);


//16. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are
//taking. The prompt’s response will now be captured in the course variable.
userName = prompt('What is your name? ');
course = prompt('What is the name of your course? ');

document.write(`Hello ${userName}<br/>`);
document.write(`Welcome to the  ${course} class!`);


//17. Declare a variable called x and assign it a value of 10.
//Declare a variable called y and assign it a value of 20. 
//Display the sum of those two numbers in the console window.
let x = 10;
let y = 20 + x;
window.console.log('x + y  = ' + y);
 

//18. Declare a variable called x and assign it a value of 20. 
//Add and assign 20 to that variable and display the result in the console window.
//The result should be 40.
let x = 20 + 20;
window.console.log('The value of x is ' + x);


//19. Declare a variable called x and assign it a value of 20.
//Multiply and assign 5 to that variable and display the result in the console window. 
//The result should be 100.
let x = 20 * 5;
window.console.log('The value of x is ' + x);


//20. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
//Divide and assign 1 to that variable and display the result in the console window.
//The result should be 2. If you got 6.66 try again.
let x = (20 % 3);
 x /= x ;
x = x + 1;
window.console.log('The value of x is ' + x);

//21. Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result 
//within the console window.
let x = 9;
let y = 6;
let z = 8;
window.console.log(x >= y && x > z);

*/
//22. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result
//within the console window. The application cannot use the same operators used in the previous application.
let x = 7;
let y = 6;
let z = 5;
window.console.log(x == y || y <= z);
