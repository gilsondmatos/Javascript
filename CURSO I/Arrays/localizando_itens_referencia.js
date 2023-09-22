const filmes = [
    {id: 1, nomeFilme: 'Dejavu'},
    {id: 2, nomeFilme: 'Matrix'},
    {id: 3, nomeFilme: 'O Menino do Pijama Listrado'}
]

console.log(filmes.find(function (filme) {
    return filme.nomeFilme == 'Dejavu'
}))