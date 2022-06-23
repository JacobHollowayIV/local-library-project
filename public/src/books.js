function findAuthorById(authors, id) {
  return foundAuthor = authors.find((author) => id === author.id);
}

function findBookById(books, id) {
  return foundBook = books.find((book) => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
  checkedOut = [];
  checkedIn = [];
  //added .map function
  books.map((book) => {
    let lastBorrow = book.borrows[0];
    lastBorrow.returned ? checkedIn.push(book) : checkedOut.push(book);
  })
  const currentBookStatus = [checkedOut, checkedIn];
  return currentBookStatus;
  }

function getBorrowersForBook({borrows}, accounts) {
  const fullBorrowHist = [];
  borrows.forEach((borrow) => {
    accounts.forEach(({id, ...rest}) => {
      let adjustedAccount = {};
      if (borrow.id === id) {
        adjustedAccount = {
          id: id,
          returned: borrow.returned,
          ...rest
        }
        fullBorrowHist.push(adjustedAccount);
      }
      if (fullBorrowHist.length > 10) fullBorrowHist.pop();
    })
    
  })
 return fullBorrowHist;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
