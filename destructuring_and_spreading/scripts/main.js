// destructing arrays
const numbers = [1, 2, 3]
console.log(numbers)
let [numOne, numTwo] = numbers

console.log(numOne, numTwo)
console.log(numbers)

const names = ['Asabeneh', 'Brook', 'David', 'John']
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

let [frontend1, frontend2, frontend3, frontend4] = frontEnd

console.log(frontEnd)
console.log(backEnd)

console.log(frontend1, frontend2, frontend3, frontend4)


// if we like to skip on of the values in the array we use additional comma. The comma helps to omit the value at that specific index

const numbersTwo = [1, 2, 3]
let [numTwoOne, , numTwoThree] = numbersTwo //2 is omitted

console.log(numTwoOne, numTwoThree)

const namesTwo = ['Asabeneh', 'Brook', 'David', 'John']
let [, secondPersonOne, , fourthPersonOne] = namesTwo // first and third person is omitted

console.log(secondPersonOne, fourthPersonOne)

// We can use default value in case the value of array for that index is undefined:

const namesThree = ['Asabeneh', 'Brook', 'David']
let [
  firstPersonThree ,
  secondPersonThree,
  thirdPersonThree,
  fourthPersonThree = 'John'
] = namesThree

console.log(firstPersonThree, secondPersonThree, thirdPersonThree, fourthPersonThree)

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

// Destructuring during iteration

const countriesOne = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countriesOne) {
console.log(country, city)
}

const fullStackOne = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
  
for(const [first, second, third, four] of fullStackOne) {
  console.log(first, second, third, four)
}

// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rectangle
console.log(rectangle)
console.log(width, height, area, perimeter)

let { width: w, height: h, area: a, perimeter: p } = rectangle
  
console.log(w, h, a, p)

// If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example

const rectangleOne = {
    widthOne: 20,
    heightOne: 10,
    areaOne: 200,
    perimeterOne: 80
  }
  let { widthOne, heightOne, areaOne, perimeterOne = 60 } = rectangleOne
  
  console.log(widthOne, heightOne, areaOne, perimeterOne) //20 10 200 60
  //Let us modify the object:width to 30 and perimeter to 80


// Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

// Object parameter without destructuring

// Without destructuring
const rect = {
    width: 20,
    height: 10
}
// const calculatePerimeter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
// }


const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}
  
  
console.log(calculatePerimeter(rect)) // 60
//with destructuring


//Another Example
const person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node',
      'MongoDB',
      'Python',
      'D3.js'
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
  // Let us create a function which give information about the person object without destructuring
  
// const getPersonInfo = obj => {
// const skills = obj.skills
// const formattedSkills = skills.slice(0, -1).join(', ')
// const languages = obj.languages
// const formattedLanguages = languages.slice(0, -1).join(', ')
  
// personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${obj.age } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${skills[skills.length - 1]}. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
//     return personInfo
// }
  
// console.log(getPersonInfo(person))


// object parameter with destructuring

// Let us create a function which give information about the person object with destructuring
const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job,
    skills,
    languages
  }) => {
    const formattedSkills = skills.slice(0, -1).join(', ')
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
  
    return personInfo
  }
  console.log(getPersonInfo(person))
  /*
  Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
  */

// destructuring object during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]
    
for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}

// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

const numsTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1Two, num2Two, num3Two, ...restTwo] = numsTwo
console.log(num1Two, num2Two, num3Two)
console.log(restTwo)

const countriesTwo = [
    'Germany',
    'France',
    'Belgium',
    'Finland',
    'Sweden',
    'Norway',
    'Denmark',
    'Iceland'
  ]
  
  let [gem, fra, , ...nordicCountries] = countriesTwo
  
  console.log(gem)
  console.log(fra)
  console.log(nordicCountries)

// spread operator to copy array
let evens = [0, 2, 4, 6, 8, 10]
let odd = [1,3,5]
const aaaaa = evens + odd

const evenNumbers = [...evens] + [...odd]
console.log('aaaaa === ' + aaaaa);

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const frontEndTwo = ['HTML', 'CSS', 'JS', 'React']
const backEndTwo = ['Node', 'Express', 'MongoDB']
const fullStackTwo = [...frontEnd, ...backEnd]

console.log(fullStackTwo)

// Spread operator to copy object
// We can copy an object using a spread operator
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
  
//   const copiedUser = {...user}
//   console.log(copiedUser)

// Modifying or changing the object while copying

const copiedUser = {user, title:'instructor'}
console.log(copiedUser)

// Spread operator with arrow function
// Whenever we like to write an arrow function which takes unlimited number of arguments we use a spread operator. If we use a spread operator as a parameter, the argument passed when we invoke a function will change to an array.


// const sumAllNums = (...args) => {
//     console.log(args)
//   }
  
//   sumAllNums(1, 2, 3, 4, 5)


const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args){
      sum += num
    }
    return sum
    
  }
  
  console.log(sumAllNums(1, 2, 3, 4, 5))
  








