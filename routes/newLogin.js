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
    
    //variables to hold values that are to be inserted into the ORDERS database
    var username = document.getElementById('userEmail');
    var password = document.getElementById('userPwd');
  
    var myEmail = username.value;
    var myPassword = password.value;
   
  
  
    
    dbms.dbquery("INSERT INTO users (email, password) VALUES ("+myEmail+", SHA1("+myPassword+"))",
		 function (err, data){ }
		);
    
});


module.exports = router;
