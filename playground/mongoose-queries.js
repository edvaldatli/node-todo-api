const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5a1c82403523ffccc1926d4911';
//
// if (!ObjectID.isValid(id)) {
//   return console.log('Id not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if (!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Todo not found');
//   }
//   console.log('Todo by Id', todo)
// }).catch((error) => console.log(error));

var id = '5a1c70c946fa6244898b4e5a';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (error) => {
  console.log(error);
});
