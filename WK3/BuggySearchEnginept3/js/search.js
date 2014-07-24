// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), //define element for search results
		searchInput = document.forms[0].search,   //define element for search input
		currentSearch = '' //define current search as empty string
	;
	
	// Validates search query
	var validate = function(query){  //fixed spelling for validate
	//^^assign anonymous function to variable validate
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){  //made === instead of =
			query = query.substring(1, query.length); //loop as long as test condition is true
		};
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1); //loop as long as test condition is true
		};//close return
		
		if(query.length < 3){ //if search query is less than 3 characters, prompts to search again
			alert("Your search query is too small, try again."); //alert for 3 characters
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus(); 
			return; //returns search input by user
		}; //close
		
		search(query); //searches query
	}; //close
	
	var search = function(query){ //does function query
		
		
		var queryArray = query.split(" ");  //changed join to "split"
		// split the user's search query string into an array
		
		
		var results = []; //pulls up results // array to store matched results from database.js

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ //using Database in js file
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');
			var dbitem = db[i].toLowerCase().substring(0, dbTitleEnd);
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ //declaring variable i and initializing 0, checks that it is less than jj, increments i by 1 after passing through the loop.
				var qitem = queryArray[ii].toLowerCase(); 
				
				// is the keyword anywhere in the video title?
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){ 
					results.push(db[i]); //if match is found full database goes to array  
				}; 
			};
		};
		
		results.sort(); //sorts results
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ //if items were found
			noMatch(); //if no match was found
		}else{
			showMatches(results); //shows result
		};
	};
	
	var noMatch = function(){ //variable for no matches found
		var html = ''+  //variable for html
			'<p>No Results found.</p>'+ //no results
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>' //if no items were found then this shows up
		;
		resultsDIV.innerHTML = html; //gets html syntax
	};
	
	
	var showMatches = function(results){ // Put matches into page as paragraphs with anchors
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', //list of results
			title, //title of page
			url //url of page
	;
		
		
		for(var i=0, j=results.length; i<j; i++){ // loop through all the results search() function 
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd); //returns integer between 0 and title
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length); //results will show if search is longer than 2 letters
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>'; //pops up query info with link and title
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value; //search input value searches through query
		validate(query); //searches through query

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false; //return function with no results
	}; //close return

})();