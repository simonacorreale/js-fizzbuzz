/* Ciao ragazzi,
Esercizio di oggi: FizzBuzz
nome repo: js-fizzbuzz
Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
Buon lavoro e buon divertimento! :slightly_smiling_face: */


// 1) Devo inizializzare le costanti per i due numeri a cui attribuisco i valori
// 2) Devo inserire il ciclo fore che va da 1 a 100 con l'incrementatore
// 3) Devo innestare un if per iniziare la condizione inerente ai multipli combinati 3-5
// 4) Devo innestare un else if per iniziare la condizione inerente ai multipli di 3
// 5) Devo innestare else if come secondo inerente ai multipli di 5 
// 6) Devo innestare else come ultimo parametro di chiusura
// 7) Mi devo ricordare di stampare per ognuna delle condizion interne il consol.log dentro le parentesi giuste XD


// Punto 1
const multipliTre = "Fizz";
const multipliCinque = "Buzz";

// Punto 2
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(multipliTre + multipliCinque); // Punto 3 - 7
    }
    else if (i % 3 === 0) {
        console.log(multipliTre); // Punto 4 - 7
    } else if (i % 5 === 0) {
        console.log(multipliCinque); // Punto 5 - 7
    } 
    else {
        console.log(i); // Punto 6-7
}
}

