const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' ,{ useNewUrlParser: true} ,  (err , client) => {
  if(err){
    return console.log("Unable to connect to db server"); // return to stop the app
  }
  console.log('Connected to MongoDB server');

  var db = client.db('TodoApp')

  //deleteMany
  db.collection('Users').deleteMany({name: 'Tomer'}).then((result) => {
    console.log(result);
  });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'lala'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5bc9d45b562d7f1bfc59f0e3')}).then((result) => {
    console.log(result);
  });

  // client.close();
});
