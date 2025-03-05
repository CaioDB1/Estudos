myFunc = () => {
    let cat = 'Zeca'
    const age = 3
    var color = 'cinza'
    console.log(age)
}

myFunc2 = () => {
    var color = 'branco'
    const age = 5
    console.log(age)
}

myFunc()
myFunc2()

const dog = 'Pastor-alemão'

dogWatch = () => {
    const dog = 'Samoieda'
    console.log(dog)
}
console.log(dog)
dogWatch()

// if (true) {
//  let dragon = 'Balerian'
//  console.log(dragon)
// }


if (true) {
    var dragon = 'Balerian' //Escopo diferente de let e const
    console.log(dragon)
   }
   console.log(dragon)

const external = () => {
    
    const book = 'Sapiens'
    const internal = () => {
        // let x = 10
        //const book = 'Os testamentos'
        
        const extraInternal = () => {
        console.log(book.toUpperCase())
        }
        extraInternal()
    }
    internal()
    // console.log(x)
}
external()