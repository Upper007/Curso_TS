"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.45451;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const primeiroNome = "João";
console.log(primeiroNome.toUpperCase());
let fullName;
const lestName = "Lino";
fullName = primeiroNome + " " + lestName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
let ann = 'Teste';
let inf = "Teste";
// ann = 1
// inf = 1 
console.log('teste 3');
// Desafio
const n1 = 10;
const numberToString = n1.toString();
const meuNumero = `Eu vou imprimir o número ${numberToString}`;
console.log(meuNumero);
