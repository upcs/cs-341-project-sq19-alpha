
//-------------------------------------------------------------------------------------
function sum(x, y) {
	return x + y;
}
//has to match function name


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
		loginForm.action = "govHome.html";
	}
	else { // Otherwise...
		alert('WARNING: Must enter a valid username AND password.');
	}
}


//-------------------------------------------------------------------------------------
function isValidZip(zip){
	var validZipcode = /^[0-9]{5}$/;
	if (zip.match(validZipcode)) {
		return true;
	}
	else {
		return false;
	}
}
function submitZip() {
	var zipcodeInput = document.getElementById('zipcode');
	var textValue = zipcodeInput.value;
	var image = document.getElementById('testPic');

	if (isValidZip(textValue)) {
		$("form").remove();
		image.style.visibility = "visible";
		$("#tempMessage").text("We are working on your route!");
		$("#tempMessage").value("We are working on your route!");

	}
	else {
		alert('WARNING: Must enter a zipcode.');
	}
	return true;
}
module.exports = { sum:sum, isValidUnamePass:isValidUnamePass, isValidZip:isValidZip, goToHome:goToHome, submitZip:submitZip };



