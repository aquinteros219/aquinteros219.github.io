const questionButton = document.getElementById("questionButton");
let answer = "";

questionButton.addEventListener('click', function(){ 
	document.getElementById("answer").innerHTML = "<button id='displayAnswer'>Display Answer</button></div>";
		//fetches the data from the jservice API, lines of code from google documentation
		fetch('http://jservice.io/api/random')
  			.then(
   				function(response) {
     	 			if (response.status !== 200) {
        				console.log('Looks like there was a problem. Status Code: ' +
          					response.status);
         				return;}
      				response.json().then(function(data) {

//implements data from API to the js file
    answer = data[0].answer;
    const question = data[0].question; 
    const category = data[0].category.title;
    document.getElementById("question").innerHTML = question;
    document.getElementById("category").innerHTML = "<h3>Your ccategory is: " + category + "</h3>";
    document.getElementById("answer").style.display = "block";
    document.getElementById("displayAnswer").addEventListener('click', function(){
    document.getElementById("answer").innerHTML = answer;
   		 });
      });
    }
  )
  			//continuation of fetching data
  			.catch(function(err) {
    			console.log('Fetch Error :-S', err);
  			});
});