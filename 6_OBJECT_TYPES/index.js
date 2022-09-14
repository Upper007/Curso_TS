"use strict";
function showProductsDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
const shirt = {
    name: "Camise",
    price: 19.99,
    isAvailable: true
};
showProductsDetails(shirt);
showProductsDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUser(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = { email: "Joao@email.com", role: "Admin" };
const u2 = { email: "matheus@email.com" };
showUser(u1);
showUser(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const joao = {
    name: "João",
    age: 19
};
console.log(joao);
const naruto = {
    name: "Naruto",
    age: 30,
    superpowers: ["Clone das sombras", "Razengan"]
};
console.log(naruto);
console.log(naruto.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    calibre: 12
};
console.log(arnold);
console.log(arnold.calibre);
// 7 - ReadOnly Array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamao"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Frunta: ${item}`;
});
console.log(myArray);
// number[]
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]
console.log(myNumberArray);
const anotherUser = ["João", 30];
console.log(anotherUser[0]);
anotherUser[0] = "Matheus";
console.log(anotherUser[0]);
// anotherUser[1] = "teste"
// 9 - tuplas com readonly
function showNumbers(number) {
    // number[0] = 10
    console.log(number[0]);
    console.log(number[1]);
}
showNumbers([1, 2]);
