const connection = require('./database')
module.exports = (app) => {
    app.route("/users/comment").post(postUsers)
}

const postUsers =  function(request, response) {
    connection.query("SELECT * FROM comment_table", function (error, result ) {
        if(error)
        {
            console.log("Error in the query");
            console.log(error);
        }
        else 
        {
            console.log("successful query for put")
        } 
        let found = result.find((item) => {
            return item.name == request.body.name && item.tweets == request.body.tweets && item.comment == request.body.comment
        })
        if(found == undefined) {
             connection.query("INSERT INTO comment_table (name,tweets,comments) VALUES (?, ?,?)", [request.body.name,  request.body.tweets, request.body.comments] , function (error, result ) {
             if(error)
             {
                   console.log("Error in the query");
                   console.log(error);
             }
             else 
             {
                console.log("successful query for insert")
             }
            })
        }
        else {
            console.log("dupliucate item")
        }
     })
     response.sendStatus(204);
  }