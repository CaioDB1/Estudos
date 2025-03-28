const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const livrosCaros = books
  .filter(({price}) => price > 20)
  .map(({name, price}) => `O preço livro ${name} caiu para R$ ${price/2}`)

console.log(livrosCaros)

// const livrosCaros = books.filter(livro => livro.price > 20).reduce((acc, livro) => {
//   return acc += `O livro ${livro.name} custa R$ ${livro.price} \n`}, '')
