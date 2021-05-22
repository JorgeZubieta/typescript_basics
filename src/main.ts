console.log('Hola Kaito Kun');

//Tipo : Number
//Tipaod : Explicito donde el tipo de dato se mantiene a lo largo de la ejecucion de nuestro programa
let phone: number;
phone = 1;
phone = 38957230;
//phone = 'hola' //error la var es del tipo number

//Inferido
let phoneNUmber = 1234455; //aca let toma por defecto que va a ser del tipo number
phoneNUmber = 7645;
// phoneNUmber = 'hola'; //nos da error phoneNUmber se definio como Number

let phoneNUmber2 =  'hola'; //aca let toma por defecto que va a ser del tipo String
phoneNUmber2 = 'Kaito';
// phoneNUmber2 = 123; //nos da error phoneNUmber2 se definio como String

// Como definir valores hex, bin y octal
let hex : number = 0xf00d; //0x
let bin : number = 0b1010; //0b
let oct : number = 0o744; //0o


//Tipo : Booleano (verdadero o falso)
//Tipado : Explicito donde el tipo de dato se mantiene a lo largo de la ejecucion de nuestro programa
let isPro : boolean;
isPro = true;
// isPro = 1; //error
// isPro = 'hola'; //error

//Tipado : Explicito
let isUserPro = false; //toma por defecto que es boolenao
isUserPro = true;
//isUserPro = 1; //error

//Tipo : String
let nombre: String = 'Mario';
nombre = "Mario Kaito";
// nombre = 1; //error


// Template String
// Uso de back-tick
let userInfo: string; //dentro de userInfo estara el template!
userInfo=`
    userinfo:
    username: ${nombre}
    lastname: ${nombre + ' Kun Zubieta'}
    phone: ${phoneNUmber}
    ispro: ${isPro}
` //caratcer back-tick
;
console.log('userinfo', userInfo); //concatenamos unimos
