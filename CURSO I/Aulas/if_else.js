// IF - ElSE

let velocidadeMaxima = 110 
let velovidadeAtual = 110
let velocidadeMinima = 40

if (velovidadeAtual > 110) {
    console.log("Diminua a velocidade! Risco de acidente")
}

else if (velovidadeAtual > 40 && velovidadeAtual <= 110) {
    console.log('Parabéns! Sua velocidade está normal')
}

else 
    console.log('Está muito abaixo da velocidade! Risco de acidente!')

