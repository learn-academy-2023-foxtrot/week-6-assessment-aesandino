// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// describe ("capitalizeFirstLetter", () => {
//   it("returns an array with a sentence about each person with their name capitalized", () => {
//     const person1 = "jane"
//     const person2 = "john"
//     const person3 = "jack"
//     expect(person1(jane)).toEqual("Jane")
//     expect(person2(john)).toEqual("John")
//     expect(person3(jack)).toEqual("Jack")
//    })
// })

// **Did not realize that the names were provided^^


describe ("capitalizeFirstLetter", () => {
  it("returns an array with a sentence about each person with their name capitalized", () => {
    const person1 = "ford prefect"
    const person2 = "zaphod beeblebrox"
    const person3 = "arthur dent"
    expect(person1(jane)).toEqual("Ford Prefect")
    expect(person2(john)).toEqual("Zaphod Beeblebrox")
    expect(person3(jack)).toEqual("Arthur Dent")
   })
})

const hitchhikersCharacters = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

const capitalizeFirstLetter(hitchhikersCharacters) {
  return capitalizedName = person.name.toUpperCase()

  const hitchhikersCharacters = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
}

// Pseudo code:
// INPUT:an array of objects, 
// OUTPUT:an array with a sentence that contains each person of our names with the first letter of the word being capitalized. 
// PROCESS: focusing the capitalization strictly on the names and creating a sentence with the data provided for each individual. 

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe ("remaindersOfThree", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const arrayOne = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const arrayTwo = [5, "Hola", 43, -34, "greetings", true]
  
    expect(arrayOne(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(arrayTwo(hodgepodge2)).toEqual([ 2, 1, -1 ])
    
   })
})


const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.
const obtainRemainders(hodgepodge1, hodgepodge2)
return remainders = numbers.map(number % 3) 

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


// Pseudo code:
// INPUT: a mixed data array
// OUTPUT: returns an array of only the REMAINDERS of the numbers when divided by 3.
// PROCESS: each of the numbers divided by three 

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe ("sumsCubed", () => {
  it("returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(cubeAndSum1(sumsCubed)).toEqual("99")
    expect(cubeAndSum2(sumsCubed)).toEqual("1125")
   })
})


const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// b) Create the function that makes the test pass.

const sumsCubed(cubeAndSum1, cubeAndSum2)
cubedNumbers = numbers.map(number = Math.pow(number, 3))
return numbers.reduce (cubeAndSum1, cubeAndSum2)


// Pseudo code:
// INPUT: an array of numbers
// OUTPUT: returns the sum of all the numbers cubed
// PROCESS: make sure that each number in the array is cubed
