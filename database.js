var mysql = require('mysql2')

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "PERSONAL_INFO"
})

connection.connect((err) =>{
  if(err) throw err
  console.log("database connected")

  connection.query("CREATE TABLE IF NOT EXISTS tweet_table ( name VARCHAR(255), tweets VARCHAR(255))", function(error, result) {
      if(error) throw error
      console.log("tweet table created")
  })
  connection.query("CREATE TABLE IF NOT EXISTS comment_table ( name VARCHAR(255), tweets VARCHAR(255), comments VARCHAR(255))", function(error, result) {
      if(error) throw error
      console.log("comment table created")
  })
})

module.exports = connection