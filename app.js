const http=require('http')
const express = require('express')
const app = express()

const bodyParser    = require('body-parser')
const req = require('express/lib/request')
//const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./getUserstweet')(app)
require('./putUsers')(app)
require('./postUserstweet')(app)
require('./deleteUsers')(app)
require('./getUsertweet')(app)
require('./postUserscomment')(app)
require('./getUserscomment')(app)
require('./getUsercomment')(app)


app.listen(8080)
