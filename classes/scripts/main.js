// syntax
class ClassName {
    //  code goes here
}

class Person {

}

// Class Instantiation
// Instantiation class means creating an object from a class. We need the keyword new and we call the name of the class after the word new.
// Let us create a person object from our Person class.

class PersonOne {
    // code goes here
  }
const person = new PersonOne()
console.log(person)

// Class Constructor
// The following Person class constructor has firstName and lastName property. These properties are attached to the Person class using this keyword. This refers to the class itself.

class PersonTwo {
    constructor(firstName, lastName, age, country, city) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
      this.age = this.age
      this.country = this.country
      this.city = city
    }
  }
  
  const personTwo = new PersonTwo('Ahrkarkyaw','salah')
  
  console.log(personTwo)

//   As we have stated at the very beginning that once we create a class we can create many object using the class. Now, let us create many person objects using the Person class.

  const personThree = new PersonTwo('Mg Mg','Hla Hla');
  const personFour = new PersonTwo('ko Aung','Ma Aye');

  console.log(personThree)
  console.log(personFour)

//   Using the class Person we created three persons object. As you can see our class did not many properties let us add more properties to the class.

const personFive = new PersonTwo('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(personFive)

// Default values with constructor
// The constructor function properties may have a default value like other regular functions.

class PersonThree {
    constructor(
      firstName = 'Asabeneh',
      lastName = 'Yetayeh',
      age = 250,
      country = 'Finland',
      city = 'Helsinki'
    ) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
    }
  }
  
  const personDefault1 = new PersonThree() // it will take the default values
  const personDefault2 = new PersonThree('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(personDefault1)
  console.log(personDefault2)

//   Class methods
// The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. Methods are JavaScript functions inside the class. Let us create some class methods.

class PersonClass {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
        return this.score
    }
    get getSkills() {
        return this.skills
    }
    set setScore(score) {
        this.score += score
    }
    set setSkill(skill) {
        this.skills.push(skill)
    }
    getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `He knows ${skills}` : ''
    
        let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
      static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
      }
      static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
      }
  }
  
  const personClass1 = new PersonClass('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
  const personClass2 = new PersonClass('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
  
  console.log(personClass1.getFullName())
  console.log(personClass2.getFullName())

  personClass1.setScore = 1
  personClass1.setSkill = 'HTML'
  personClass1.setSkill = 'CSS'
  personClass1.setSkill = 'JavaScript'

    personClass2.setScore = 1
    personClass2.setSkill = 'Planning'
    personClass2.setSkill = 'Managing'
    personClass2.setSkill = 'Organizing'


  console.log(personClass1.score)
  console.log(personClass2.score)

  console.log(personClass1.skills)
  console.log(personClass1.skills)
  
    console.log(personClass1.getScore) // We do not need    parenthesis to call a getter method
    console.log(personClass2.getScore)

  console.log(personClass1.getSkills)
  console.log(personClass2.getSkills)

  console.log(personClass1.skills)
  console.log(personClass2.skills)

  console.log(personClass1.getPersonInfo())
  console.log(personClass2.getPersonInfo())

  console.log(PersonClass.favoriteSkill())
  console.log(PersonClass.showDateTime())
  
//   Properties with initial value
// When we create a class for some properties we may have an initial value. For instance if you are playing a game, you starting score will be zero. So, we may have a starting score or score which is zero. In other way, we may have an initial skill and we will acquire some skill after some time.

// A method could be regular method or a getter or a setter. Let us see, getter and setter.

// getter
// The get method allow us to access value from the object. We write a get method using keyword get followed by a function. Instead of accessing properties directly from the object we use getter to get the value. See the example bellow

// setter
// The setter method allow us to modify the value of certain properties. We write a setter method using keyword set followed by a function. See the example bellow.

// Do not be puzzled by the difference between regular method and a getter. If you know how to make a regular method you are good. Let us add regular method called getPersonInfo in the Person class.

// Static method
// The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.

// Inheritance
// Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code. If you remember, we have a Person parent class and we will create children from it. Our children class could be student, teach etc.

// // syntax
// class ChildClassName extends {
//     // code goes here
//    }

// class Student extends PersonClass {
//     saySomething() {
//       console.log('I am a child of the person class')
//     }
//   }
  
//   const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
//   console.log(s1)
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1)
  
//   console.log(s1.saySomething())
//   console.log(s1.getFullName())
//   console.log(s1.getPersonInfo())
  
//   console.log(s2.saySomething())
//   console.log(s2.getFullName())
//   console.log(s2.getPersonInfo())


