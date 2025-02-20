let heroes = ['Fubuki', 'Megane', 'Genos', 'Bang']
const ages = [28, 25, 23, 52, 25]

console.log(heroes)
console.log(ages)

console.log(heroes.length)

const joinHeroes = heroes.join('|')

console.log(joinHeroes)

let indexOf25 = ages.indexOf(25)
console.log(indexOf25)
indexOf25 = ages.lastIndexOf(25)
console.log(indexOf25)

const moreHeroes = heroes.concat(['Inazumax'])

console.log(moreHeroes)

const pushToHeroes = heroes.push('Cyclops', 'Hulk')

console.log(pushToHeroes)
console.log(heroes)

const popHeroes = heroes.pop()
console.log(popHeroes)
console.log(heroes)
