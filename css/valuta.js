// JavaScript Document

function omvandlare(text) {
	
	
/* lägger in variablerna för aktuell valuta*/
	var euro = 9.53;
	var dollar = 6.93;
	
	
/* ger  variablerna ett resultatalterativ*/ 
	var resultateuro;
	var resultatdollar;
	
	
/*skickar inmatningen in i en divtagg där funktonen aktiveras */
	var svar = document.getElementById("svar");
		
		
/* Ger If isNaN för att ge användaren ett meddelande om den matar in text istället för siffror */
/* if isNaN = is not a number */
		
		if(isNaN(text)){
			
			svar.innerHTML = "<p> Enbart siffror </p>"+ svar.innerHTML;
		}

/*Om användern matar in ett nummer större än 0 aktiveras funktionen och en omvandling sker*/
		else if(text > 0){
			
			resultateuro = Math.round((text/euro)*100)/100;
			resultatdollar = Math.round((text/dollar)*100)/100;
			
			
/*av summa skrivs en text-sträng ut ut efter värdet av det inmatade talet.*/
			var summa = text + " I svenska kronor " + resultateuro + "  euro,  " + resultatdollar + " i dollar"; 
			svar.innerHTML = "<p>" + summa + "</p>"+ svar.innerHTML;
		}
		
		
/*Skulle användaren inte skriva något i rutan blir ,else, aktiv och ger användern en textsträng.*/
		else{
			svar.innerHTML = "<p>Mata in ett tal i rutan </p>"+ svar.innerHTML;
			}	
	}
