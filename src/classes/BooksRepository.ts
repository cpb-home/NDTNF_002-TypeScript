abstract class BooksRepository {

  // createBook(book){} — создание книги
  createBook(book: Book): Book {
    return book;
  }

  //getBook(id){} — получение книги по id
  getBook(id: string) {
    return id;
  }

  //getBooks(){} — получение всех книг
  getBooks():void {
    
  }
  
  //updateBook(id){} — обновление книги
  updateBook(id: string):void {
    console.log(id);
  }

  //deleteBook(id){} — удаление книги
  deleteBook(id: string):void {
    console.log(id);
  }
}

class Temp extends BooksRepository {

}

const tempItem = new Temp;
console.log(tempItem);