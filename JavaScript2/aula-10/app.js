let user = {
    name: `João`,
    age: 31,
    email: `joaocardoso@gmail.com`,
    city: `São Paulo`,
    blogPosts: [`Sempre`,`olhar`],
    login: function (){
        console.log(`Usuário logado`)
    },
    logout: function(){
        console.log('Usuário deslogado')
    }
}

console.log(user.name)

user.age = 32

console.log(user.age)

console.log(user['email'])

user['name'] = `José`

console.log(user.name)

const key = 'email'
console.log(user[key])

console.log(typeof user) 

user.login() 
user.logout()
// const name = 'Joaquim'
// console.log(name.toUpperCase())