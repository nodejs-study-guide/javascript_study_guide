// tsc 02-extend-interfaces.ts ; node 02-extend-interfaces.js

// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html#interfaces


interface Creature {
  id: number,
  name: string,
  warmBlooded: boolean,
  extinct: boolean,
}

interface Person extends{
  id: number,
  firstName: string,
  lastName: string,
}
