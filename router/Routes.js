const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
// Starting our app.
const app = express();

// const connection = mysql.createPool({
//   host     : 'eu-cdbr-west-03.cleardb.net',
//   user     : 'b7fb3d980df837',
//   password : '677a3898',
//   database : 'heroku_02048da86eec67a'
// });

// //_____-----______//

require('dotenv').config({path:'../.env'})

const PORT = process.env.PORT

const connection = mysql.createPool({
  host: process.env.DBhost,
  user: process.env.DBuser,
  password: process.env.DBpassword,
  database: process.env.DBdatabase
});

console.log(connection)
// mysql:b7fb3d980df837:677a3898@eu-cdbr-west-03.cleardb.net/heroku_02048da86eec67a?reconnect=true


app.get('/', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {
      if (err) throw err; 

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT city, name, description FROM placeactivity UNION SELECT city, drinks, descriptionDrinks FROM activity;', 
    function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;
      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});



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
app.listen(PORT, () => 
 console.log(`Go to ${PORT}so you can see the data.`)
);