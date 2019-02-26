function dataFunction(){
    
    $.post("/orders",null,
	   function(data, status){

	       //Here we make a variable called tr that we will append into the
	       //html file. Basically we are writing html code here and looping through
	       //the content of the database.
	       
	       var tr = " ";
	       
	       for (var i = 0; i<data.length; i++)
	       {
		  tr += "<tr>"+"<td>" + data[i].address + "</td>"+"</tr>"; 
	       }
	       
	       $("#myData").append(tr);
	       
	   }, "json");
    
}

function main(){
    $("#dataButton").on('click', dataFunction);
}


/* End of file */





   
