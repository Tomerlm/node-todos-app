// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' ,{ useNewUrlParser: true} ,  (err , client) => {
  if(err){
    return console.log("Unable to connect to db server"); // return to stop the app
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp')

  // db.collection('Todos').insertOne({
  //   text: 'Somthing to do',
  //   completed: false
  //
  // } , (err , result) => {
  //   if(err){
  //     return console.log('Unable to insert' , err);
  //   }
  //   console.log(JSON.stringify(result.ops , undefined , 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Tomel',
  //   age: 9,
  //   Hobby: 'Klidim'
  // } , (err , result) => {
  //   if(err){
  //     return console.log('Unable to insert' , err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
