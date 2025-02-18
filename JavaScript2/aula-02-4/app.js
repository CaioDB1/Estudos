const postTitle = 'Reino de Yamatai acabou'
const postAuthor = 'Tezuka'
const postComments = 52

const postMessage = 'O post "' + postTitle + '", do ' + postAuthor + ', tem ' + postComments + ' comentários.'

console.log(postMessage)

console.log('Testando "aspas" nas \'strings\'')

const postMessage1 = `O post "${postTitle}", do ${postAuthor}, tem ${postComments} comentários.`

console.log(postMessage1)

const html = `
<h2>${postTitle}</h2>
<p>Autor: ${postAuthor}</p>
<span>Esse post tem ${postComments} comentários</span>
`

console.log(html)