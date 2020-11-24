let express = require('express')
let router  = express.Router()

let xml = require('xml');
let name_of_restaurants = [
    {f1: "1"}
]

// let passport    = require('passport');
// let xsenv       = require('@sap/xsenv');
// let JWTStrategy = require('@sap/xssec').JWTStrategy;

router.get('/Experimental/OData/OData.svc', function(req, res) {
    // res.setHeader('Content-Type', 'text/plain')
    // res.end("Backend has been reached\n")
    res.set('Content-Type', 'text/xml');
    res.send(xml(name_of_restaurants));
})
module.exports = router
