"use strict";
//  1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossivel realizar essa soma!");
    }
}
sum("4", "59");
sum(12, 42.3);
sum("5", 6);
// Checando se valor existe 
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log('Por favor, defina uma operação');
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");
// operador instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const joao = new User("João");
const lino = new SuperUser("Lino");
console.log(joao);
console.log(lino);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dadosdo sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(joao);
userGreeting(lino);
// 4 - operador in  
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const mel = new Dog("Mel");
const bob = new Dog("BoB", "Pastor Alemão");
function showDog(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro é de raça ${dog.breed}`);
    }
    else {
        console.log("O cachorro é um SRD");
    }
}
showDog(mel);
showDog(bob);
function showUserReview(review) {
    if (!review) {
        console.log('Você não avaliou o produto!');
        return;
    }
    console.log(`A nota que vc deu foi de ${review}, obrigado!`);
}
showUserReview(false);
showUserReview(10);
showUserReview(3);
