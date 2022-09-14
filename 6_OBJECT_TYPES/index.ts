// 1 - tipo de objeto para função com interface
interface Product {
    name: string,
    price: number,
    isAvailable: boolean
}

function showProductsDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`)

    if (product.isAvailable) {
        console.log("O produto está disponivel")
    }
}

const shirt: Product = {
    name: "Camise",
    price: 19.99,
    isAvailable: true
}

showProductsDetails(shirt)
showProductsDetails({ name: "Tênis", price: 129.99, isAvailable: false })

// 2 - interface opcionais 
interface User {
    email: string,
    role?: string
}

function showUser(user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1: User = { email: "Joao@email.com", role: "Admin" }
const u2: User = { email: "matheus@email.com" }


showUser(u1)
showUser(u2)

// 3 - propriedades readonly
interface Car {
    brand: string,
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}
console.log(fusca)

// fusca.wheels = 5

// 4 - index Signature (quando não sabemos o nome das chaves)
interface Coord {
    [index: string]: number
}

let coords: Coord = {
    x: 10
}

coords.y = 15

console.log(coords)

// coords.z = "teste"

// 5 - Extending Types
interface Human {
    name: string,
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const joao: Human = {
    name: "João",
    age: 19
}

console.log(joao)

const naruto: SuperHuman = {
    name: "Naruto",
    age: 30,
    superpowers: ["Clone das sombras", "Razengan"]
}

console.log(naruto)
console.log(naruto.superpowers[1])

// 6 - intersection types (Unir duas interface)
interface Character {
    name: string
}

interface Gun {
    type: string,
    calibre: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    calibre: 12
}

console.log(arnold)
console.log(arnold.calibre)

// 7 - ReadOnly Array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[3] = "Mamao"

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
    return `Frunta: ${item}`
})

console.log(myArray)

// myArray[0] = "teste"

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number]

// number[]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
// const mixedArray: fiveNumbers = [1, true, "teste", 4, 5]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["João", 30]

console.log(anotherUser[0])

anotherUser[0] = "Matheus"
console.log(anotherUser[0])

// anotherUser[1] = "teste"


// 9 - tuplas com readonly
function showNumbers(number: readonly [number, number]) {
    // number[0] = 10
    console.log(number[0])
    console.log(number[1])
}

showNumbers([1, 2])