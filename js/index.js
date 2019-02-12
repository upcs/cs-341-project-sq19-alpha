function myfunction() {
    document.write(sum(2,3));
}

//This function deletes the login box from the page
//and sets the rest of the page to visible
function skipFunction(){
    var loginBoxDiv = document.getElementById( 'loginId' );
    loginBoxDiv.parentNode.removeChild( loginBoxDiv );

    document.getElementById("mainWebpage").style.visibility= "visible" ;
 
}


