import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const NewBookForm = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
    itemId: '',
  });
  const dispatch = useDispatch();

  const onFormUpdate = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(addBook({
      ...form,
      itemId: uuidv4(),
    }));

    setForm({
      title: '',
      author: '',
      itemId: '',
    });
  };

  return (
    <form>
      <div>
        <input name="title" id="title" type="text" placeholder="Book title" onChange={onFormUpdate} />
      </div>
      <div>
        <input name="author" id="author" type="text" placeholder="Book author" onChange={onFormUpdate} />
      </div>
      <button type="button" onClick={onSubmit}>Add new book</button>
    </form>
  );
};

export default NewBookForm;
