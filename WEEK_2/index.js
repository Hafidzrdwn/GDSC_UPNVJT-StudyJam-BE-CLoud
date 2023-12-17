const prompt = require('prompt-sync')()
const dayjs = require('dayjs')
const fs = require('fs')
const date = dayjs().format('DD-MM-YYYY HH:mm:ss')

const books = JSON.parse(fs.readFileSync('books.json').toString()) ?? []

const addBook = () => {
  console.clear()
  const name = prompt("What is the name of the book? ")
  const interest = prompt("What is the interest of the book? ")
  const price = prompt("What is the price of the book? ")
  const added = date

  books.push({ name, interest, price, added })
  console.log("Book added successfully!\n")

  prompt("Press enter to continue...")
}

const showBooks = () => {
  console.log("Showing books...\n")
  if (books.length === 0) { 
    console.log("No books to show\n")
  } else {
    console.log(`Showing ${books.length} books`)
    books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.name} (${book.interest}) - ${book.price} - ${book.added}`)
    })
  }

  prompt("Press enter to continue...")
}

const saveData = () => fs.writeFileSync('books.json', JSON.stringify(books))

let running = true

while (running) {
  console.clear()
  console.log("Favorite Books Library\n1. Show Books\n2. Add Book\n3. Save & Exit\n")

  const choice = prompt("What would you like to do? (1,2,3) : ")

  if(choice === "1") {
    showBooks()
  } else if (choice === "2") {
    addBook()
  } else if (choice === "3") {
    console.log("Exiting...\n")
    saveData()
    running = false
  } else {
    console.log("Invalid choice\n")
  }
}