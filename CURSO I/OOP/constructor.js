//Constructor - Construtor de Objetos

//Quando criar construtor A primeira letra é Maiscula - CascalNotation
function CriarLivro(title, autor, paginas) {
    
        this.bookTitle = title;
        this.bookAutor = autor;
        this.bookPaginas = paginas;
}

const book1 = new CriarLivro('Hábitos Atômicos', 'James Clear', 306)

console.log(book1)
