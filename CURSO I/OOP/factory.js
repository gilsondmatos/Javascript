// O que Factory - Fábrica
// Quando dois objetos tem propriedades parecidas, podemos criar Factory (grupo).

//Factory
function criarLivro(title, autor, paginas) {
    const book = {
        bookTitle: title,
        bookAutor: autor,
        bookPaginas: paginas,
        
       //Funções dentro do Objeto
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}

const book1 = criarLivro('Hábitos Atômicos', 'James Clear', 306)
const book2 = criarLivro('Think', 'Napolean ', 500)

//Posso adicionar propriedades depois da Factory criada
book1.color = 'White'

console.log(book1)
console.log(book2)