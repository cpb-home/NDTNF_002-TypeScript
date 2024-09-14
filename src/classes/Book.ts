interface IBook {
  title: string,
  description: string,
  authors: string,
  favorite: string,
  fileCover: string,
  fileName: string,
  fileBook: string,
  id: string
}

class Book implements IBook {
  title: string;
  description: string;
  authors: string;
  favorite: string;
  fileCover: string;
  fileName: string;
  fileBook: string;
  id: string;

  constructor(
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
    fileBook: string,
    id: string
  ) {
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

console.log(`Название: ${capitalBook.title}, Автор: ${capitalBook.authors}`);