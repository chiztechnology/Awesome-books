import { loadBooks, SaveBooks } from './Save-and-load.js';

export default class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
    return new Object({ id: this.id, title: this.title, author: this.author });
  }
}

export const addBook = (element, books) => {

  books.push(element);
  // save books to local storage
  SaveBooks(books, 'books');
  alert('Book saved');

}

export const removeBook = (id, books) => {
  const newArray = books.filter((element) => element.id !== id);
  // save to local storage 
  SaveBooks(newArray, 'books');
  alert('Book removed');
  // then return newArray

}

export const showBook = (book) => {
  let element;
  const div = document.createElement('div');
  div.setAttribute('class', 'book-card');
  element = document.createElement('p');
  element.appendChild(document.createTextNode(book.title));
  element.setAttribute('class', 'book-title');
  div.appendChild(element);
  element = document.createElement('p');
  element.appendChild(document.createTextNode(book.author));
  element.setAttribute('class', 'book-author');
  div.appendChild(element);
  element = document.createElement('button');
  element.setAttribute('type', 'button');
  element.setAttribute('class', 'book-btn');
  element.appendChild(document.createTextNode('Remove'));
  element.addEventListener('click', () => {
    // remove the book from the screen
    div.remove();
    // remove the book from the local storage
    removeBook(book.id, loadBooks('books'));
  });
  div.appendChild(element);
  return div;
}