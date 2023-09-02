fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) //returns another promise
  .then((json) => console.log(json));

//this fetch function returns a promise which is pending at first and then it gets fulfilled or rejected.

//using async/await : It means that the function will always return a promise, and you can use the await keyword inside the function to pause its execution until the awaited promise is resolved.

async function getTodDos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1"); //pausing the execution until the promise is resolved.
  const data = await response.json();
  return data;
}

async function logData() {
  const data = await getTodDos();
  console.log(data);
}

logData();

console.log("Hello I am executed first 😁.");
