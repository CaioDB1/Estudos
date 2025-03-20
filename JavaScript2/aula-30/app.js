const numbers = [1, 2, 3]
const numbers2 = numbers.map((item) => item*2)
console.log(numbers2, numbers)

const prices = [10, 15, 20, 25, 30]

const promo = prices.map(produto => produto/2)
console.log(promo)

const produtos = [
    {name: 'Mouse sem fio', price: 30},
    {name: 'Pen Drive', price: 25},
    {name: 'Cartucho de Tinta', price: 50},
    {name: 'Suporte Ergonômico para Notebook', price: 23},
    {name: 'Repetidor de Sinal Wi-Fi', price: 44}
]

const saleProducts = produtos.map(product => {
    if(product.price>=30){
        return {name: product.name, price: product.price/2}
    }

    return product
})

console.log(saleProducts)