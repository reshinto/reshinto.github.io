# JavaScript Example

```javascript
/**
 * The base State class declares methods that all Concrete State should
 * implement and also provides a backreference to the Context object, associated
 * with the State. This backreference can be used by States to transition the
 * Context to another State.
 */
class State {
  setContext(context) {
    this.context = context;
  }

  handle1() {}

  handle2() {}
}

module.exports = State;
```

```javascript
/**
 * The Context defines the interface of interest to clients. It also maintains a
 * reference to an instance of a State subclass, which represents the current
 * state of the Context.
 */
class Context {
  constructor(state) {
    /**
     * type {State} A reference to the current state of the Context.
     */
    this.transitionTo(state);
  }

  /**
   * The Context allows changing the State object at runtime.
   */
  transitionTo(state) {
    console.log(`Context: Transition to ${state.constructor.name}.`);
    this.state = state;
    this.state.setContext(this);
  }

  /**
   * The Context delegates part of its behavior to the current State object.
   */
  request1() {
    this.state.handle1();
  }

  request2() {
    this.state.handle2();
  }
}

module.exports = Context;
```

```javascript
const State = require("./State");

/**
 * Concrete States implement various behaviors, associated with a state of the
 * Context.
 */
class ConcreteStateA extends State {
  handle1() {
    console.log("ConcreteStateA handles request1.");
    console.log("ConcreteStateA wants to change the state of the context.");
    this.context.transitionTo(new ConcreteStateB());
  }

  handle2() {
    console.log("ConcreteStateA handles request2.");
  }
}

class ConcreteStateB extends State {
  handle1() {
    console.log("ConcreteStateB handles request1.");
  }

  handle2() {
    console.log("ConcreteStateB handles request2.");
    console.log("ConcreteStateB wants to change the state of the context.");
    this.context.transitionTo(new ConcreteStateA());
  }
}

module.exports = {
  ConcreteStateA,
  ConcreteStateB,
};
```

```javascript
/**
 * State Design Pattern
 *
 * Intent: Lets an object alter its behavior when its internal state changes. It
 * appears as if the object changed its class.
 */

const {ConcreteStateA} = require("./ConcreteState");
const Context = require("./Context");

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();
```
