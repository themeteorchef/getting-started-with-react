import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import Books from '../components/Books';
import { Books as BooksCollection } from '../../api/books/books.js';

export default createContainer((props) => {
  const subscription = Meteor.subscribe('books');

  return {
    firstName: 'Alaina',
    readBooks: BooksCollection.find({ read: true }).fetch(),
    unreadBooks: BooksCollection.find({ read: false }).fetch(),
  };
}, Books);
