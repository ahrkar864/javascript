// function declaration
// function functionName() {

// }
// functionName()

// function without a parameter and return
function square(){
    let num = 2
    let sq = num * num
    console.log(sq)
}
square()

function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
    console.log(sum)
}
addTwoNumbers()

function printFullNameRVOne () {
    let firstName = 'Ahrkar'
    let lastName = 'kyaw'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
    console.log("hi");
}
printFullNameRVOne()

// function returning value
function printFullNameRVTwo () {
    let firstName = 'Ahrkar'
    let lastName = 'kyaw'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log("hi");
    return fullName
}
console.log(printFullNameRVTwo())

function addTwoNumbersTwo() {
    let numOne = 10
    let numTwo = 20
    let total = numOne + numTwo
    return total
}
console.log(addTwoNumbersTwo())

// function with a parameter
function functionName(parm1){

}

function areaOfCircle(r) {
    let area = Math.PI * r * r 
    return area
}
console.log(areaOfCircle(10))

function squareOne(number) {
    return number * number
}
console.log(squareOne(10))

// function with two parameters

// function functionName(parm1, parm2){

// }
// functionName(parm1, parm2)

function sumTwoNumbers(numOne, numTwo){
    let sum = numOne + numTwo
    return sum
}
console.log(sumTwoNumbers(10, 20))

function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(printFullName('Ahrkar','kyaw'))

// function with many parameters

// function functionName(parm1, parm2, parm3, ...){

// }
// functionName(parm1,parm2,parm3,...)

function sumArrayValues(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
const numbers = [1,2,3,4,5];
console.log(sumArrayValues(numbers));

const areaOfCircletwo = (radius) => {
    let area = Math.PI * radius * radius;
    return area;
}
console.log(areaOfCircletwo(10))

// function with unlimited number of parameters
// unlimited number of parameters in regular function
function sumAllNums() {
    console.log(arguments)
}
sumAllNums(1, 2, 3, 4)

function sumAllNums() {
    let sum = 0
    for (let i=0; i < arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
console.log(sumAllNums(1, 2, 3, 4))
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// unlimited number of parameters in arrow function
const sumAllNumsTwo = (...args) => {
    console.log(args)
}
sumAllNumsTwo(1,2,3,4)

const sumAllNumsThree = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNumsThree(1, 2, 3, 4)) // 10
  console.log(sumAllNumsThree(10, 20, 13, 40, 10))  // 93
  console.log(sumAllNumsThree(15, 20, 30, 25, 10, 33, 40))  // 173

//   anonymous function
const anonymousFun = function() {
    console.log(
        'I am an anonymous functio and my value is stored in anonymousFun'
    )
}
anonymousFun()

// express function
const squareTwo = function(n) {
    return n * n
}
console.log(squareTwo(2))

// self invoking fucntions
// (function(n) {
//     console.log(n * n)
// })(2)

let squaredNum = (function(n) {
    return n * n
})(10000)
console.log(squaredNum)

// arrow function
function squareThree(n) {
    return n * n
}
console.log(squareThree(2))
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function

const squareFour = n => {
    return n * n
}
console.log(squareFour(2))

const squareFive = n => n * n
console.log(squareFive(7))

const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
        newArr.push(element.toUpperCase())
    }
    return newArr
}
const countries = ['Filand', 'Sweden', 'Norway', 'Denmark' , 'Iceland']
console.log(changeToUpperCase(countries))

// const printFullNameOne = (firstName, lastName) => {
//     return `${firstName} ${lastName}`
// }
// console.log(printFullName('Ahrkar','Kyaw'))
// The above function has only the return statement, therefore, we can explicitly return it as follows.
const printFullNameTwo = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullNameTwo('Asabeneh', 'Yetayeh'))

// function with default parameter
// Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

// syntax
// Declaring a function
// function functionName(param = value) {
//     //codes
//   }
  
//   // Calling function
//   functionName()
//   functionName(arg)

function greetings(name = 'Ahrkar') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}
console.log(greetings())
console.log(greetings('Shine Htet Aung'))

function generateFullName(firstName = 'Ahrkar', lastName = 'Kyaw') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))

function calculatedAge(birthYear, currentYear = 2023) {
    let age = currentYear - birthYear
    return age
}
console.log('Age: ', calculatedAge(1999))

function weightOfObject(mass, gravity = 0.81) {
    let weight = mass * gravity + ' N'
    return weight
}
console.log('Weight of an object in Newton: ', weightOfObject(100))
console.log('Weight of an object in Newton: ', weightOfObject(100,1.62))

// Let us see how we write the above functions with arrow functions
const greetingsArrow = (name = 'Peter') => {
    let message = name+ ',Welcome to 30 Days Of Javascript'
    return message
}
console.log(greetingsArrow())
console.log(greetingsArrow('Nann Kalar'))

const generateFullNameArrow = (firstName = 'Ahrkar', lastName = 'kyaw') => {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(generateFullName())
console.log(generateFullName('David','Smith'))

const calculatedAgeArrow = (birthYear, currentYear = 2023) => currentYear - birthYear
console.log('Age:', calculatedAgeArrow(1999))

const weightOfObjectArrow = (mass, gravity = 9.81) => mass * gravity + ' N'
console.log('Weight of an object in Newton: ', weightOfObjectArrow(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObjectArrow(100, 1.62)) // gravity at surface of Moon
