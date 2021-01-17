var mysql = require('mysql');

var con = mysql.createConnection({
    host : 'localhost',
    port: '3306',
    user: 'root',
    password: 'tacktacktack'
  });

  con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected to mysql as id ' + con.threadId);
  });

  var initStr = "CREATE DATABASE IF NOT EXISTS tack";

  con.query(initStr, function(err, results, fields) {
      if (err) {
          console.error('error creating DB' + err.stack)
          return;
      }
      console.log(results, fields);
      console.log("database created successfully");
  })

  var selectDB = "USE tack";

  con.query(selectDB, function(err, results, fields) {
    if (err) {
        console.error('error creating DB' + err.stack)
        return;
    }
    console.log(results, fields);
})

  var initTable = "CREATE TABLE IF NOT EXISTS users " + 
  "(id int NOT NULL, firstN varchar(255), lastN varchar(255), "
  + "email varchar(255), pass varchar(255))";

  con.query(initTable, function(err, results, fields) {
    if (err) {
        console.error('error creating table' + err.stack)
        return;
    }
    console.log(results, fields);
    console.log("table initalized! you are ready to go!");
    return process.exit(0);
});

