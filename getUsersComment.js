const connection = require('./database')
module.exports = (app) => {
    app.route("/users/comment/").get(getUsers)
}

const getUsers = (request,response) => {
    connection.query("SELECT * FROM comment_table", function (error, result ) {
      if(error)
      {
          console.log("Error in the query");
          console.log(error);
      }
      else 
      {
          console.log("successful query1223")
          response.send(result)
      }
    })
} 





