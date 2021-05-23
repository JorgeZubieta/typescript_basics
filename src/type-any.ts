// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);

// Tipo Inferido
let otherId; //typescrip infiere que esa var sera del tipo Any
otherId = 1;
otherId = '1';
// otherId = true; tambien acepta este valor pero no es relativo ahora
console.log('otherId', otherId);

let surprise: any = 'hello SuperTypescript';
// surprise.sayHello(); // Error
const res = surprise.substring(6); // Error
console.log('res', res);