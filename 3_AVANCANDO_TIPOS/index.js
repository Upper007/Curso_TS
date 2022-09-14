"use strict";
// 1 - arrays 
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["João", "Lino"];
// nomes.push(4)
//2-  Outras sintaxe de arrays
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[0]);
// 3- any
const arr1 = [11, "teste", true, [], { nome: "João" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parâmetros de função
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b")
// 5 - retorno de funçao
function greeting(name) {
    // return 5
    return `Olá ${name}`;
}
console.log(greeting("João"));
// console.log(greeting(123))
// 6 - função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCoord(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoord(objCoord);
// passCoord([1,2]) ou passCoord({nome:1,sobrenome:2})
const passoaObj = { nome: "João", surname: "Lino" };
//  8 - props opcionas
function show(a, b, c) {
    console.log("A:" + a);
    console.log("B:" + b);
    if (c) {
        console.log("C:" + c);
    }
}
show(1, 2, 3);
show(4, 5);
// show(6)
// 9 - Validação de props opcionais
function adv(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(adv("João", "Lino"));
console.log(adv("lino"));
//10 - Union Types
function showb(balance) {
    console.log(`O saldo da conta é R${balance}`);
}
showb(100);
showb("500");
// showb(true)
const arr2 = [1, "teste", true];
// 11 - avancando em union types
function showUse(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUse(false));
console.log(showUse("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log(`X:${obj.x} Y:${obj.y} z:${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = { name: "João", age: 19 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal typs
let test;
test = "testando";
console.log(test);
function showDirec(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirec("left");
//showDirec("top")
// 16 - non-null Assertion Operador 
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
let n;
// n = 1
n = 100n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 -symbol
let symbolA = Symbol("a");
let symbolb = Symbol("b");
console.log(symbolA == symbolb);
console.log(symbolA === symbolb);
