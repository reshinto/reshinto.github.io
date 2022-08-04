# JavaScript Example

```javascript
/**
 * The Mediator interface declares a method used by components to notify the
 * mediator about various events. The Mediator may react to these events and
 * pass the execution to other components.
 */
class Mediator {
  notify(sender, event) {}
}

module.exports = Mediator;
```

```javascript
const Mediator = require("./Mediator");

/**
 * Concrete Mediators implement cooperative behavior by coordinating several
 * components.
 */
class ConcreteMediator extends Mediator {
  constructor(c1, c2) {
    super();
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  notify(sender, event) {
    if (event === "A") {
      console.log("Mediator reacts on A and triggers following operations:");
      this.component2.doC();
    }

    if (event === "D") {
      console.log("Mediator reacts on D and triggers following operations:");
      this.component1.doB();
      this.component2.doC();
    }
  }
}

module.exports = ConcreteMediator;
```

```javascript
/**
 * The Base Component provides the basic functionality of storing a mediator's
 * instance inside component objects.
 */
class BaseComponent {
  constructor(mediator = null) {
    this.mediator = mediator;
  }

  setMediator(mediator) {
    this.mediator = mediator;
  }
}

module.exports = BaseComponent;
```

```javascript
const BaseComponent = require("./BaseComponent");

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 */
class Component1 extends BaseComponent {
  doA() {
    console.log("Component 1 does A.");
    this.mediator.notify(this, "A");
  }

  doB() {
    console.log("Component 1 does B.");
    this.mediator.notify(this, "B");
  }
}

module.exports = Component1;
```

```javascript
const BaseComponent = require("./BaseComponent");

/**
 * Concrete Components implement various functionality. They don't depend on
 * other components. They also don't depend on any concrete mediator classes.
 */
class Component2 extends BaseComponent {
  doC() {
    console.log("Component 2 does C.");
    this.mediator.notify(this, "C");
  }

  doD() {
    console.log("Component 2 does D.");
    this.mediator.notify(this, "D");
  }
}

module.exports = Component2;
```

```javascript
/**
 * Mediator Design Pattern
 *
 * Intent: Lets you reduce chaotic dependencies between objects. The pattern
 * restricts direct communications between the objects and forces them to
 * collaborate only via a mediator object.
 */

const Component1 = require("./Component1");
const Component2 = require("./Component2");
const ConcreteMediator = require("./ConcreteMediator");

/**
 * The client code.
 */
const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

console.log("Client triggers operation A.");
c1.doA();

console.log("");
console.log("Client triggers operation D.");
c2.doD();
```
