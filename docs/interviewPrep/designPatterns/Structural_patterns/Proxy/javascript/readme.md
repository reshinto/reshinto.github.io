# JavaScript Example

```js
const Cryptr = require("cryptr");

const lock = (obj, password) => {
  const cryptr = new Cryptr(password);
  const newObj = {};
  for (const i of Object.keys(obj)) {
    newObj[i] = cryptr.encrypt(obj[i]);
  }

  return new Proxy(newObj, {
    set(target, key, value) {
      return (target[key] = cryptr.encrypt(value));
    },
    get(target, key) {
      return target[key];
    },
  });
};

const unlock = (obj, password) => {
  const cryptr = new Cryptr(password);
  const newObj = {};
  for (const i of Object.keys(obj)) {
    newObj[i] = cryptr.decrypt(obj[i]);
  }

  return new Proxy(newObj, {
    set() {
      throw new Error("This is a readonly object");
    },
  });
};

module.exports = {
  lock,
  unlock,
};
```

```js
// A proxy that generates an observable object, which allows us to attach a function which is executed every time a given object is modified
// this kind of behavior is often seen in frameworks like React and Vue, where changes to reactive data properties trigger re-renders on the UI, thus automating and optimizing UI updates

const obj = {
  name: "John Doe",
  age: 32,
  city: "Chicago",
  country: "US",
};

const makeReactive = (obj, observer) => {
  return new Proxy(obj, {
    set(target, key, value) {
      observer({
        [key]: value,
      });
      return (target[key] = value);
    },
  });
};

const reactive = makeReactive(obj, (res) => console.log(res));
// run with nodemon
reactive.color = "Green"; // this will cause an update displayed in the nodemon
```

```js
const {lock, unlock} = require("./Vault.js");
const password = "thisisastrongpassword123";

const obj = {
  name: "John Doe",
  age: 32,
  city: "Chicago",
  country: "US",
};

const person = lock(obj, password);
console.log(person);

person.favColor = "Red";
person.favFruit = "Apple";
console.log(person);

const unlocked = unlock(person, password);
console.log(unlocked);
unlocked.food = "Pizza"; // gets an error as is readonly
```
