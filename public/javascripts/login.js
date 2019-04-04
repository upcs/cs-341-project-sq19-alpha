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

var toReturn = false;
function retrieveUser(password, email,callback){

    $.post("/retrieveUser", {passwordInput: password, emailInput: email}, function(data, status){
        alert("The post is happening");          
        toReturn = data[0].result; //This sets toReturn to be true
        callback(toReturn); //Callback function so that toReturn is set to true
	
    }, "json");
}

function alertHi(toReturn){
    if(toReturn){
	//Route to the logged in html page
	location.replace("https://35.230.96.224/indexLoggedIn.html");
    }
}

function goToHome() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var usernameVal = username.value;
    var passwordVal = password.value;

    if (isValidUnamePass(usernameVal, passwordVal)){
	
        retrieveUser(passwordVal, usernameVal, alertHi);
    }
    else { // Otherwise...
        alert('WARNING: Wrong username or password.');
    }
}



module.exports = {isValidUnamePass:isValidUnamePass, alertHi:alertHi};
