function dataFunction(){
    //alert("hi");
    
    $.post("/orders",null,
	   function(data, status){
	       
	       //Here we make a variable called tr that we will append into the
   	       //html file. Basically we are writing html code here and looping through
	       //the content of the database.
	       
	       var tr = " ";
	       
	       for (var i = 1; i<data.length; i++)
	       {
		   tr += "<tr  onclick='moreInformation("+i+")'>"+"<td>" + data[i].name+ "</td>"+
		       "<td>"+ data[i].address+"</td>"
		       +"<td>"+ data[i].tier+"</td>"+"</tr>"; 
	       }
	      
	       $("#myData").append(tr);

	       return data[i].address;
	       
	   }, "json");
    
}
function filterFunction(){
   
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myData");
    tr = table.getElementsByTagName("tr");
    var myName;
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[0];
	myName =  tr[i].getElementsByTagName("td")[1];
	
	if (td) {
	    txtValue = td.textContent || td.innerText;
	    nameValue = myName.textContent || myName.innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1){
		tr[i].style.display = "";
	    } else if(nameValue.toUpperCase().indexOf(filter) > -1) {
		tr[i].style.display = "";
	    } else {
		tr[i].style.display = "none";
	    }
	}


    }
}

function moreInformation(index){
    // Get the modal
    var modal = document.getElementById('myDataModal');
    
    // When the user clicks the button, open the modal     
    modal.style.display = "block";

    
}

function hideDataModal(){
    // When the user clicks on <span> (x), close the modal
    var modal = document.getElementById('myDataModal');
    modal.style.display = "none";
    
}



function main(){
	//$("#dataButton").on('click', dataFunction);
    dataFunction();
    filterFunction();
}


/* End of file */





   
