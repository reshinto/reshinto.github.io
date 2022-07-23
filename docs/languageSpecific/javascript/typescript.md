# TypeScript

- developed by Microsoft
- it's a superset of JavaScript that adds new capabilities to the language
  - Most notable addition are static type definitions
    - Thanks to types, it's possible, for example, to declare what kind of arguments we are expecting and what is returned exactly in our functions or what's the exact shape of the object that we are creating
  - It makes our code more secure and robust by preventing a lot of bugs before code is even shipped
  - it catches problems during writing the code
- TypeScript offers a whole lot of other great mechanisms like interfaces, classes, utility types and so on
  - on bigger projects you can declare your TypeScript compiler configuration in a separate file and granularly adjust how it works, how strict it is and where it stores compiled files

## Installation

> npm i -D typescript

### Run

> npx tsc example.ts
