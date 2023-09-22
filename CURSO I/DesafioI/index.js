let valorProduto = Number(prompt('Entre com o valor do Produto: '))

if(valorProduto >= 20) {
    document.getElementById('resultado').innerHTML = 'Aprovado!'
}
else {
    document.getElementById('resultado').innerHTML = 'Reprovado!'
}

