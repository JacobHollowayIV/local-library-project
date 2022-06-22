function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let totalBorrowed = 0;
  books.forEach((book) => {
    if (book.borrows[0].returned === false) totalBorrowed++;
  })
  return totalBorrowed;
}

function getMostCommonGenres(books) {
  const topGenres = [];
  books.forEach(({genre}) => {
    if (topGenres.some((type) => type.name === genre)) {
      topGenres.forEach((type) => {
        if (type.name === genre) type.count ++;
      })
    } else {
      topGenres.push({name: genre, count: 1});
    } 
    topGenres.sort((gen1, gen2) => gen2.count - gen1.count);
    if (topGenres.length > 5) topGenres.pop();
  })
  return topGenres;
}

function getMostPopularBooks(books) {
const topBooks = [];
books.forEach(({title, borrows}) => {
  topBooks.push({name: title, count: borrows.length});
  topBooks.sort((book1, book2) => book2.count - book1.count);
  if (topBooks.length > 5) topBooks.pop();
  })
  return topBooks;
}

function getMostPopularAuthors(books, authors) {
  const topAuthors = [];
  authors.forEach(({id, name}) => {
    books.forEach((book) => {
      if (book.authorId === id) {
        if (topAuthors.some((author) => author.name === `${name.first} ${name.last}`)) {
          topAuthors.forEach((author) => {
            if (`${name.first} ${name.last}` === author.name) author.count += book.borrows.length;
          })
        } else {
          topAuthors.push({name: `${name.first} ${name.last}`, count: book.borrows.length});
        } 
      }
    })
    topAuthors.sort((auth1, auth2) => auth2.count - auth1.count);
      if (topAuthors.length > 5) topAuthors.pop();
  })
  return topAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
