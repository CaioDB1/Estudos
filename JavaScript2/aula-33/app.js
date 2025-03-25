// const names = ['Caio', 'Jorge', 'Alipio']
// names.sort()
// console.log(names)


const scores = [10, 50, 20, 5, 35, 70, 45]
scores.sort((num1, num2) => num1 - num2)
console.log(scores)


const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//   if(item1.score > item2.score){
//     return -1
//   } else if (item2.score > item1.score){
//     return 1
//   }

//   return 0
// })


theBigFamily.sort((item1, item2) => item2.score - item1.score)



