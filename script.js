let myLibrary = [];

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      " by " +
      this.author +
      ", " +
      this.pages +
      " pages, " +
      this.read
    );
  };
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

function displayEachBook() {
  bookshelf.innerText = "";
  myLibrary.forEach((book) => {
    const bookItem = document.createElement("div");
    const buttons = document.createElement("div");
    buttons.setAttribute("class", "buttons");
    bookItem.setAttribute("class", "book-card");
    bookItem.setAttribute("data-id", book.id);
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("h5");
    const bookPages = document.createElement("h5");
    bookTitle.innerText = book.title;
    bookAuthor.innerText = book.author;
    bookPages.innerText = book.pages + " Pages";
    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookPages);
    const readButton = document.createElement("button");
    readButton.setAttribute("class", "read-status");
    readButton.addEventListener("click", () => {
      book.toggleReadStatus();
      readButton.innerText = book.read ? "Read" : "Not Read";
    });
    readButton.innerText = book.read ? "Read" : "Not Read";
    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-book");
    removeButton.setAttribute("id", book.id);
    removeButton.innerText = "Remove from Library";
    removeButton.addEventListener("click", () => {
      removeBook(book.id);
    });
    buttons.appendChild(readButton);
    buttons.appendChild(removeButton);
    bookItem.appendChild(buttons);
    bookshelf.appendChild(bookItem);
  });
}

const bookshelf = document.querySelector(".bookshelf");
const addBookButton = document.querySelector(".add-book-button");
const modal = document.getElementById("add-book-modal");
addBookButton.addEventListener("click", () => {
  modal.showModal();
});

const submitBookButton = document.getElementById("submit-book");
submitBookButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(bookReadStatus)
  addBookToLibrary(
    bookNameField.value,
    bookAuthorField.value,
    bookPagesField.value,
    bookReadStatus.value === "true"
  );
  modal.close();
  displayEachBook();
});

function removeBook(bookId) {
  myLibrary = myLibrary.filter((book) => book.id !== bookId);
  displayEachBook();
}

const bookNameField = document.getElementById("name");
const bookAuthorField = document.getElementById("author");
const bookPagesField = document.getElementById("pages");
const bookReadStatus = document.getElementById("readStatus");

function startUp() {
  addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 488, true);
  addBookToLibrary("The Divine Comedy", "Dante Alighieri", 442, false);
  addBookToLibrary("1984", "George Orwell", 328, true);
  displayEachBook();
}

startUp();
