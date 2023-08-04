// callback
// const callback = (n) => {
//     return n ** 2
// }
// console.log(callback(3))

// function that takes other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }
// console.log(cube(callback, 3))

// returning fucntion
//Higher order functions return function as a value​

// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//             return 2 * n + 3 * m + t
//         }
//         return doWhatEver
//     }
//     return doSomething
// }

// console.log(higherOrder(2)(3)(10))

// Let us see were we use call back functions. For instance the forEach method uses call back.

// const numbers = [1,2,3,4,5]
// const sumArray = arr => {
//     let sum = 0
//     const callback = function(element) {
//         sum += element
//     }
//     arr.forEach(callback)
//     return sum
// }
// console.log(sumArray(numbers))

// The above example can be simplified as follows:

// const numbersTwo = [1, 2, 3, 4, 5]
// const sumArrayTwo = arr => {
//     let sumTwo = 0
//     arr.forEach(function(element){
//         sum += element
//     })
//     return sum
// }
// console.log(sumArray(numbers))

// Setting Time

// setinterval
// settimeout

// syntax
// function callback() {
//     // code goes here
// }
// setInterval(callback, duration)

// function sayHello() {
//     console.log('Hello')
// }
// setInterval(sayHello, 1000)

// setting a time using a setTimeout

// // syntax
// function callback() {
//     // code goes here
// }
// setTimeout(callback, duration) // duration in milliseconds

// function sayHelloTwo() {
//     console.log('Hello')
// }
// setTimeout(sayHelloTwo, 3000)

// functional programmming

// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.

// let sum = 0;
// const numbers = [1, 2, 3, 4 ,5];
// numbers.forEach(num => console.log(num))
// console.log(sum)

// let sum = 0;
// const numbers = [1,2,3,4,5];
// numbers.forEach(num => sum += num)
// console.log(sum)

// const countries = ['Filand', 'Demark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))

// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)

const names = ['Ahrkar', 'Eisan' , 'Ma Nann', 'Ko shine']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]
    const countriesToUpperCase = countries.map((country) => country.toUpperCase())
    console.log(countriesToUpperCase)

    const countriesFirstThreeLetters = countries.map((country) =>
        country.toUpperCase().slice(0, 3)
    )
    console.log(countriesFirstThreeLetters)

//     filter
// Filter: Filter out items which full fill filtering conditions and return a new array.

const countriesContainingLand = countries.filter((country) =>
    country.includes('land')
)
console.log(countriesContainingLand)

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)

const countriesHaveFiveLetters = countries.filter(
    (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)

const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
]
  
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)

// reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

    // arr.reduce((acc, cur) => {
    //     // some operations goes here before returning a value
    //     return 
    // }, initialValue)

// every
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)

// sort

// sorting string value
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

// sorting numberic values
const numberic = [9.81, 3.14, 100, 37]
console.log(numberic.sort())

numberic.sort(function(a, b) {
    // return a - b
    return b-a
})
console.log(numberic)

// sorting object array

const imhItTeam = [
    { name: 'Ahrkarkyaw', age: 24 },
    { name: 'Shinehtetaung', age: 24 },
    { name: 'Nann', age: 26 },
    { name: 'Maw', age: 28 },
]

imhItTeam.sort((a,b) => {
    if (a.age < b.age) return -1
    if (a.age > b.age) return 1
    return 0
})
console.log(imhItTeam)


