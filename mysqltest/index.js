var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Demo@123",
  database: "demo"
});

con.connect(function(err) {
  const sql = "select * from Employees";  
  if (err) throw err;
  console.log("Connected!");
  con.query( "select * from Employees", function (err, result, fields) {
    if (err) throw err;
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row.name+" "+row.id);
    });
  });
});