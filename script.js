// Lightning Exercise
// I Love JavaScript
// Write a function that logs the string "I love JavaScript!" to the console.
// Call the function.

function loveJS(){
    console.log("I Love JavaScript!");
}

loveJS();

function greetAFriend(friendName){
    console.log(`Hi ${friendName}, how are you?`)
}

greetAFriend("Devin")

greetAFriend("Dylan")

var jordan = "Jordan"

greetAFriend(jordan)

//can use as many parameters as you want in a function.

function goodMorning(timeOfDay, friendName){
    console.log(`Good ${timeOfDay} ${friendName}, how are you?`)
}

goodMorning("afternoon", "Mike")

// Lightning Exercise
// Dream Vacation
// Write a function that accepts two parameters of name and destination.
// The function should log a sentence to the console about where that person wants to go.
// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.

function dreamVacation(name, destination){
    console.log(`${name} would like to go to ${destination}!`)
}
 dreamVacation("Jessica", "some place not here")

 dreamVacation("Adam", "Hawaii")

 dreamVacation("Emmile","Savannah, Georgia")

 //The order matters

 //****** some funtions produce info rather than do something */

 //RETURNS

 function myPizza(crust, toppings, pickupOrDelivery)
 {
     var madePizza = `They want a ${crust} crust pizza with ${toppings} for ${pickupOrDelivery}`
     return madePizza
    }

    myPizza("thin", "mushrooms", "pick up")

    //nothing happened until...

    var finishedPizza = myPizza("thin", "mushrooms", "pick up")

    console.log(finishedPizza)

//lighteningExercise
// Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
// Return the taco sentence.
// Execute the function.
// Log the returned sentence to the console.

function tacoTruck(typeOfShell, topping){
    var tacoOrder = `Your ${typeOfShell} taco with ${topping} is ready!`
    return tacoOrder
}
tacoTruck("crunchy", "beef")

var tastyTaco = tacoTruck("crunchy", "beef")

console.log(tastyTaco)

// 1. Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
// Call each function three times with different parameters.
//example: 

// function loveJS(){
//     console.log("I Love JavaScript!");
// }

// loveJS();

// function greetAFriend(friendName){
//     console.log(`Hi ${friendName}, how are you?`)
// }

// greetAFriend("Devin")

// greetAFriend("Dylan")

function add(numberOne, numberTwo){
    console.log(numberOne+numberTwo)
}

add(3, 4)

function subtract(numberOne, numberTwo){
    console.log(numberOne-numberTwo)
}
subtract(3, 4)

function multiply(numberOne, numberTwo){
    console.log(numberOne*numberTwo)
}
multiply(3, 4)

function divide(numberOne, numberTwo){
    console.log(numberOne/numberTwo)
}
divide(3, 4)

// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.

//Example - 
// function tacoTruck(typeOfShell, topping){
//     var tacoOrder = `Your ${typeOfShell} taco with ${topping} is ready!`
//     return tacoOrder
// }
// tacoTruck("crunchy", "beef")

// var tastyTaco = tacoTruck("crunchy", "beef")

// console.log(tastyTaco)

function doMaths(numberOne, numberTwo){
    var answer =  numberOne + numberTwo
    return answer
}
var final= doMaths(3, 4)
//way to overthink things, you goof!

console.log(final)

// 3. Greetings Pt. 2
// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
// If their preferred language is French, print "Bonjour, [name]!" to the console.

//EXAMPLE - 
// function goodMorning(timeOfDay, friendName){
//     console.log(`Good ${timeOfDay} ${friendName}, how are you?`)
// }

// goodMorning("afternoon", "Mike")

//EXAMPLE - 
// var franksInfo = {
//     firstName: "Frank",
//     language: "French"
// }

// if (franksInfo.language === "French") {
//     console.log(`Bonjour, ${franksInfo.firstName}!`);
// } else {
//     console.log(`Hello, ${franksInfo.firstName}!`)
// }

function greetings(name, language){
    console.log
}


