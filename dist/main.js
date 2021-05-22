"use strict";
console.log('Hola Kaito Kun');
//Tipo : Number
//Tipaod : Explicito donde el tipo de dato se mantiene a lo largo de la ejecucion de nuestro programa
var phone;
phone = 1;
phone = 38957230;
//phone = 'hola' //error la var es del tipo number
//Inferido
var phoneNUmber = 1234455; //aca let toma por defecto que va a ser del tipo number
phoneNUmber = 7645;
// phoneNUmber = 'hola'; //nos da error phoneNUmber se definio como Number
var phoneNUmber2 = 'hola'; //aca let toma por defecto que va a ser del tipo String
phoneNUmber2 = 'Kaito';
// phoneNUmber2 = 123; //nos da error phoneNUmber2 se definio como String
// Como definir valores hex, bin y octal
var hex = 0xf00d; //0x
var bin = 10; //0b
var oct = 484; //0o
//Tipo : Booleano (verdadero o falso)
//Tipado : Explicito donde el tipo de dato se mantiene a lo largo de la ejecucion de nuestro programa
var isPro;
isPro = true;
// isPro = 1; //error
// isPro = 'hola'; //error
//Tipado : Explicito
var isUserPro = false; //toma por defecto que es boolenao
isUserPro = true;
//isUserPro = 1; //error
//Tipo : String
var nombre = 'Mario';
nombre = "Mario Kaito";
// nombre = 1; //error
// Template String
// Uso de back-tick
var userInfo; //dentro de userInfo estara el template!
userInfo = "\n    userinfo:\n    username: " + nombre + "\n    lastname: " + (nombre + ' Kun Zubieta') + "\n    phone: " + phoneNUmber + "\n    ispro: " + isPro + "\n" //caratcer back-tick
;
console.log('userinfo', userInfo); //concatenamos unimos
