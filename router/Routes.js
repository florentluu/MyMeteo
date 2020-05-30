const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'wazaa'
});

// Starting our app.
const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/activity', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

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
  connection.query('SELECT * FROM placeActivity', function (error, results, fields) {
    if (error) throw error;
    res.send(results)
  });
});
});



// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://192.168.0.40:3000/activity so you can see the data.');
});