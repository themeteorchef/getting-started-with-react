import { Meteor } from 'meteor/meteor';
import { Books } from '../books';

Meteor.publish('books', function() {
  return Books.find();
});
