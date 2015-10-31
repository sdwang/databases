var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'siwill',
  database : 'chat'
});

connection.connect(function(err) {
  if (err) {
    console.log("All the errors");
    return
  } else {
    console.log('Connection established');
  }
});

connection.end();

module.exports = {
  connection: connection
}
// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


