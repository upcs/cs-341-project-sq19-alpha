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

function goToHome() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var usernameVal = username.value;
    var passwordVal = password.value;
    var loginForm = document.getElementById('loginForm');
    
    if (isValidUnamePass(usernameVal, passwordVal)) {
	loginForm.action = "indexLoggedIn.html";

    }
    else { // Otherwise...
	alert('WARNING: Must enter a valid username AND password.');
    }
}


module.exports = {isValidUnamePass:isValidUnamePass};
