"use strict"
const PORT = 3000
let express = require('express')
let app     = express()
let router  = require('./routes.js')

let port = process.env.PORT || PORT

app.use('/', router)
app.listen(port, () => console.log(`Backend listening on port ${port}`))
