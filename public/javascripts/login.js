//-------------------------------------------------------------------------------------

function isValidUnamePass(uname, pass) {
	var validUsername = /^[a-z]*(.gov)$/;
	var validPassword = /^[a-z]*(.gov)$/;
	if ((uname.match(validUsername)) && (pass.match(validPassword))) {
		return true;
	}
	else { // Otherwise...
		return false;
	}
}

function retrieveUser(){
    
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var usernameVal = username.value;
    var passwordVal = password.value;
    
    $.post("/retrieveUser",null,
	   function(data, status){
	       	       
	       for (var i = 1; i<data.length; i++)
	       {
		   if (usernameVal == data[i].email)
		   {
		       if (SHA1(passwordVal) == data[i].password)
		       {
			   gotoHome();  
		       }
		  
		   }
       
	       }
	       alert("wrong email or password");
	    
	       
	   }, "json");
}

function goToHome() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var usernameVal = username.value;
    var passwordVal = password.value;
    var loginForm = document.getElementById('loginForm');
    
    if (isValidUnamePass(usernameVal, passwordVal)) {
	loginForm.action = "/indexLoggedIn.html";

    }
    else { // Otherwise...
	alert('WARNING: Must enter a valid username AND password.');
    }
}



module.exports = {isValidUnamePass:isValidUnamePass};
