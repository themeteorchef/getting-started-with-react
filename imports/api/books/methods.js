import { Meteor } from 'meteor/meteor';
import { Books } from './books';

Meteor.methods({
  addBook(book) {
    return Books.insert(book);
  }
});
