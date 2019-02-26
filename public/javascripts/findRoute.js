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

module.exports = {isValidZip:isValidZip};
