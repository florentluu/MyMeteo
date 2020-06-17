const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


// import { DBhost, DBuser,DBpassword, DBdatabase } from 'react-native-dotenv'

// const connection = mysql.createPool({
//   host     : 'localhost',
//   user     : 'florent',
//   password : 'Milife1312',
//   database : 'whaza'
// });

//_____-----______//

require('dotenv').config({path:'../.env'})

  const PORT = process.env.PORT || 3000 
  const host = process.env.DBhost
  const user = process.env.DBuser
  const password = process.env.DBpassword
  const database = process.env.DBdatabase


const connection = mysql.createPool({
  host     : host,
  user     : user,
  password : password,
  database : database
});
console.log(connection)
// mysql:b7fb3d980df837:677a3898@eu-cdbr-west-03.cleardb.net/heroku_02048da86eec67a?reconnect=true

// connection.connect();

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/activity', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
      if (err) throw err; 

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM activity', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

app.get('/placeActivity', function (req, res) {
  connection.getConnection(function (err, connection) {
    if (err) throw err;
  connection.query('SELECT * FROM placeActivity', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});



// Starting our server.
app.listen(3306 || 3000, () => 
 console.log(`Go to ${PORT}so you can see the data.`)
);