import { loadBooks } from './modules/Save-and-load.js';
import Book, { addBook, showBook } from './modules/books.js';
import showTime from './modules/Datetime.js';

let books = [];

window.addEventListener('load', () => {
  // display the date
  showTime();
  // fetch data from local storage
  books = loadBooks('books');
  if (books !== null) {
    books.forEach((element) => {
      // to be used in the parent component
      document.getElementById('book-cont').appendChild(showBook(element));
    });
  } else {
    // no books found
    books = [];
  }
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  let tempBooks = [];
  tempBooks = loadBooks('books');
  const newId = tempBooks.length === 0 ? 0 : tempBooks[tempBooks.length - 1].id + 1;

  const element = new Book(newId, document.getElementById('title').value, document.getElementById('author').value);

  addBook(element, loadBooks('books'));
  // Refresh The content on the page later;
  document.getElementById('book-cont').appendChild(showBook(element));

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

document.getElementById('list-link').addEventListener('click', () => {
  document.getElementById('book-cont').classList.remove('hidden');
  document.getElementById('form').classList.add('hidden');
  document.getElementById('contact').classList.add('hidden');
});

document.getElementById('add-link').addEventListener('click', () => {
  document.getElementById('book-cont').classList.add('hidden');
  document.getElementById('form').classList.remove('hidden');
  document.getElementById('contact').classList.add('hidden');
});

document.getElementById('contact-link').addEventListener('click', () => {
  document.getElementById('book-cont').classList.add('hidden');
  document.getElementById('form').classList.add('hidden');
  document.getElementById('contact').classList.remove('hidden');
});