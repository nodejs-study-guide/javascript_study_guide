// tsc 03-extend-interfaces.ts ; node 03-extend-interfaces.js

// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces


interface Creature {
  id: number,
  name: string,
  warmBlooded: boolean,
  extinct: boolean,
}

interface Person1 extends Creature {
  id: number,
  firstName: string,
  lastName: string,
}

interface Bird {
  wingspan: number
}

interface Duck1 extends Creature, Bird {
  breed: string,
}


let user4: Person1 = { 
  name: "human",
  warmBlooded: true,
  extinct: false,
  id: 1,
  firstName: "John", 
  lastName: "Smith",
}

let duck4: Duck1 = { 
  name: "human",
  warmBlooded: true,
  extinct: false,
  id: 1,
  wingspan: 140,
  breed: 'Pekin'
}

function greetings03(person: Person1): void{

  console.log(`hello ${person.name}`)
}

function getWingspan(duck: Duck1): void{

  console.log(`The wingspan is ${duck.wingspan}`)
}

greetings03(user4)
getWingspan(duck4)