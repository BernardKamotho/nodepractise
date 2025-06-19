// import the chalk dependecy
const chalk = require("chalk")


console.log("My first Node application")

console.log(chalk.red("Hello there"))
console.log(chalk.blue("This is another line of code..."))
console.log(chalk.bgYellow("The servcer is running...."))


// how create a node application ~ npm init -y
// how to install packages either globally or locally
// How to configure the start script inside of package.json file.


// Assignment: Create a new node project that contains a function which is find the sum of three numbers.
// Inside, install chalk package an use it on the output

// import the module so that we can use it.
const welcome = require("./welcome")

// invoke the function sayHello() which is inside of the module welcome.js
welcome.sayHello()

// access the current date, time, company name inside of the module welcome
console.log("The Date is: " + welcome.currDate)
console.log("The Time is: " + welcome.currTime)
console.log(`The name of the company is: ${welcome.companyName}`)


//import the summation module
const summation = require("./summation")

// access the function inside of the module
summation.addition(4, 8, 6);

// create a mudule called AreaOfASqure
// inside, create a function that accepts parameters and find the area of the square. Import the module inside of tha app.js file

// import the module mathUtil
const mathUtil = require("./mathUltils")

// access the function inside of the module
console.log(mathUtil.division(70, 10));
console.log(mathUtil.multiply(5, 10, 16));
console.log(mathUtil.power(7));


// create a module call it "stringUtil".
// Have three functions: one to transform a string entered into uppercase, lowercase and another one to count the letter of a string.
// import the function inside of app.js and call the three funtions.