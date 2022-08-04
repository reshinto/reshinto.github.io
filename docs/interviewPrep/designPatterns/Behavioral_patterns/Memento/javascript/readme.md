# JavaScript Example

```javascript
/**
 * The Caretaker doesn't depend on the Concrete Memento class. Therefore, it
 * doesn't have access to the originator's state, stored inside the memento. It
 * works with all mementos via the base Memento interface.
 */
class Caretaker {
  constructor(originator) {
    this.mementos = [];
    this.originator = originator;
  }

  backup() {
    console.log("\nCaretaker: Saving Originator's state...");
    this.mementos.push(this.originator.save());
  }

  undo() {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();

    console.log(`Caretaker: Restoring state to: ${memento.getName()}`);
    this.originator.restore(memento);
  }

  showHistory() {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getName());
    }
  }
}

module.exports = Caretaker;
```

```javascript
/**
 * The Memento interface provides a way to retrieve the memento's metadata, such
 * as creation date or name. However, it doesn't expose the Originator's state.
 */
class Memento {
  getState() {}

  getName() {}

  getDate() {}
}

module.exports = Memento;
```

```javascript
const Memento = require("./Memento");

/**
 * The Concrete Memento contains the infrastructure for storing the Originator's
 * state.
 */
class ConcreteMemento extends Memento {
  constructor(state) {
    super();
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace("T", " ");
  }

  /**
   * The Originator uses this method when restoring its state.
   */
  getState() {
    return this.state;
  }

  /**
   * The rest of the methods are used by the Caretaker to display metadata.
   */
  getName() {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  getDate() {
    return this.date;
  }
}

module.exports = ConcreteMemento;
```

```javascript
const ConcreteMemento = require("./ConcreteMemento");

/**
 * The Originator holds some important state that may change over time. It also
 * defines a method for saving the state inside a memento and another method for
 * restoring the state from it.
 */
class Originator {
  constructor(state) {
    /**
     * For the sake of simplicity, the originator's state is stored inside a
     * single variable.
     */
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  /**
   * The Originator's business logic may affect its internal state. Therefore,
   * the client should backup the state before launching methods of the
   * business logic via the save() method.
   */
  doSomething() {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  generateRandomString(length = 10) {
    const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return Array.apply(null, {length})
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join("");
  }

  /**
   * Saves the current state inside a memento.
   */
  save() {
    return new ConcreteMemento(this.state);
  }

  /**
   * Restores the Originator's state from a memento object.
   */
  restore(memento) {
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }
}

module.exports = Originator;
```

```javascript
const Caretaker = require("./Caretaker");
const Originator = require("./Originator");

/**
 * Memento Design Pattern
 *
 * Intent: Lets you save and restore the previous state of an object without
 * revealing the details of its implementation.
 *
 */
const originator = new Originator("Super-duper-super-puper-super.");
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

console.log("");
caretaker.showHistory();

console.log("\nClient: Now, let's rollback!\n");
caretaker.undo();

console.log("\nClient: Once more!\n");
caretaker.undo();
```
