//Book
//Propriedades 
    //- Titulo
    //- Autor
    //- Páginas
    //- Preços
//Metodos - O que posso fazer com ele
    // Ler
    // vender
    // Comprar
    // Pedir informações

const book = {
    bookTitle: 'Hábitos Atômicos',
    bookAutor: 'James Clear',
    bookPaginas: 306,
    bookCapitulos: {
        cap1: 'Fundamentals',
        cap2: '1st law'
    },
   //Funções dentro do Objeto
    printBook: function() {
        console.log('Printing...')
    }
}

book.printBook()
console.log(book)
console.log(book.bookCapitulos)
console.log(book.bookCapitulos.cap1)







    