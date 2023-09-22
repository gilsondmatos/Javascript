
/*
 Utilizando ASI - Automatic Semicolon insert (Feature - Javascript)
    
    Utilizar ou não ponto e vírgula? 
    Ele coloca ponto e vírgula automaticamente 
    sem que possamos ver.
*/

//Variaveis let
let nome = 'Antônio Carlos'
let endereco = "Rua Iratinga, 420"
let idade = 31
let sexo = 'Masculino'
let estado = 'SP'

//Constantes - Não altera durante o código
const price = 20

//'Nome: ' + nome = Utilizamos o sinal de adição para concatenação
console.log('Nome: ' + nome)
console.log('Idade: ' + idade + ' anos')
console.log('Endereco: ' + endereco)
console.log('Estado: ' + estado)
console.log('Gênero: ' + sexo)

/*
Variaveis Tipo - Primitivos                    
    - String
    - Number
    - Boolean
    - Undefined
    - Null
*/

let itemName = 'Pen' // String
let itemPrice = 12.50 // Number
let itemDisponivel = true // Boolean
let itemColor // Undefined

itemName = null //Altrerei o valor de itemName

console.log(itemName)
console.log(itemPrice)
console.log(itemDisponivel)
console.log(itemColor)

//Javascript é dinâmico - Analisa o valor da váriavel 
//e a partir  disso ele se autodetecta