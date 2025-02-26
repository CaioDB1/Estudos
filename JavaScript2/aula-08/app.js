const showFood = function () {
    console.log(`pizza`)
}
function sayHi (){
    console.log(`Oi`)
}
sayHi()
sayHi()
sayHi()
showFood()
showFood()
const myFunc = function (name = `Caio`, lastName = `Bueno`) {
    console.log(`Oi, ${name} ${lastName}!`)
}
myFunc(`Roger`, `Melo`) 
myFunc()
const double = function(number) {
    return number * 2
}
const result = double(3)
const showResult = function (value) {
    return `O resultado é: ${value}`
}
console.log(showResult(result))