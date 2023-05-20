import React from 'react';
import { useSelector } from 'react-redux';
import NewBookForm from './NewBookForm';
import Book from './Book';

const BookList = () => {
  const books = useSelector((store) => store.books.books);

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <Book
          key={book.itemId}
          itemId={book.itemId}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <h2>Add a Book</h2>
      <NewBookForm />
    </div>
  );
};

export default BookList;
