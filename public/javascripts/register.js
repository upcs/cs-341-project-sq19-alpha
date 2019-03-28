function isValidUsername(uname) {
	var validUsername = /^[a-z]*(.gov)$/;
	if (uname.match(validUsername)) {
		return true;
	}
	else { // Otherwise...
		return false;
	}
}

function isValidPassword(pass) {
	var passw=  /^[A-Za-z]\w{4,12}$/;
	if(pass.match(passw)) { 
		//alert('Correct, try another...')
		return true;
	}
	else { 
		//alert('Wrong...!')
		return false;
	}
}


function isValidRepPsw(pass, RepPwd) { 
	if(pass == RepPwd){
		return true;
	} 
	else {
		//alert("second pwd incorrect");
		return false;
	}

}



function validate() {
	
    var username = document.getElementById('userEmail');
    var password = document.getElementById('userPwd');
    var passwordR = document.getElementById('userPwdR');
    var usernameVal = username.value;
    var passwordVal = password.value;
    var passwordRVal = passwordR.value;
    
    if (isValidUsername(usernameVal)) {
		//alert("Valid username. ");
    }
    else { // Otherwise...
		alert('Not Valid username. Username must be a valid .gov email address. ');
	}

	if (isValidPassword(passwordVal)){
		//alert("Valid pwd");
	}
	else{
		alert("Not valid password. Password must start with a letter and at least 5 character long. ");
	}

	if (isValidRepPsw(passwordVal, passwordRVal)){
		//alert("Valid pwd");
	}
	else{
		alert("Repeated Password Must Be The Same. ");
	}
	//alert("Sign up successfully. ");
	if(isValidUsername(usernameVal) && isValidPassword(passwordVal) && isValidRepPsw(passwordVal, passwordRVal)){
		alert("Sign up successfully. ");
	}

}


module.exports = { isValidPassword: isValidPassword, isValidUsername: isValidUsername, isValidRepPsw:isValidRepPsw };
