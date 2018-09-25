$(document).ready(function(){
	console.log('DOM loaded');
	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = $('#countries');


	$('#search').click(searchCountries);



	function searchCountries() {
 		var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
	}


	function showCountriesList(resp) {
    		countriesList.empty();
    		resp.forEach(function(item) {
     	$('<li>').html( item.name + ', capital: ' + item.capital + "<br>" + '<img src="' +item.flag+ '" width="50">').appendTo(countriesList);
    });
};
});




