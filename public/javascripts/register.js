

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
		document.location.href = "./login.html";
	}

}

//window.$ = window.jQuery = require('./jquery');
$( document ).ready(function() {

  const changeText = function (el, text, color) {
    el.text(text).css('color', color);
  };

  //email
  $('.input-1').keyup(function(){
    let len = this.value.length;
    var emailAdd = /^[a-z]*(.gov)$/;
    const pbText = $('.form-1 .progress-bar_text');
    if (len === 0) {
      $(this).css('border-color', '#2F96EF');
      changeText(pbText, 'Email is blank', '#aaa');
    } else if (!this.value.match(emailAdd)) {
      $(this).css('border-color', '#FF4B47');
      changeText(pbText, 'Email needs to be a gov email', '#FF4B47');
    } else {
      $(this).css('border-color', '#2DAF7D');
      changeText(pbText, '', '#2DAF7D');
    } 
  });

  //password
  $('.input-2').keyup(function(){
    let len = this.value.length;
    var passw=  /^[A-Za-z]\w{4,12}$/;
    const pbText = $('.form-2 .progress-bar_text');
    if (len === 0) {
      $(this).css('border-color', '#2F96EF');
      changeText(pbText, 'Password is blank', '#aaa');
    } else if (len > 0 && len <= 4) {
      $(this).css('border-color', '#FF4B47');
      changeText(pbText, 'Password is too short', '#FF4B47');
    } else if (!this.value.match(passw)) {
      $(this).css('border-color', '#FF4B47');
      changeText(pbText, 'Password needs to be started with a letter', '#FF4B47');
    } else {
      $(this).css('border-color', '#2DAF7D');
      changeText(pbText, '', '#2DAF7D');
    } 
  }); 
   
  //password repeated
  $('.input-3').keyup(function(){
    let len = this.value.length;
    var o_password = document.getElementById('userPwd');
    const pbText = $('.form-3 .progress-bar_text');
    if (len === 0) {
      $(this).css('border-color', '#2F96EF');
      changeText(pbText, 'Repeated password is blank', '#aaa');
    } else if (!(this.value == o_password.value)) {
      $(this).css('border-color', '#FF4B47');
      changeText(pbText, 'Repeated password does not match', '#FF4B47');
    } else {
      $(this).css('border-color', '#2DAF7D');
      changeText(pbText, '', '#2DAF7D');
    } 
  }); 
});



module.exports = { isValidPassword: isValidPassword, isValidUsername: isValidUsername, isValidRepPsw:isValidRepPsw };
