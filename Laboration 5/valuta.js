// JavaScript Document

function omvandlare(text) {
	
	
/* l�gger in variablerna f�r aktuell valuta*/
	var euro = 9.53;
	var dollar = 6.93;
	
	
/* ger  variablerna ett resultatalterativ*/ 
	var resultateuro;
	var resultatdollar;
	
	
/*skickar inmatningen in i en divtagg d�r funktonen aktiveras */
	var svar = document.getElementById("svar");
		
		
/* Ger If isNaN f�r att ge anv�ndaren ett meddelande om den matar in text ist�llet f�r siffror */
/* if isNaN = is not a number */
		
		if(isNaN(text)){
			
			svar.innerHTML = "<p> Enbart siffror </p>"+ svar.innerHTML;
		}

/*Om anv�ndern matar in ett nummer st�rre �n 0 aktiveras funktionen och en omvandling sker*/
		else if(text > 0){
			
			resultateuro = Math.round((text/euro)*100)/100;
			resultatdollar = Math.round((text/dollar)*100)/100;
			
			
/*av summa skrivs en text-str�ng ut ut efter v�rdet av det inmatade talet.*/
			var summa = text + " I svenska kronor " + resultateuro + "  euro,  " + resultatdollar + " i dollar"; 
			svar.innerHTML = "<p>" + summa + "</p>"+ svar.innerHTML;
		}
		
		
/*Skulle anv�ndaren inte skriva n�got i rutan blir ,else, aktiv och ger anv�ndern en textstr�ng.*/
		else{
			svar.innerHTML = "<p>Mata in ett tal i rutan </p>"+ svar.innerHTML;
			}	
	}
