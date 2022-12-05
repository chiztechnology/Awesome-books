import  BookCollection  from './modules/books'

let books = new BookCollection();

window.addEventListener('load', () => {
  // display the date
  document.getElementById('date').innerText = new Date().toUTCString();
  // fetch data from local storage
  if (JSON.parse(localStorage.getItem('books')) !== null) {
    books = new BookCollection(JSON.parse(localStorage.getItem('books')));
    books.books.forEach((element) => {
      BookCollection.showBook(element);
    });
  } else {
    books = new BookCollection();
  }
});


document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  books.addBook(document.getElementById('title').value, document.getElementById('author').value);
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


