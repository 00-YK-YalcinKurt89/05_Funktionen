"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo Tobias!");
}






/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() {
    // what happens in VEGAS ...
    let firstName = "Nico";
    console.log("Hallo " + firstName +"!");
}

// console.log(firstName);  // Fehler --> SCOPE!






/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

 // Argumente sind Daten für Parameter 
//  ausgabeNamen2("Sohrab"); // call + Argument(e)
//  ausgabeNamen2("Nico");
//  ausgabeNamen2("Yasmeen");

//  Funktion mit Parameter(n)
function ausgabeNamen2(firstName) {
    console.log("Hallo " + firstName +"!");
}






/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

ausgabeNamenParams("Max","Mütze");
ausgabeNamenParams(prompt("Vorname?"),prompt("Name?"));

function ausgabeNamenParams(firstName, familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!"); 
}