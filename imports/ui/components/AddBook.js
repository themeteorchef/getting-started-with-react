import React from 'react';
import { Meteor } from 'meteor/meteor';

const handleAddBook = (event) => {
  event.preventDefault();

  const book = {
    title: document.querySelector('[name="bookTitle"]').value,
    author: document.querySelector('[name="bookAuthor"]').value,
    read: document.querySelector('[name="bookRead"]').checked,
  };

  Meteor.call('addBook', book, (error, bookId) => {
    if (error) {
      console.warn(error.reason);
    } else {
      document.querySelector('.AddBook').reset();
      console.log('Book added with ID:', bookId);
    }
  });
};

export default AddBook = () => (
  <form className="AddBook clearfix" onSubmit={ handleAddBook }>
    <input type="text" name="bookTitle" placeholder="Book Title" />
    <input type="text" name="bookAuthor" placeholder="Book Author" />
    <label><input type="checkbox" name="bookRead" /> Read?</label>
    <button type="submit">Add Book</button>
  </form>
);
