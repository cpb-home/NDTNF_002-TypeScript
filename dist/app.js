"use strict";
/*
import Book from "./classes/Book";

const capitalBook = new Book(
  'Capital',
  'Not so interesting book',
  'Marks',
  'no',
  '',
  '',
  '',
  'asfew-v5433fds-t4v'
);
*/
const mainContainer = document.getElementById('root');
const headerH1 = document.createElement('h1');
headerH1.textContent = 'Страница';
mainContainer.append(headerH1);
/*
const infoContainer = document.createElement('div');
infoContainer.textContent = `Название: ${capitalBook.title}, Автор: ${capitalBook.authors}`;
*/ 
class Book {
    constructor(title, description, authors, favorite, fileCover, fileName, fileBook, id) {
        this.title = title;
        this.description = description;
        this.authors = authors;
        this.favorite = favorite;
        this.fileCover = fileCover;
        this.fileName = fileName;
        this.fileBook = fileBook;
        this.id = id;
    }
}
const capitalBook = new Book('Capital', 'Not so interesting book', 'Marks', 'no', '', '', '', 'asfew-v5433fds-t4v');
console.log(`Название: ${capitalBook.title}, Автор: ${capitalBook.authors}`);
//# sourceMappingURL=app.js.map