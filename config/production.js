
module.exports = {
  port: 80,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb+srv://qianhao:<6652167ABCD>@cluster0-tre06.mongodb.net/test?retryWrites=true&w=majority'
}


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://qianhao:<6652167ABCD>@cluster0-tre06.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(() => {
//   client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
