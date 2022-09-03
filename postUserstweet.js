const connection = require('./database')
module.exports = (app) => {
    app.route("/users/tweet").post(postUsers)
}

const postUsers =  function(request, response) {
    connection.query("SELECT * FROM tweet_table", function (error, result ) {
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
            return item.name == request.body.name && item.tweets == request.body.tweets
        })
        if(found == undefined) {
             connection.query("INSERT INTO tweet_table (name,tweets) VALUES (?, ?)", [request.body.name,  request.body.tweets] , function (error, result ) {
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