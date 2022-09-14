"use strict";
// 1 - genericts
function ShowData(arg) {
    return `O dado é: ${arg}`;
}
console.log(ShowData(5));
console.log(ShowData("Testando generic"));
console.log(ShowData(true));
console.log(ShowData(["teste"]));
// 2 - Constraint em Generics
function showProductsName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.99, category: "Roupa" };
console.log(showProductsName(myObj));
console.log(showProductsName(otherProduct));
const myCar = { name: "Fusca", wheels: 4, engine: 1.2, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "João",
    age: 19,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// showCharName("teste", "dsaas")
// 6 - typeof type operator
const userName = "João";
const userName2 = "Matheus";
const userName4 = 'Joaquim';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "Some text";
