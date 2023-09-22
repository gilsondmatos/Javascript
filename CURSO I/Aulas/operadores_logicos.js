/*

    AND - E | &&
    OR - OU | ||
    NOT - NÃO | !

*/

let temIdadeMinima = true
let temTituloEleitor = true

let podeVotar = temIdadeMinima && temTituloEleitor
console.log('Pode Votar: ' + podeVotar)

let podeViajar = !podeVotar

console.log('Pode Viajar: ' + podeViajar)

//Operadores com String

let corCliente = 'White'
let corEstoque = 'Red'
let corVendida = corCliente || corEstoque

console.log(corVendida)

 