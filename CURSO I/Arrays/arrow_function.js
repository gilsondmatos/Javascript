const filmes = [
    {id: 1, nomeFilme: 'Dejavu'},
    {id: 2, nomeFilme: 'Matrix'},
    {id: 3, nomeFilme: 'O Menino do Pijama Listrado'}
]

// Isso é um Arrow Function - Bem parecido com a localização de itens por referencia, nesse caso não utilizamos função 
console.log(filmes.find(filme => filme.nomeFilme == 'Dejavu'))