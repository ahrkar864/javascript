// Document Object Model (DOM) - Day 1

// HTML document is structured as a JavaScript Object.
// It is possible to get, create, append or remove HTML elements using JavaScript.
// Selecting HTML element using JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes.

// Getting Element

// Getting elements by tag name

// syntax
// document.getElementsByTagName('tagname')


// const allTitles = document.getElementsByTagName('h1')
// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }



// Getting elements by class name

//syntax
// document.getElementsByClassName('classname')


// const allTitles = document.getElementsByClassName('title')
// console.log(allTitles) //HTMLCollections
// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i]) // prints each elements in the HTMLCollection
// }


// Getting an element by id

//syntax
// document.getElementById('id')

// let firstTitle = document.getElementById('first-title')
// console.log(firstTitle) // <h1>First Title</h1>

// Getting elements by using querySelector methods

// The document.querySelector method can select an HTML or HTML elements by tag name, by id or by class name.

// let firstTitle = document.querySelector('h1') 
// select the first available h1 element
// let firstTitle = document.querySelector('#first-title') // select id with first-title
// let firstTitle = document.querySelector('.title') // select the first available element with class title

// console.log(firstTitle)

// querySelectorAll: can be used to select html elements by its tag name or class. It returns a nodeList which is an array like object which supports array methods. We can use for loop or forEach to loop through each nodeList elements.

// const allTitles = document.querySelectorAll('h1') 
// # selects all the available h1 elements in the page

// console.log(allTitles.length) // 4
// for (let i = 0; i < allTitles.length; i++) {
//   console.log(allTitles[i])
// }

// Adding attribute
// An attribute is added in the opening tag of HTML which gives additional information about the element. Common HTML attributes: id, class, src, style, href,disabled, title, alt. Lets add id and class for the fourth title.

// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'

// console.log(titles[3])

// Adding attribute without setAttribute
// We can use normal object setting method to set an attribute but this can not work for all elements. Some attributes are DOM object property and they can be set directly. For instance id and class

//another way to setting an attribute
// const titles = document.querySelectorAll('h1')
// titles[3].className = 'title'
// titles[3].id = 'fourth-title'
// console.log(titles[3])


// Adding class using classList
// The class list method is a good method to append additional class. It does not override the original class if a class exists rather it adds additional class for the element.

//another way to setting an attribute: append the class, doesn't over ride
// const titles = document.querySelectorAll('h1')
// titles[3].classList.add('title', 'header-title')

// console.log(titles)

// Removing class using remove
// Similar to adding we can also remove class from an element. We can remove a specific class from an element.

//another way to setting an attribute: append the class, doesn't over ride
// titles[3].classList.remove('title', 'header-title')

// Adding Text to HTML element
// An HTML is a build block of an opening tag, a closing tag and a text content. We can add a text content using the property textContent or *innerHTML.

// Adding Text content using textContent
// The textContent property is used to add text to an HTML element.

// const titles = document.querySelectorAll('h1')
// titles[3].textContent = 'Fourth Title'

// console.log(titles[3])


// inner HTML
// We use innerHTML property when we like to replace or a completely new children content to a parent element. It value we assign is going to be a string of HTML elements.

// const titles = document.querySelectorAll('h1')
// titles[3].innerHTML = 'Fourth Title'

// console.log(titles[3])

// Adding style
// Adding Style Color
// Let us add some style to our titles. If the element has even index we give it green color else red.

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.color = 'green'
//   } else {
//     title.style.color = 'red'
//   }
// })

// Adding Style Background Color
// Let us add some style to our titles. If the element has even index we give it green color else red.

// const titles = document.querySelectorAll('h1')
// titles.forEach((title, i) => {
//   title.style.fontSize = '24px' // all titles will have 24px font size
//   if (i % 2 === 0) {
//     title.style.backgroundColor = 'green'
//   } else {
//     title.style.backgroundColor = 'red'
//   }
// })


// Adding Style Font Size
// Let us add some style to our titles. If the element has even index we give it 20px else 30px

const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})

