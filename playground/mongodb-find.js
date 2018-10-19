const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' ,{ useNewUrlParser: true} ,  (err , client) => {
  if(err){
    return console.log("Unable to connect to db server"); // return to stop the app
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp');

  db.collection('Users').find({
    name: 'Tomer'
  }).toArray().then((docs) => {
    console.log('Todos: ');
    console.log(JSON.stringify(docs , undefined , 2));
  } , (err) => {
    console.log('Unable to fetch todos' , err);
  });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // } , (err) => {
  //   console.log('Unable to fetch todos' , err);
  // });

  // client.close();
});
