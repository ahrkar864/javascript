const companies = new Set()
console.log(companies)

console.log('hee hee hee');

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

const setOfLanguages = new Set(languages)

console.log(setOfLanguages)

// Set is an iterable object and we can iterate through each elements.
// for (const language of SetOfLanguages) {
//     console.log(language)
// }

// Adding an element to a set

const companiesTwo = new Set()
console.log(companies.size)

companiesTwo.add('Google')
companiesTwo.add('Facebook')
companiesTwo.add('Amazon')
companiesTwo.add('Oracle')
companiesTwo.add('Microsoft')

console.log(companiesTwo.size)
console.log(companiesTwo)

// We can also use loop to add element to a set.
const companiesThree = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
const setOfCompanies = new Set()
for (const company of companiesThree) {
    setOfCompanies.add(company)
}
console.log(setOfCompanies)

// Deleting an element a set
// We can delete an element from a set using a delete method.

console.log(companiesTwo.delete('Google'))
console.log(companiesTwo.size)

// checking an element in the set

companiesTwo.clear()
console.log(companiesTwo)

// see the example below to learn how to use set
const languagesTwo = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
const langSet = new Set(languagesTwo)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
}
console.log(counts)

// other use case of set, for instance to count unique item in an array

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)


// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => !B.has(num))
// let C = new Set(c)

// console.log(C)

// Map 
// Creating an empty Map

// const map = new Map()
// console.log(map)

// creating an map from Array

countriesMap = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
]
const map = new Map(countriesMap)
console.log(map)
console.log(map.size)

// adding values to the Map

map.set('Myanmar', 'Yangon')

console.log(map)
console.log(map.size)

console.log(map.get('Finland'))

console.log(map.has('Finland'))

// for (const country of map){
//     console.log(country)
// }

for (const [country, city] of map){
    console.log(country, city)
   }
