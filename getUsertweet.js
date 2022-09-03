const connection = require('./database')
module.exports = (app) => {
    app.route("/users/tweet/:name").get(getUser)
}

const getUser = function(request,response) {
    connection.query("SELECT * FROM tweet_table LIMIT 5", function(error,result) {
        console.log("get inside")
        console.log(request.params.id)
        let found = result.find((item) => {
          return (request.params.name) == item.name
        })
        console.log("found" + found)
        if(found)
        {
            console.log(request.params.name)
          connection.query("SELECT * FROM tweet_table where name=?", request.params.name, function (error,result){
               if(error) 
               {
                 console.log("error in searching")
               }
               else 
               {
                 console.log(result)
                 console.log("get successful")
                 response.send(result)
               }
          })
        }
        else
        {
          response.sendStatus(404)
        }})
}




