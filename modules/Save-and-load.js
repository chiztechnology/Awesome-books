export const loadBooks = (key) => {
  let books = [];
  if (JSON.parse(localStorage.getItem(key)) !== null) {
    books = JSON.parse(localStorage.getItem(key));
    return books;
  } 
};

export const SaveBooks = (books, key) => {
  localStorage.setItem(key, JSON.stringify(books));
};