export default  class BookCollection {
  books;
  constructor(books = []) {
    this.books = books;
  }

   addBook(tit, auth) {
    const newId = (this.books === null || this.books.length === 0) ? 0
      : this.books[this.books.length - 1].id + 1;
    const element = {
      id: newId,
      title: tit,
      author: auth,
    };

    this.books.push(element);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBook(element);
  }

   showBook(book) {
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
      this.removeBook(book.id);
    });
    div.appendChild(element);
    document.getElementById('book-cont').appendChild(div);
  }

   removeBook(id) {
    const newArray = this.books.filter((book2) => book2.id !== id);
    localStorage.setItem('books', JSON.stringify(newArray));
    this.books = newArray;
  }
}

// export default  (BookCollection.addBook, BookCollection.removeBook,
//   BookCollection.showBook);