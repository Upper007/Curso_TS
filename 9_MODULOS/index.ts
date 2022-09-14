// 1 - importação de arquivos
import importGreet from "./greet.js";

importGreet()

// 2 - import de vaiavel 
import { x } from "./variable"

console.log(x)

// 3 - múltiplas importações
import { a, b, myFunc } from "./multiple"

console.log(a)
console.log(b)
myFunc()

// 4 - alias
import { someName as name } from "./changename.js";

console.log(name)

//  5 - importando tudo
import * as myNumbers from "./numbers"

console.log(myNumbers)

const nX = myNumbers.n1

console.log(nX)

myNumbers.showNumber()

// 6 - importando tipos 
import { Human } from "./mytype.js";

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new User("João", 19)

console.log(joao)