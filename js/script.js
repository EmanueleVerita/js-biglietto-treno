/*

VARIABILE CHILOMETRI

*/

const kmPercorsi = prompt ('Quanti cihlometri devi percorrere?');

console.log(kmPercorsi, typeof kmPercorsi);


/*

VARIABILE ETA'

*/

const age = prompt ('Quanti anni hai?');

console.log(age, typeof age);


/*

COSTO BIGLIETTO

*/

const ticketCost = kmPercorsi * 0.21 ;

console.log(ticketCost, typeof ticketCost);


/*

SE MINORENNE

*/

if(age <= 18){

    const ticketCostUnder = ticketCost * 0.8 ;

}


/*

SE MAGGIORE DI 65 ANNI

*/

if(age >= 65) {

    const ticketCostOver = ticketCost * 0.6 ;

}


/*

STAMPA COSTO BIGLIETTO

*/

let price = ticketCost.toFixed(2);

console.log(price, typeof price);

document.getElementById('my-p').innerHTML = price;




let priceUnder = ticketCostUnder.toFixed(2);

console.log(priceUnder, typeof priceUnder);

document.getElementById('my-p').innerHTML = priceUnder;




let priceOver = ticketCostOver.toFixed(2);

console.log(priceOver, typeof priceOver);

document.getElementById('my-p').innerHTML = priceOver;