// valores primitivos

// let scoreOne = 50
// let scoreTwo = scoreOne

// console.log(`ScoreOne: ${scoreOne} | ScoreTwo: ${scoreTwo}`)

// scoreOne = 100

// console.log(`ScoreOne: ${scoreOne} | ScoreTwo: ${scoreTwo}`)


// valores de referência

let userOne = { name: 'Roger', age: 31}
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 50

console.log(userOne, userTwo)