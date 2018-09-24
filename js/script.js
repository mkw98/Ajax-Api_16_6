var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');


$('#search').click(searchCountries);




function searchCountries() {
 	var countryName = $('#country-name').val();
  if(!countryName.length) countryName = 'Poland';
}


//Ostatnim krokiem jest napisanie samej logiki wyszukiwania. Do tego celu użyjemy jQuery'owego ajaxa. 
//Żądanie spróbujcie skonstruować sami na podstawie dokumentacji.

//Zauważcie, że w kodzie poniżej użyliśmy parametru, który określa, jaka funkcja ma zostać wykonana 
//w przypadku powodzenia zapytania - jest to showCountriesList(). Poniżej kod funkcji:

function searchCountries() {
 	var countryName = $('#country-name').val();
if(!countryName.length) countryName = 'Poland';
$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
//Pobieranie wyników
//Weźmy się za implementację funkcji, która zajmie się logiką pokazywania listy krajów showCountriesList(). 
//Pierwszą rzeczą, którą musimy zrobić, jest wyczyszczenie listy krajów po poprzednim zapytaniu. 
//Do tego celu na liście użyjemy metody empty().
// Nasza funkcja showCountriesList() ma w definicji parametr resp, czyli obiekt JSON,
// który przesyła do niej metoda .ajax() - możemy nazwać ten parametr dowolnie, nie istnieje żaden wzór, 
//z którego trzeba skorzystać, ale w tym ćwiczeniu trzymajmy się tego nazewnictwa.

function showCountriesList(resp) {
  countriesList.empty();
}
//Zanim przejdziemy do kolejnego kroku, wywołajcie jakieś wyszukiwanie i sprawdźcie w zakładce network,
// jak wygląda odpowiedź z serwera.

//W przykładzie widzicie zapytanie, które miało postać 3 liter. Odpowiedź na nie wygląda następująco:


//W odpowiedzi dostajemy kolekcję obiektów reprezentujących kraje.

//Wyświetlanie wyników
//Array udostępnia specjalną metodę forEach(), której działanie jest bardzo podobne do pętli for. 
//Metoda forEach() ma za zadanie przeiterować po każdym elemencie tablicy resp (to tutaj jest ukryta nasza odpowiedź) 
//i wykonać na każdym elemencie pewną funkcję.

//Jako parametr takiej funkcji przyjmujemy każdy pojedynczy element z listy (parametr item) - wynika to 
//z konstrukcji pętli forEach()

function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item) {
        //Here is the code that will execute on each successive item in the collection. A single item is hidden under an item variable.
    });
}
//Dopiszmy jeszcze do środka tej funkcji kod, za pomocą którego stworzymy nowy element listy, 
//ustawimy jego tekst na taki, jaki kryje się w pojedynczym elemencie z kolekcji, którą dostajemy z serwera, 
//a na koniec dodajmy element do listy krajów (countriesList).

resp.forEach(function(item){
   	$('<li>').text(item.name).appendTo(countriesList);
});