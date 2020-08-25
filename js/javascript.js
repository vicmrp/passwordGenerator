// En Backend funktion er en funktion som bruges af en anden funktion i scriptet.
// Frontend er en funktion som kommunikerer direkte med brugeren.
//Variabler
var arrayOfCharacters = [];
var finalPassword = [];
var checkBoxNum = document.getElementById("NumberOnOffCheck");
var checkBoxCap = document.getElementById("CapOnOffCheck");
var checkBoxEks = document.getElementById("ExcludeOnOffCheck");

//Funktionen genCharArray generer en array af alfabetet.
function genCharArray(charA, charZ) {
	var arrayOfCharacters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
	for (; i <= j; ++i) {
		arrayOfCharacters.push(String.fromCharCode(i));
		}
	return arrayOfCharacters;
}

//Funktionen genCharArrayCap generer en array af alfabetet i store bugstaver. 
function genCharArrayCap(charA, charZ) {
	var arrayOfCharacters = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
	for (; i <= j; ++i) {
		arrayOfCharacters.push(String.fromCharCode(i).toUpperCase());
	}
	return arrayOfCharacters;
}

//Tilføjer tal til a(rray).
function pushNumber() {
	for (i = 0; i <= 9; i++) {
		arrayOfCharacters.push(i.toString()); //toString gør så at hele arrayen består af strings.
	}
}

//tilføjer kapitalbugstaver array en som der bliver genereret random koder ud af. 
function pushCapLetters() {
	for (i = 0; i <= 25; i++) {
		arrayOfCharacters.push(genCharArrayCap('a', 'z')[i]);
	}
}

//Psoudo random funktion: Det er tilfældig heden bliver genereret. Måske skal et parameter tilføjes til funktionen. parameteret skal styre hvor lang a.length er. 
function randomFunction() {
	var x = Math.floor((Math.random() * arrayOfCharacters.length)); //a.length er længden af variablen a. 
	return x;
}

//Backend måske lidt Frontend.
//Funktionen som generer og udprinter den endlige kode til brugeren.
//Funktionen adding2 looper igennem 8 gange hvor den tilføjer tilfældige elementer fra a til finalPassword. Ved hjælp af funktionen .join(""). Er der ikke mellemrum imellem karaktererne.
function passwordGen(n) {
	for (i = 1; i <= n; i++) { //Looper 8 gange. 
		finalPassword.push(arrayOfCharacters[randomFunction()]); //Tilføjer en tilfældig karakter fra a til finalPassword.
	}
}

// Checker om brugeren vil tal med i sin kode.
function checkboxNumbers() { 
	if (checkBoxNum.checked == true) {
		pushNumber(); // Tilføjer tallene 0-9 til variblen a.
	}
}

// Checker om brugeren vil have store bugstaver med i sin kode.
function checkboxCapital() { 
	if (checkBoxCap.checked == true) {
		pushCapLetters();
	}
}

//Backend funktion som bruges af checkboxExclude til at fjerne uønskede karakterer.
function remove(array, element) {
	const index = array.indexOf(element);
	array.splice(index, 1);
	}

//Backend function, som bruges af 
	
//Frontend funktion som bruges til at fjerne uønskede karakterer.
function checkboxExclude() {
	if (checkBoxEks.checked === true) {	
		//Her skal der være en funktion som fjærner (i,1,o,I,L,O,1,0)
		//Looper igennem alle karakterer og fjærner dem hvis det ikke skal være der.
		for (i = 0; i<= arrayOfCharacters.length; i++) {
			if (arrayOfCharacters[i] === "1" || arrayOfCharacters[i] === "l" || arrayOfCharacters[i] === "o" || arrayOfCharacters[i] === "I" || arrayOfCharacters[i] === "L" || arrayOfCharacters[i] === "O" || arrayOfCharacters[i] === "0" || arrayOfCharacters[i] === "i") {
				remove(arrayOfCharacters, arrayOfCharacters[i]);
			}
		}
	}
}

//Functionen kigger på hvilken <option> som er valgt på listen.
//Formålet med funktionen er at brugeren selv skal kunne vælge hvor langt passwordet skal være.
// I version21, har du vist dig selv at når en bruger vælger en option så eksikverer denne funktion en bestemt algoritme.
function optionBox() {
	if (document.getElementById("8").selected == true) { 
		passwordGen(8);
	} 
	else if (document.getElementById("12").selected == true) {
		passwordGen(12);
	}
	else if (document.getElementById("16").selected == true) {
		passwordGen(16);
	}
	else if (document.getElementById("20").selected == true) {
		passwordGen(20);
	}
	else if (document.getElementById("24").selected == true) {
		passwordGen(24);
	}
	else if (document.getElementById("28").selected == true) {
		passwordGen(28);
	}
	else if (document.getElementById("32").selected == true) {
		passwordGen(32);
	}
	else if (document.getElementById("64").selected == true) {
		passwordGen(64);
	}
	else if (document.getElementById("128").selected == true) {
		passwordGen(128);
	}
	else if (document.getElementById("256").selected == true) {
		passwordGen(256);
	}
}

//Tjekker om passwordet indeholder et stort bugstav hvis det ønskes.
function capitalMinOne() {
	for (i = 0 ; i <= finalPassword.length; i++) {
		if (finalPassword[i] == finalPassword[i].toUpperCase()) {
			//alert(finalPassword[i]);
		}
	}
}

//Ændrer tekstfeltet i <input> til koden; før stod der: Dit password kommer her.
function changeValue() {
	document.getElementById("password").value = finalPassword.join("");
}

//Funktionen eksikverer alle funktionerne.
//Formålet med at have en funktion som eksikverer alle de andre funktionen er at man kan linke funktionen til en knap i html documentet.
function exe() {
	arrayOfCharacters = genCharArray('a', 'z'); // Gemmer alfabetet i variablen.
	checkboxCapital(); // Spørger om der skal store bugstaver med i koden.
	checkboxNumbers(); // Spørger om der skal være tal med i koden eller ej.		
	checkboxExclude(); // Spørger om visse bugstaver skal ekskluderes. 
	optionBox(); //Spørger om hvor langt passwordet skal være.
	passwordGen(); // Genererer et passsword.
	//document.getElementById("password").innerHTML = finalPassword.join("");
	//document.getElementById("password").innerHTML = finalPassword.join(""); //Printer finalPassword til et <p> HTML element
	
	//document.getElementById("demo2").innerHTML = arrayOfCharacters;
	//document.getElementById("demo3").innerHTML = arrayOfCharacters[23];
	//document.getElementById("demo4").innerHTML = arrayOfCharacters.length;
	changeValue()
	finalPassword = []; // Gør så at der ikke bliver tilføjet et password til det forrige. Men i stedet bare laver et nyt password.
}


// Making new change