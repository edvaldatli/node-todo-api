const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '5a1d9188069f30f4267dcd53'}).then((todos) => {
//
// });

Todo.findByIdAndRemove('5a1d9188069f30f4267dcd53').then((todo) => {
  console.log(todo);
});
