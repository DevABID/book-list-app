/*
1.DOM selection
2.Event Listener
3.Basic validation 
4.Creating Element
5.Append
*/

const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const btn = document.getElementById("btn");
const book_list = document.getElementById("book-list");

// Event Listener

btn.addEventListener("click",function(e){
	
	e.preventDefault();
	
	
	if(title.value == "" && author.value == "" && year.value == ""){
		alert("Please insert information");
	}
		
	
	else{
		const newRow = document.createElement("tr");
		
		// title
		const newTitle = document.createElement("th");
		const c = newTitle.innerHTML = title.value;
		newRow.appendChild(newTitle);
		
		// author
		const new_author = document.createElement("th");
		new_author.innerHTML = author.value;
		newRow.appendChild(new_author);
		
		//year
		const new_year = document.createElement("th");
		new_year.innerHTML = year.value;
		newRow.appendChild(new_year);
		
		//akhn amra banabo newRow er pita..
		book_list.appendChild(newRow);	
			
	}
	
	
});
