let firstName = 'Gilson'

//Exemplo1 - Mais dificil para ler
const email = 'Olá' + firstName + ' \nReunião confirmada! \nGilson'

//Leitura mais fácil - Aqui colocamos crase - diferente de aspas
const email2 = `Olá, ${firstName}, 
Reunião confirmada! 
Gilson`

console.log(email)
console.log(email2)