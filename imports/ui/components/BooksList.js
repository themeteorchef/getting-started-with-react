import React from 'react';

export default BooksList = (props) => (
  <div id={`${props.type}-books`} className={`BooksList ${props.isActive}`}>
    <ul className="books">
      {props.books.map((book) => {
        return (<li key={ book.title } className="book">{ book.title } by { book.author }</li>);
      })}
    </ul>
  </div>
);
