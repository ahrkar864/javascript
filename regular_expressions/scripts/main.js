// Creating a pattern with RegExp Constructor
// Declaring regular expression without global flag and case insensitive flag.
// without flag

let pattern = 'love'
let regEx = new RegExp(pattern)

console.log(regEx);

// Declaring regular expression with global flag and case insensitive flag.

let patternOne = 'love'
let flagOne = 'gi'
let regExOne = new RegExp(patternOne, flagOne)
console.log(regExOne)

// Declaring a regex pattern using RegExp object. Writing the pattern and the flag inside the RegExp constructor

let regExTwo = new RegExp('love','gi')
console.log(regExTwo);

// Creating a pattern without RegExp Constructor
// Declaring regular expression with global flag and case insensitive flag.

let regExThree = /love/gi

// The above regular expression is the same as the one which we created with RegExp constructor

let regExFour = new RegExp('love','gi')

// RegExpp Object Methods
// Let us see some of RegExp methods

// Testing for a match
// test():Tests for a match in a string. It returns true or false.

const str = 'I love JavaScript'
const patternTwo = /love/
const result = patternTwo.test(str)
console.log(result)

// Array containing all of the match
// match():Returns an array containing all of the matches, including capturing groups, or null if no match is found. If we do not use a global flag, match() returns an array containing the pattern, index, input and group

const strOne = 'I a love JavaScript'
// const patternThree = /love/
const patternThree = /love/g
const resultOne = strOne.match(patternThree)
const resultTwo = strOne.search(patternThree)
console.log(resultOne)
console.log(resultTwo)

// Replacing a substring
// replace(): Executes a search for a match in a string, and replaces the matched substring with a replacement substring.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

matchReplacedOne = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplacedOne)

matchReplacedTwo = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplacedTwo)


const txtFour = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txtFour.replace(/%/g, '')
console.log(matches) 

// Square Bracket
// Let's use square bracket to include lower and upper case
const patternFive = '[Aa]pple' // this square bracket means either A or a
const txtFive = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matchesFive = txtFive.match(patternFive)

console.log(matchesFive)  

const patternSix = /[Aa]pple/g // this square bracket means either A or a
const patternSeven = /[Aa]pple|[Bb]anana/g 
const txtSix = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matchesSix = txtSix.match(patternSix)

console.log(matchesSix) 

// if we want to look for the banana, we write the pattern as follows:
const matchesSeven = txtSix.match(patternSeven)
console.log(matchesSeven)

// Escape character(\) in RegExp
const patternEight = /\d/g  // d is a special character which means digits
const txtEight = 'This regular expression example was made in January 12,  2020.'
const matchesEight = txtEight. match(patternEight)

console.log(matchesEight)  // ["1", "2", "2", "0", "2", "0"], this is not what we want

const patternNine = /\d+/g 
const matchesNine = txtEight. match(patternNine)

console.log(matchesNine)  

// Period(.)
const patternTen = /[a]./g  // this square bracket means a and . means any character except new line
const txtTen = 'Apple and banana are fruits'
const matchesTen = txtTen.match(patternTen)

console.log(matchesTen)  // ["an", "an", "an", "a ", "ar"]

// Zero or more times(*)
// Zero or many times. The pattern may not occur or it can occur many times.


const patternZero = /[a].*/g  //. any character, + any character one or more times 
const txtZero = 'Apple and banana are fruits'
const matchesZero = txtZero.match(patternZero)

console.log(matchesZero)  // ['and banana are fruits']

// Zero or one times(?)
// Zero or one times. The pattern may not occur or it may occur once.

// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const pattern = /[Ee]-?mail/g  // ? means optional
// matches = txt.match(pattern)

console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]

