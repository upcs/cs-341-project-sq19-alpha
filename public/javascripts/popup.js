function modalPop() {
    // Get the modal
    var modal = document.getElementById('myModal');
    
    // Get the button that opens the modal
    var btn = document.getElementById("findMyRoute");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeButton")[0];
    
    // When the user clicks the button, open the modal     
    modal.style.display = "block";

}

function hidePop(){
    // When the user clicks on <span> (x), close the modal
    var modal = document.getElementById('myModal');
    modal.style.display = "none";
    
}
    

