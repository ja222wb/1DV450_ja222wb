"use strict";

/*
* TEST 1
*/
// Test ett - Skapa en varibel, tilldela den värdet 10 och returnera variablen
function test1() {

//skriver in variablen vilket visas med "var" och ger det namnet tal och och värdet 10
    var tal = 10;

// retunerar variablen
    return tal; 	


	
}


/*
* TEST 2
*/
// Skapa två variabler och tilldela dessa de numeriska värdena 2.5 och 8. 
// Multiplicera sedan de två variablerna, returnera produkten
function test2() {

//skapar två variabler och tilldelar dem värden.	
	var tal1 = 2.5;
	var tal2 = 8;

//multiplicerar variablerna med varandra.
    var resultat = tal1 * tal2;




// retunerar variablen.
    return resultat;

}


/*
* TEST 3
*/
// Du får två variabler av datatypen Number (tal1 och tal2)
// Dessa kommer som parametrar i funktionen nedan
// Minska den som heter tal1 med den som heter tal2 och returnera resultatet av denna beräkning
function test3(tal1, tal2) {

//minskar tal1 med tal 2
    var resultat = tal1 - tal2;

// returnerar  variablerna
    return resultat;
    
	
}


/*
* TEST 4
*/
// Avrunda talet som kommer in som parametern tal (datatyp Number)
// Använd funktionen Math.round
function test4(tal) {

    // lägger in en datatyp för tal som avrundar taltet
    var tal = Math.round(tal);

    //retunerar tal
    return tal;



}


/*
* TEST 5
*/
// returnera längden på variablen text som kommer in som parameter. Variablen är av datatypen string
function test5(text) {

// eftersom texten redan är en variabel så räcker det att göra en return. 
    return text.length;as


  
    
    


	
}


/*
* TEST 6
*/
// Returnera den näst sista bokstaven i textsträngen som kommer in i parametern text
function test6(text) {


    // Jag vill retunera textsträngens näst sista bokstav. Atributet är text.length för att få reda på antal bokstäver i ordet. Jag tar sedan ett negativt attribut för att nå näst sista bokstaven.  
        
    return text.charAt(text.length - 2)


	
  

}


/*
* TEST 7
*/
// Parametrarna firstname och surname kommer in till funktionen
// returnera dessa som en textsträng på formen: "efternamn, förnamn"
// Exempelvis, innehåller firstname värdet "Greta" och surname värdet "Karlsson"
// ska du returnera textsträngen "Karlsson, Greta"
function test7(firstname, surname) {

//eftersom redan parametrarna har ett namn gör jag en retur direkt och byter plats på för och efternamn. 


    return surname + ", " + firstname; 
     

   


	
}


/*
* TEST 8
*/
// strängen som kommer in med namnet word är en textsträng som innhåller två ord med ett mellanslag emellan
// returnera det sista av dessa ord
// Kommer texsträngen "hej hopp" in ska alltså textsträngen "hopp" returneras
// Det finns flera sätt att lösa denna uppgift
// Ett tips kan vara att studera strängfunktionera indexOf och substr
//(se länktips i handledningen)
function test8(words) {


// använder mig av .words.lastIndexOf för att börja bakifrån. parentesen visar på att jag lägger mig vid mellanslaget i bordet Hej då
    var mellan = words.lastIndexOf(" ");

// använder mig av mellan +1 för att komma till den första bokstaven i sista ordet
    var sista = words.substr(mellan +1);


// Returnerar
    return sista;
 



}

/*
* TEST 9
*/
// Om numret i parametern number är större eller lika med 100 ska en boolean true returneras
// annars ska en boolean false resturneras
function test9(number) {

// lägger en of sats som talar om talet är störe eller lika med så får den rätt "true"   

    if (number >= 100) {

        return true;
    }

}

/*
* TEST 10
*/
// Om parametern epost ELLER namn är tomma strängar ska texten "Du har glömt att ange namn eller e-post"
// annars ska ytterligare en test göras ifall variablen epost innehåller ett @-tecken. Är det sant ska texten "Ditt meddelande skickas" returneras
// annars ska texten "Ange en e-postadress" returneras
// För att kolla om en textsträng innehåller ett speciellt tecken kan funktionen indexOf användas 
//(se länktips i handledningen)

function test10(epost, namn) {




//sätter en if funktion som ger visar skickar ett meddelande till "return" ifall det saknas bokstäver i text-rutan 
    if(namn.length <= 0) {
    

    //skriver en return to användaren som säger vad som måste göras
        return "Du har glömt att ange namn eller e-post"; 

    }

     //sätter en if funktion som ger visar skickar ett meddelande till "return" ifall det saknas bokstäver i text-rutan 
    if(epost.length <= 0) {

    //skriver en return to användaren som säger vad som måste göras
        return "Du har glömt att ange namn eller e-post";

    }

    if(epost.indexOf("@") > -1)
    {
        return "Ditt meddelande skickas";
    }

    // om det inget fungerar kommer ett meddelande om att ange en e-post adress.
        else {
            return "Ange en e-postadress";
 
 }




}

/*
* TEST 11
*/
// Du får en array som parameter till funktionen
// Returnera det mittersta värdet i denna array
// Ett tips kan vara att man kan behöva använda Math.round här för att räkna 
// ut det mittersta indexet i arrayen
//(se länktips i handledningen)
function test11(arr) {


    var l = arr.length;

    // -1 för att ta mig till den mittersta siffran. Använder Match.round för att avrunda uppåt. 
    var resultat = Math.round(l / 2 - 1);

    // skapade en variabel framför och använde mig av alert. 
    var resultat2 = (arr[resultat]);

    //retunerar resulat 2
    return resultat2;  
  
  
}


/*
* TEST 12
*/
// Du får en array arr som parameter till funktionen
// Arrayen innehåller ett antal tal. Räkna ut medelvärdet av dessa tal och returnera detta
// Medelvärdet är summan av alla tal i arrayen delat med antalet tal i arrayen
// Använd en for-loop för att lösa problemet
function test12(arr) {

   
    var i = 0;


    var length = arr.length;
    console.log(arr);
    //Summan blir noll.  Varje lop adderas med  ++  och ett på summan (+1)
    var summa = 0;
    for (i; i < length; i++) {
        summa += arr[i];
    }

    //medelvärdet blir summan/längden

    console.log(arr);
    var medel = summa / length;
    //returnerar medelvärdet
    return medel;

  
	
}






















/**
Kod för testning. Koden här under får du INTE röra!!
****************************************************
*/

var counter = 0;
if(test1() === 10) {doIt("test_1")}
if(test2() === 20) {doIt("test_2")}
if(test3(10, 5) === 5) {doIt("test_3")}
if(test4(3.5) === 4 && test4(3.4) === 3) {doIt("test_4")}
if(test5("erik") === 4 && test5("abcdefghijk") === 11){doIt("test_5")}
if(test6("tjolahopp") === "p" && test6("abcdefghijk") === "j"){ doIt("test_6")}
if(test7("Greta", "Karlsson") === "Karlsson, Greta" && test7("abc", "def") === "def, abc"){ doIt("test_7")}
if(test8("hej då!") === "då!" && test8("Pingvin Elefant") === "Elefant") {doIt("test_8")}
if(test9(100)  && !test9(99) && test9(101)) {doIt("test_9");}
if(test10("thajo@lnu.se", "John") === "Ditt meddelande skickas" 
&& test10("", "John") === "Du har glömt att ange namn eller e-post"
&& test10("thajo@lnu.se", "") === "Du har glömt att ange namn eller e-post"
&& test10("lnu.se", "John") === "Ange en e-postadress"
) {doIt("test_10")}
if(test11(new Array(2, 3, 5, 7, 11, 13, 17)) === 7 && test11(new Array(15, 1534, 1)) === 1534) {doIt("test_11");}
if(test12(new Array(2, 4, 6)) === 4 && test12(new Array(12, 87, 65, 23)) === 46.75) {doIt("test_13")}
function doIt(element_name) {
	counter++;
	document.getElementById(element_name).style.backgroundColor = "#00FF00";
}
if(counter > 12) {
	alert("Hurra! Du fixade första laborationen! Glöm inte att göra en release på github. Bra jobbat!");
}

