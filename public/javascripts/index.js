
//-------------------------------------------------------------------------------------
function sum(x,y) {
	return x+y;
}
//has to match function name
module.exports = sum;


//-------------------------------------------------------------------------------------
function goToHome() {
	var username = document.getElementById('username');
	var password = document.getElementById('password');
	var validUsername = /^[a-z]*(.gov)$/;
	var validPassword = /^[a-z]*(.gov)$/;
	var usernameVal = username.value;
	var passwordVal = password.value;
	var loginForm = document.getElementById('loginForm');
	var testBool = false;

	if ((usernameVal.match(validUsername)) && (passwordVal.match(validPassword))) {
		//alert('This is a valid username & password! (:');
		testBool = true;
		loginForm.action = "govHome.html";
	}
	else { // Otherwise...
		alert('WARNING: Must enter a valid username AND password.');
		testBool = false;
	}
	return testBool;
}
module.exports = goToHome;


//-------------------------------------------------------------------------------------
function submitZip(){
	var zipcodeInput = document.getElementById('zipcode');
	var validZipcode = /^[0-9]{5}$/;
	var textValue=zipcodeInput.value;
	var image = document.getElementById('testPic');

	if (textValue.match(validZipcode)){ 
		//alert('This is a valid zipcode! (:');
		$("form").remove();
		image.style.visibility = "visible";
		$("#tempMessage").text("We are working on your route!");
		$("#tempMessage").value("We are working on your route!");

	}
	else{ // Otherwise...
		alert('WARNING: Must enter a zipcode.');
	}
	return true;
}
module.exports = submitZip;



