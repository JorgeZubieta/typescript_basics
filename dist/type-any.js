"use strict";
// Tipo explicito
var idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
// Tipo Inferido
var otherId; //typescrip infiere que esa var sera del tipo Any
otherId = 1;
otherId = '1';
// otherId = true; tambien acepta este valor pero no es relativo ahora
console.log('otherId', otherId);
var surprise = 'hello SuperTypescript';
// surprise.sayHello(); // Error
var res = surprise.substring(6); // Error
console.log('res', res);
