//Require the dbms file.
/* orders.js 
 * This file is the server for the orders form.
 * Made with the help from https://expressjs.com/ 
 * 
 */

var express = require('express');
var dbms = require('./dbms.js');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;


function queryData(data, res) {
    
    var array = [];
    for (var i = 0; i < data.length; i++) {
        array.push({ email: data[i].email, password: data[i].password} );
    }
    return data[data.length-1].password;
}

var deliver = [];
var element;

/* For some reason this function was needed to send the response. 
   It looks redundant but it had to happen */
function myLittleFunction(deliver, res){
    res.json(deliver);
}

/* Expect a post to the server to get the JSON object*/
router.post('/', function (req, res, next) {

    var myPassword = req.body.passwordInput;
    var myEmail = req.body.emailInput;
    var hashedPass;
    
    dbms.dbquery("SELECT * FROM users WHERE email = '"+myEmail+"'",
                 function (err, data) {
		     
                     hashedPass = queryData(data); //Gets the hashed value from the database

		     //Checks to see if the password entered works with the hashed value
                     element = bcrypt.compareSync(myPassword, hashedPass);

                     deliver = []; //Make sure deliver is empty for each post
                     deliver.push({result: element}); //Truth value held in element
                     myLittleFunction(deliver, res);  //Helper function to send the res
                 }
		); 
});

module.exports = router;
