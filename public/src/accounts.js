function findAccountById(accounts, id) {
  return accounts.find((account) => id === account.id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acct1, acct2) => acct1.name.last.toLowerCase() > acct2.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows({id}, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    borrows = book.borrows;
    borrows.forEach((borrow) => {
      if (id === borrow.id) totalBorrows += 1;
    });
  });
  return totalBorrows;
}


function getBooksPossessedByAccount({id}, books, authors) {
  const checkedOutBooks = books.filter((book) => book.borrows[0].returned === false && id === book.borrows[0].id);
  const booksWithAuthor = authors.reduce((authorMatch,author) => {
    authorCheck = checkedOutBooks.forEach(({id, title, genre, authorId, borrows}) => {
      let book = {id, title, genre, authorId};
      if (author.id === authorId) {
        book.author = author;
        book.borrows = borrows;
        authorMatch.push(book);
      }
    })
    return authorMatch;
    }, []);
return booksWithAuthor;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
