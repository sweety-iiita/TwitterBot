const connection = require('./database')
module.exports = (app) => {
    app.route("/users/comment/:name").get(getUser)
}

const getUser = function(request,response) {
    connection.query("SELECT * FROM comment_table", function(error,result) {
        console.log("get inside")
        console.log(request.params.name)
        let found = result.find((item) => {
          return (request.params.name) == item.name
        })
        console.log("found" + found)
        if(found)
        {
            console.log(request.params.name)
          connection.query("SELECT * FROM comment_table where name=?", request.params.name, function (error,result){
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
  //        response.send(result)
     //     response.sendStatus(204)
        }
        else
        {
          response.sendStatus(404)
        }})
}




