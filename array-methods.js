import data from "./data.js";

function getBooks() {
  return data;
}

const books = getBooks();

/*Array map method: To map over the original array and return a new array of same length but 
with some operation performed on each of the element of the array.*/

const x = [1, 2, 3, 4, 5].map((ele) => ele * 2);

console.log(x);

const titles = books.map((book) => book.title);

console.log(titles);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));

console.log(essentialData);

//Array filter method : Creates a new array by selecting elements from the original array that meet a specified condition or criteria.

const evenGreaterThanFive = [2, 4, 6, 9, 11, 13, 18, 20].filter(
  (num) => num % 2 == 0 && num > 5
);

console.log(evenGreaterThanFive);

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(longBooksWithMovie);

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

//Array reduce method : Iterates through the elements of an array and accumulates a single result value.

const fact = [1, 2, 3, 4, 5].reduce((fact, num) => fact * num, 1);

console.log(fact);

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

console.log(pagesAllBooks);

//Array Sort method: Sorts an array based on a compare function.

let arr = [2, 3, 0, 1];

function compare(a, b) {
  //b-a for descending
  return a - b;
}

const sortedArr = arr.slice().sort(compare);

console.log(`Unsorted: ${arr}   Sorted: ${sortedArr}`);

const sortedByPages = books
  .slice()
  .sort((a, b) => b.pages - a.pages)
  .map((book) => book.pages);

console.log(sortedByPages);

//Operations on Arrays without mutating original data :

//Add :

const newBook = {
  id: 6,
  title: "Harry Potter",
  author: "J.K Rowling",
};

const booksAfterAdd = [...books, newBook];

console.log(booksAfterAdd);

//Delete :

const deleteId = 6;

const booksAfterDeletion = books.filter((id) => id !== deleteId);

console.log(booksAfterDeletion);

//Update :

const updatedBooks = books.map((book) =>
  book.id === 1 ? { ...book, pages: 1211 } : book
);

console.log(updatedBooks);
