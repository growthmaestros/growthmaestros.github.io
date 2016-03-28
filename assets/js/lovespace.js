var queryString = window.location.search.substring(1);
var h1Place = document.getElementById("lovespace-h1");

if (queryString.indexOf("geo") > -1) {
	console.log(queryString);
	var place = queryString.split("=")[1];
	console.log(place);
	h1Place.innerHTML =  " in " + place;
}




