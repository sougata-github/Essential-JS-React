import data from "./data.js";

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

/*Destructuring : Unpacking values from an array or
an object and assigning them to distinct variables.*/

const book = getBook(1);

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

const arr = [1, 2];

// const x = arr[0];
// const y = arr[1];

const [x, y] = arr;
console.log(x, y);

//Rest & Spread operator:

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

const newGenres = [...genres, "action-trillers"];

console.log(newGenres);

//spreading and adding to objects:
//spreading elements of an iterable into a new array or object

const originalObj = {
  name: "Sougata",
  age: 21,
};

const newObj = { ...originalObj, city: "New York" };

console.log(newObj);

const updatedBook = {
  ...book,
  //adding a new property
  moviePublicationDate: "2001-12-19",
  //overwriting an existing property property
  pages: 1210,
};

console.log(updatedBook);

//Template Literals:

const summary = `${title}, is a book with ${pages} pages written by ${author} published in ${
  publicationDate.split("-")[0]
} .`;

console.log(summary);

//Ternary Operator:

const result = pages > 1000 ? "over a thousand" : "less than  1000";

console.log(result);

//Arrow Functions:

const getYear = (str) => str.split("-")[0];

console.log(getYear(publicationDate));

//Short Circuiting:

console.log(true && "hello");
console.log(false && "hello");
console.log(hasMovieAdaptation && "This book has a movie adaptation");

//truthy and falsy values:

//truthy
console.log(1 && "yes");

//falsy
console.log(0 && "yes");

//using '||' logical OR operator:
console.log(0 || "hello");
console.log(1 || "hello");
