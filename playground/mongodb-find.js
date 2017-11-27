// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name: 'Eðvald', age: 19};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

//    db.collection('Todos').find({
//        _id: new ObjectID('5a1c42f696222f273dd5189b')
//     }).toArray().then((docs) => {
//         console.log('Todos');
//         console.log(JSON.stringify(docs, undefined, 2));
//    }, (error) => {
//        console.log('Unable to fetch todos', error);
//    });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (error) => {
    //     console.log('Unable to fetch todos', error);
    // });

    db.collection('Users').find({name: 'Eðvald'}).toArray().then((docs) => {
        console.log(`Users`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (error) => {
        console.log('Unable to fetch todos', error);
    });

    // db.close();
});