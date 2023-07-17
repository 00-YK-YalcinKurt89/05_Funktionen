"use strict";

/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test ()

// // Funktionsrumpf (body) | callee
// // Funktionsdeklaration
// function test()
// {
//     console.log("Hallo Tobias!");
// }

/* Funktion 02a */
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen();

function ausgabeNamen() {
    // what happens in VEGAS ...
    let firstName = "Nico";
    console.log("Hallo " + firstName + "!");
}

// console.log(firstname); // Fehler --> SCOPE!

/* Funktion 02b */
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Daten für Parameter
ausgabeNamen2("Sohrab");    // call + Argument/ Argumente
ausgabeNamen2("Nico");
ausgabeNamen2("Yasmeen");


// Funktion mit Parameter/ Parametern
function ausgabeNamen2(firstName) {
        console.log("Hallo " + firstName + "!");
}

