//Require the dbms file.
/* newLogin.js 
 * Made with the help from https://expressjs.com/ 
 * 
 */

var express = require('express');
var dbms = require('./dbms.js');
var router = express.Router();
//Requirements to use bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Expect a post to the server to send the JSON object*/
router.post('/',function(req, res, next) {
    
    var myEmail = req.body.email;
    const myPassword = req.body.password;
    var myHash;
    
    //Hashed the password
    bcrypt.hash(myPassword, saltRounds, function(err, hash) {
	
	dbms.dbquery("INSERT INTO users (email, password) VALUES ('"+myEmail+"', '"+hash+"')",
                     function (err, data){ });
    });
    
});


module.exports = router;
