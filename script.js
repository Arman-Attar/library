const myLibrary = []

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read ? "read" : "not read yet"
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    }
}

function addBookToLibrary(title, author, pages, read) {
    let book = new Book(title, author, pages, read)
    myLibrary.push(book)
}

function displayEachBook() {
    myLibrary.forEach(book => {
        const bookItem = document.createElement('div')
        const buttons = document.createElement('div')
        buttons.setAttribute('class', 'buttons')
        bookItem.setAttribute('class', "book-card")
        const bookTitle = document.createElement('h3')
        const bookAuthor = document.createElement('h5')
        const bookPages = document.createElement('h5')
        bookTitle.innerText = book.title
        bookAuthor.innerText = book.author
        bookPages.innerText = book.pages + " Pages"
        bookItem.appendChild(bookTitle)
        bookItem.appendChild(bookAuthor)
        bookItem.appendChild(bookPages)
        const readButton = document.createElement('button')
        readButton.setAttribute('class', "read-status")
        book.read = true ? readButton.innerText = "Read" : readButton.innerText = "Not Read"
        const removeButton = document.createElement('button')
        removeButton.setAttribute('class', "remove-book")
        removeButton.innerText = "Remove from Library"
        buttons.appendChild(readButton)
        buttons.appendChild(removeButton)
        bookItem.appendChild(buttons) 
        bookshelf.appendChild(bookItem)
    });
}



const 

const bookshelf = document.querySelector('.bookshelf')


function startUp() {
    addBookToLibrary("Crime and Punishment", "Fyodor Dostoevsky", 488, true)
    addBookToLibrary("The Divine Comedy", "Dante Alighieri", 442, false)
    addBookToLibrary("1984", "George Orwell", 328, true)
    displayEachBook()
}

startUp()