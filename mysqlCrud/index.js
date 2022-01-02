var mysql = require('mysql');
var http = require('http');
var con = mysql.createConnection({
    host: "localhost",
    user: "awanish",
    password: "123456",
    database: "project"
  });
  con.connect(function(err) {
    if (err) throw err;
    con.query("select * from customers", function (err, result) {
      if (err) throw err;
      console.log(result);
      storage.setItem('awani', result);
    });
  });
//create a server object:
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Table created");
//     });
//   });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted");
//     });
//   });


http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080);