/* 

Funções: Grupo de instruções e tarefas que podemos criar.

*/

//sem parametro
function statusVenda() {
    console.log('Approved')
}

statusVenda()

//Com parametro
function statusVendaII(status, total) {
    console.log('Transaction: ' + status + '! | Valor Total: $' + total)
}

//Aqui passamos o argumento do parametro
statusVendaII('Approved', 30)

// -------------------------------------------------------------------------------------------

//Funções com calculos - Aqui utilizamos return para armazenar o valor como resultado

function desconto10 (price) {
    return price - (price * 10 / 100)
}

console.log(desconto10(50))




