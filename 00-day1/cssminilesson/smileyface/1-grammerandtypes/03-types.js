//* Booleans
let on = true
console.log(on)

let off = false
console.log(off)

//* NULL
let empty = null
console.log(empty)

//* UNDEFINED
let undef = undefined
console.log(undef)

let x;
console.log(x)

//* NUMBERS

let degrees = 90
console.log(degrees)

let precise = 999999999999999
console.log(precise)

let rounded = 9999999999999999
console.log(rounded)

let notQuite = 0.2 + 0.1
console.log(notQuite)

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10
console.log(numbersAreHard)

let a = Number('123')
console.log(a)

//* Strings
let stringOne = "double quotes"
let stringTwo = 'Single quotes'
let stringThree = 'I\m home'
let stringFour = "I'm home"
let stringFive = `You can use ${stringOne} or ${stringTwo}`
console.log(stringFive)

let first = 1050 + 100
let second = '1050 + 100'

console.log(first)
console.log(second)

console.log(typeof first)
console.log(typeof second)

let animal = 'dog'

console.log('I have a ' + animal)
console.log(`I have a ${animal}`)


//* objects

let frodo = {
    race: 'hobbit',
    rings: 1,
    isShort: true
}

console.log(frodo)
console.log(typeof frodo);

//* ARRAYS
let tacos = ['large', 4, true];
console.log(tacos);
console.log(typeof tacos);

let firstName = 'Marcel'
let lastName = 'Harden'
let address = '6307'
let street = 'Meadowlark drive'
let city = 'Indianapolis'
let state = 'Indiana'
let zip = '46226'
console.log(firstName)+(lastName)
console.log(lastName)
console.log(address)
console.log(street)
console.log(city)
console.log(state)
console.log(zip)

//* string properties and methods
let name = 'Marcel'
console.log(name.length)

console.log(name.toUpperCase())

let home = 'My home is Michigan'
console.log(home.includes('Michigan'))

let sent = 'This sentence will be split into individule parts'
let res = sent.split(' ')
console.log(sent)
console.log(res)