
fetch('https://time.com') // this will call the fetch function passing the url of the API as a parameter
.then((response) => response.text()) // a function that return the parsing HTML of the given url page
.then((text) => console.log($('h2 > a'))); // Using chrome devtools, I could search for "The Latest 5 Stories" 

// collect the JSON object array
var latestStories = $$("h2 > a")
latestStories;

var tempObj = [];
for(i=18; i<23; i++) 
  {
	tempObj[i]={title:"", link:""};
	tempObj[i].title=latestStories[i].innerText;
	tempObj[i].link=latestStories[i].innerText;
	
   }


tempObj;
copy(tempObj);
