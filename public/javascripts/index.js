function sum(x,y) {
	return x+y;
}
//has to match function name
module.exports = sum;


//This function deletes the login box from the page
//and sets the rest of the page to visible
function skipFunction(){
    var loginBoxDiv = document.getElementById( 'loginId' );
    loginBoxDiv.parentNode.removeChild( loginBoxDiv );

    document.getElementById("mainWebpage").style.visibility= "visible" ;
}
//module.exports = skipFunction;

