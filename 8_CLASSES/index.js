"use strict";
// 1 - campos em classe (sem valores)
class User {
}
const joao = new User();
console.log(joao);
joao.name = "João";
// joao.job = "Programador"
console.log(joao);
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const matheus = new NewUser("Matheus", 22);
console.log(matheus);
// const pedro = new NewUser("Pedro")
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca turbo";
// fusca.wheels = 5
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destoi = new KillerMachine("Destoi", 4);
console.log(trator);
console.log(destoi);
// 5 -Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - O this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} de cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 450);
const scania = new Truck("Scania", 400);
volvo.showDetails();
scania.showDetails();
// 7 - Utilizando getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const joaolino = new Person("João", "Lino");
console.log(joaolino.name);
console.log(joaolino.fullName);
//8 - Utilizando setters
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoods() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 10;
console.log(myCoords);
console.log(myCoords.getCoods);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}`;
    }
}
const myPost = new blogPost("Hello word!");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é ${this.title}`;
    }
}
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
    showName() {
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando outra coisa");
    }
}
const myObjt = new Nova();
myObjt.someMethod();
// 11 - visibilidade: public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - visibilidade: protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Esse método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showprotectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
// console.log(fInstance.x)
fInstance.showX();
// fInstance.protectedMethod()
fInstance.showprotectedMethod();
// 13 - visibilidade: private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado!");
    }
    showprivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// console.log(pObj.privateMethod)
pObj.showprivateMethod();
// class Teste extends PrivateClass{
//     myMethod(){
//         this.privateMethod()
//     }
// }
// 14 - Static members
class StaticMember {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMember.prop = "Teste static";
console.log(StaticMember.prop);
StaticMember.staticMethod();
// 15 - Generic class
class Item {
    constructor(primeiro, segundo) {
        this.priemiro = primeiro;
        this.segundo = segundo;
    }
    get ShowPrimeiro() {
        return `O primeiro é ${this.priemiro}`;
    }
}
const newItem = new Item("Caixa", "surpresa");
console.log(newItem);
console.log(newItem.ShowPrimeiro);
console.log(typeof newItem.priemiro);
const segundoItem = new Item(12, true);
console.log(segundoItem.ShowPrimeiro);
console.log(typeof segundoItem.priemiro);
// 16 - Parameters properties
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Price total: ${this.price}`;
    }
}
const newShirt = new ParametersProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showPrice);
console.log(newShirt.showQty);
//  17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("João");
console.log(pessoa);
console.log(pessoa.name);
// 18 - Abstract class
class AbstractClass {
}
// const newObj = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    ShowName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObj = new AbstractExample("Josias");
newAbstractObj.ShowName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
