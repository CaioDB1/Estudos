const livro = {
    titulo: 'One Punch Man',
    autor: 'ONE',
    anoPublicacao: 2010,
    disponivel: false,
    genero: 'Comédia'
}

const exibirLivro = (livro) => {
    console.log(`Título: ${livro.titulo}`)
    console.log(`Autor: ${livro.autor}`)
    console.log(`Ano de Publicação: ${livro.anoPublicacao}`)
    console.log(`Disponível: ${livro.disponivel ? 'Sim' : 'Não'}`)
    console.log(`Genero: ${livro.genero}`)

}


exibirLivro(livro)



const aluno = {
    nome: 'Dante',
    idade: 32,
    curso: 'Computação',
    notas: {primeiroSemestre: 5, segundoSemestre: 10}
}

const calculaMedia = (aluno) => {
let media = (aluno.notas.primeiroSemestre + aluno.notas.segundoSemestre)/2
return media
}

console.log(`Média das notas do aluno ${aluno.nome}:`, calculaMedia(aluno))

//console.log(aluno.notas.segundoSemestre)


//console.log(`O livro ${livro.titulo} foi publicado em ${livro.anoPublicacao}`)