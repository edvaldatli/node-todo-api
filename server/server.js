var express = require('express');
var bodyParser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (error) => {
    res.status(400).send(error);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({
      errorMessage: 'Id is not valid'
    });
  }

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send({
        errorMessage: 'Todo not found'
      });
    }

    res.status(200).send({todo});
  }).catch((error) => {
    return res.status(400).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send({
      errorMessage: 'Id is not valid'
    });
  }

  Todo.findByIdAndRemove(id).then((todo) => {
    if (!todo) {
      return res.status(404).send({
        errorMessage: 'Todo not found'
      });
    }

    return res.status(200).send({todo})
  }).catch((error) => {
    return res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = {app};
