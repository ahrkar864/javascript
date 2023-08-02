// scope
// global
// local

// window global object
// a = 'javasctipt'
// b = 10
// function letslearnScope() {
//     console.log(a,b)
//     if(true) {
//         console.log(a, b)
//     }
// }
// console.log(a, b)

// global scope
// let a = 'javascript'
// let b = 10
// function letsLearnScope() {
//     console.log(a,b)
//     if(true) {
//         let a = 'python'
//         let b = 100
//         console.log(a,b)
//     }
//     console.log(a,b)
// }
// letsLearnScope()
// console.log(a,b)

// local scope
// block scope
// function scope

// let a = 'javascript'
// let b = 10
// function letsLearnScope() {
//     console.log(a, b)
//     let value = false
//     if (true) {
//         let a = 'python'
//         let b = 20
//         let c = 30
//         let d = 40
//         value = !value
//         console.log(a, b, c, value)
//     }
//     // we can not access c because c's scope is only the if block
//     console.log(a, b, value)
// }
// letsLearnScope()
// console.log(a, b)

// function letsLearnScope() {
//     var gravity = 9.81
//     console.log(gravity)
// }

// if (true){
//     var gravity = 9.81
//     console.log(gravity)
// }
// console.log(gravity)

// for(var i = 0; i < 3; i++){
//     console.log(i)
// }
// console.log(i)

// In ES6 and above there is let and const, so you will not suffer from the sneakiness of var. When we use let our variable is block scoped and it will not infect other parts of our code.

// function letsLearnScope() {
//     const gravity = 9.81
//     console.log(gravity)   
// }

// if (true) {
//     const gravity = 9.81
//     console.log(gravity)
// }

// for(let i=0; i < 3; i++){
//     console.log(i)
// }

// object

// creating an empty object
// const person = {}

// creating an object with values
// const rectangle = {
//     length: 20,
//     width: 20
// }
// console.log(rectangle)

// const person = {
//     firstName: 'Ahrkar',
//     lastName: 'kyaw',
//     age: 24,
//     country: 'Myanmar',
//     city: 'Yangon',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     isMarried: true
// }
// console.log(person)

// Getting values from an object
// We can access values of object using two methods:
// using . followed by key name if the key-name is a one word
// using square bracket and a quote

// Creating object methods
// Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. We can not use an arrow function as object method because the word this refers to the window inside an arrow function instead of the object itself. Example of object:

// const person = {
//     firstName : 'Ahrkar',
//     lastName : 'Kyaw',
//     age: 24,
//     country: 'Myanmar',
//     city: 'Yangon',
//     skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'React',
//         'Node',
//         'MongoDB',
//         'Python',
//         'D3.js'
//     ],
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     },
//     'phone number': '959250150528'
// }

// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person.age)
// console.log(person.location) // undefined

// console.log(person['firstName'])
// console.log(person['lastName'])
// console.log(person['age'])
// console.log(person['age'])
// console.log(person['location']) // undefined

// // for instance to access the phone number we only use the square bracket method
// console.log(person['phone number'])

// console.log(person.getFullName())

const personTwo = {
    firstName: 'Ahrkar',
    lastName: 'Kyaw',
    age: 24,
    country: 'Myanmar',
    city: 'Yangon',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
    ],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`
    }
}
personTwo.nationality = 'Burma'
personTwo.job = 'web developer'
personTwo.skills.push('Meteor')
personTwo.skills.push('SasS')
personTwo.isMarried = true

personTwo.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills.splice(0, this.skills.length - 1).join(', ')
    let lastSkill = this.skills.splice(this.skills.length - 1)[0]
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.job}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
const copyPerson = Object.assign({}, personTwo)
console.log(copyPerson)

const keys = Object.keys(copyPerson)
console.log(keys)

const values = Object.values(copyPerson)
console.log(values)

// const address = Object.keys(copyPerson.address)
// console.log(address)

// console.log(personTwo)
// console.log(personTwo.getPersonInfo())


// Getting object keys and values using Object.entries()

const entries = Object.entries(copyPerson)
console.log(entries)

// checking properties using hasOwnProperty()
// hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))