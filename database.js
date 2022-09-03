var mysql = require('mysql2')

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mapa@com123",
  database: "PERSONAL_INFO"
})

connection.connect((err) =>{
  if(err) throw err
  console.log("database connected")
 /* 
  connection.query("DROP TABLE tweet_table", function(error, result) {
    if(error) throw error
    console.log("table delated")
  })
*/
  connection.query("CREATE TABLE IF NOT EXISTS BMI_TABLE ( Gender VARCHAR(255), Heightcm VARCHAR(255) ,WeightKg VARCHAR(255), BmiCategory VARCHAR(255), HealthRisk VARCHAR(255))", function(error, result) {
      if(error) throw error
      console.log("table created")
  })
  connection.query("CREATE TABLE IF NOT EXISTS tweet_table ( name VARCHAR(255), tweets VARCHAR(255))", function(error, result) {
      if(error) throw error
      console.log("tweet table created")
  })
  connection.query("CREATE TABLE IF NOT EXISTS comment_table ( name VARCHAR(255), tweets VARCHAR(255), comments VARCHAR(255))", function(error, result) {
      if(error) throw error
      console.log("comment table created")
  })

/*  connection.query("CREATE TABLE users (id VARCHAR(255), name VARCHAR(255) ,email VARCHAR(255), mobile VARCHAR(255), dob VARCHAR(255))", function (error, result){
       if(error) throw error
       console.log("table created")
  })
  var values = [
    ['704351','John', 'sweetysah95@gmail.com', '8953317655', '26-02-1995'],
    ['855114', 'Paras' , 'xxxxxx@gmail.com', '8146698440', '12-05-1995'],
    ['560037', 'Ram krishan' , 'rrrrrr@gmail.com', '8146698431', '12-05-1996'],
    ['8512121', 'Pulpul' , 'ppppp@gmail.com', '8146698230', '12-05-1997'],
  ];
  connection.query("INSERT INTO users (id,name,email,mobile,dob) VALUES ?",[values] ,function (error, result) {
      if(error) throw error
      console.log("Number of records inserted: " + result.affectedRows)
  })*/
})

module.exports = connection