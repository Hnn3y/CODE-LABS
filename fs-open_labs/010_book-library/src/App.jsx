const App = () => {
  const library = {
    name: 'City Library',
    books: [
      { title: '1984', author: 'George Orwell', pages: 328 },
      { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 },
      { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 }
    ]
  }

  const LibraryHeader = ({ libraryName }) => {
    // TODO: Display library name in h1
    return(
      <>
      <h1>Welcome to {libraryName}</h1>
      </>
    )
  }

  const Book = ({ title, author, pages }) => {
    // TODO: Display one book's info
    return(
      <>
      <h2>Book`s info: <br/> Title: `{title}` by {author}, a {pages} pages read.</h2>
      </>
    )
  }

  const BookList = ({ books }) => {
    // TODO: Display all books (hint: books is an array!)
    // Use books[0], books[1], books[2] to access each book
    return(
      <>
    <Book title={books[0].title} author={books[0].author} pages={books[0].pages} />
    <Book title={books[1].title} author={books[1].author} pages={books[1].pages} />
    <Book title={books[2].title} author={books[2].author} pages={books[2].pages} />
    </>
    )
  }

  const TotalPages = ({ books }) => {
    // TODO: Calculate total pages of all books
    return(
      <>
      Total pages of all Books = {books[0].pages + books[1].pages + books[2].pages}
      </>
    )
  }

  return (
    <div>
      {/* TODO: Put it all together */}
      <LibraryHeader libraryName={library.name}/>
      <BookList books={library.books}/>
      <TotalPages books={library.books}/>
    </div>
  )
}

export default App