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
	array.push({x_coord: data[i].X, y_coord: data[i].Y, address: data[i].address, name: data[i].facility_name, tier: data[i].tier});
    }
    res.json(array);
  
}


/* Expect a post to the server to get the JSON object*/
router.post('/', function(req, res, next) {
    
    dbms.dbquery("SELECT * FROM TIERONE",
		 function(err, data){
		     queryData(data, res);
		 }
		);
    
});

module.exports = router;
