//Require the dbms file.
//
/* orders.js 
 * This file is the server for the orders form.
 * Made with the help from https://expressjs.com/ 
 * 
 */

var express = require('express');
var dbms = require('./dbms.js');
var router = express.Router();


function queryData(data, res){
    
    var array = [];
    
    for(var i = 0; i<data.length; i++)
    {
	array.push({address: data[i].address, facility_name: data[i].facility_name});
    }
    res.json(array);
  
}


/* Expect a post to the server to get the JSON object*/
router.post('/', function(req, res, next) {
    
    dbms.dbquery("SELECT address FROM TIERONE",
		 function(err, data){
		     queryData(data, res);
		 }
		);
    
});

module.exports = router;
