const http=require('http')
const express = require('express')
const app = express()

const bodyParser    = require('body-parser')
const req = require('express/lib/request')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./getUserstweet')(app)
require('./postUserstweet')(app)
require('./getUsertweet')(app)
require('./postUserscomment')(app)
require('./getUserscomment')(app)
require('./getUsercomment')(app)


app.listen(8080)
