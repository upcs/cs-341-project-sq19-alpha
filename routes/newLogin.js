//Require the dbms file.
/* orders.js 
 * This file is the server for the orders form.
 * Made with the help from https://expressjs.com/ 
 * 
 */

var express = require('express');
var dbms = require('./dbms.js');
var router = express.Router();

/* Expect a post to the server to send the JSON object*/
router.post('/',function(req, res, next) {
    
    var myEmail = req.body.email;
    var myPassword = req.body.password;
     
    dbms.dbquery("INSERT INTO users (email, password) VALUES ('"+myEmail+"', SHA1('"+myPassword+"'))",
		 function (err, data){ }
		);
    
});


module.exports = router;
