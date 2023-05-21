import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({
  itemId, title, author, category,
}) => {
  const dispatch = useDispatch();
  const handleRemoveBook = () => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        by
        <p>{author}</p>
        <p>{category}</p>
      </div>
      <div>
        <button type="button" onClick={handleRemoveBook}>Remove</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  itemId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  itemId: '',
  title: '',
  author: '',
  category: '',
};

export default Book;
