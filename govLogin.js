function registerFunction() {
   
    var myEmail = document.getElementById("email").value;
    var myPassword = document.getElementById("password").value;
    var myPasswordAgain = document.getElementById("passwordrepeat").value;
    var mySalt = "abcd";
    alert(myEmail+" "+myPassword+ " " +mySalt);

    /*
    $.post("/govData",{email: myEmail, password: myPassword, salt: mySalt},
	   function(status){ }, "json");
    */



    /*
    var mysql = require('mysql');

    var con = mysql.createConnection({
	host: "localhost",
	user: "coleholbrook",
	password: "login",
	database: "LOGIN"
    });

   */
    
    alert("before require");
    var mysql = require('mysql');
    alert("after require");
    
    var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "login",
	database: "LOGIN"
    });

    alert("right before connect");
    con.connect(function(err) {
	con.query("INSERT INTO USERS (email, password, salt) VALUES ("+myEmail+", "+myPassword+", "+mySalt+")",
		  function (err, data){ }
		 );
	
    });

}


    
 


/*This function links all of the js functions to their respective
  buttons. */
function main(){    
    $("#confirmButton").on('click', registerFunction);
}


/* End of file */
