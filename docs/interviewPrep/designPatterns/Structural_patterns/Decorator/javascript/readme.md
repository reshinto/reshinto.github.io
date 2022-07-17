# JavaScript Example

```js
/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
class Component {
  operation() {}
}

module.exports = Component;
```

```js
const Component = require("./Component");
/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  /**
   * The Decorator delegates all work to the wrapped component.
   */
  operation() {
    return this.component.operation();
  }
}

module.exports = Decorator;
```

```js
const Component = require("./Component");

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
class ConcreteComponent extends Component {
  operation() {
    return "ConcreteComponent";
  }
}

module.exports = ConcreteComponent;
```

```js
const Decorator = require("./Decorator");
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class ConcreteDecoratorA extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   * Decorators can execute their behavior either before or after the call to a
   * wrapped object.
   */
  operation() {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}

module.exports = ConcreteDecoratorA;
```

```js
const Decorator = require("./Decorator");
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */

class ConcreteDecoratorB extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   * Decorators can execute their behavior either before or after the call to a
   * wrapped object.
   */
  operation() {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}

module.exports = ConcreteDecoratorB;
```

```js
const ConcreteComponent = require("./ConcreteComponent");
const ConcreteDecoratorA = require("./ConcreteDecoratorA");
const ConcreteDecoratorB = require("./ConcreteDecoratorB");
/**
 * Decorator Design Pattern
 *
 * Intent: Lets you attach new behaviors to objects by placing these objects
 * inside special wrapper objects that contain the behaviors.
 */

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * This way the client code can support both simple components...
 */
const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log("");

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log("Client: Now I've got a decorated component:");
clientCode(decorator2);
```
