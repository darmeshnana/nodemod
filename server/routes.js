let express = require('express')
let router  = express.Router()
// let passport    = require('passport');
// let xsenv       = require('@sap/xsenv');
// let JWTStrategy = require('@sap/xssec').JWTStrategy;

router.get('/backend', function(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end("Backend has been reached\n")
})
module.exports = router
