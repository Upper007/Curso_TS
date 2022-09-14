// 1 - genericts
function ShowData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(ShowData(5))
console.log(ShowData("Testando generic"))
console.log(ShowData(true))
console.log(ShowData(["teste"]))

// 2 - Constraint em Generics
function showProductsName<T extends { name: string }>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}

const myObj = { name: "Porta", cor: "Branca" }
const otherProduct = { name: "Carro", wheels: 4, engine: 1.0 }
const thirdObj = { price: 19.99, category: "Roupa" }

console.log(showProductsName(myObj))
console.log(showProductsName(otherProduct))
// console.log(showProductsName(thirdObj))

//  3 - Interfaces com Generics
interface MyObj<T, U, Q> {
    name: string,
    wheels: T,
    engine: U,
    color: Q
}

type Car = MyObj<number, number, string>
type Pen = MyObj<boolean, boolean, string>

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.2, color: "Branco" }
const myPen: Pen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" }

console.log(myCar)
console.log(myPen)

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
    hd: "2TB",
    ram: "32GB"
}

console.log(getSomeKey(server, "ram"))
// console.log(getSomeKey(server, "teste"))

//  5 - keyof type operator
type Caracter = { name: string, age: number, hasDriveLicense: boolean }
type C = keyof Caracter

function showCharName(obj: Caracter, key: C): string {
    return `${obj[key]}`
}

const myChar: Caracter = {
    name: "João",
    age: 19,
    hasDriveLicense: true
}

console.log(showCharName(myChar, "name"))
console.log(showCharName(myChar, "age"))
// showCharName("teste", "dsaas")

// 6 - typeof type operator
const userName: string = "João"

const userName2: typeof userName = "Matheus"

// const userName3: typeof userName = 14

type x = typeof userName

const userName4: x = 'Joaquim'

//  7 - indexed access type
type Truck = { km: number, kg: number, description: string }

type Km = Truck['km']

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
    console.log(`O veículo tem a km de ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)

// 8 - Conditional Expressions Type
interface A {

}

interface B extends A {

}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5
// const someVar2: myType = "teste"

type myTypeB = Teste extends { showName(): number } ? string : boolean

//  9 - Template Literals Type
type TestA = "text"

type CustomType = `Some ${TestA}`

const testing: CustomType = "Some text"
// const testing2: CustomType = "Some text 2"

type a1 = "testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`

