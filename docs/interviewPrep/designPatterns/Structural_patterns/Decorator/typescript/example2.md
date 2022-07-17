# Example 2

```ts
/**
 * The base Component interface defines operations that can be altered by
 * decorators.
 */
export default interface Component {
  operation(): string;
}
```

```ts
import Component from "./Component";

/**
 * Concrete Components provide default implementations of the operations. There
 * might be several variations of these classes.
 */
export default class ConcreteComponent implements Component {
  public operation(): string {
    return "ConcreteComponent";
  }
}
```

```ts
import Component from "./Component";

/**
 * The base Decorator class follows the same interface as the other components.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped component and the means to initialize
 * it.
 */
export default class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  /**
   * The Decorator delegates all work to the wrapped component.
   */
  public operation(): string {
    return this.component.operation();
  }
}
```

```ts
import Decorator from "./Decorator";

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
export default class ConcreteDecoratorA extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   * Decorators can execute their behavior either before or after the call to a
   * wrapped object.
   */
  public operation(): string {
    return `ConcreteDecoratorA(${super.operation()})`;
  }
}
```

```ts
import Decorator from "./Decorator";
/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */

export default class ConcreteDecoratorB extends Decorator {
  /**
   * Decorators may call parent implementation of the operation, instead of
   * calling the wrapped object directly. This approach simplifies extension
   * of decorator classes.
   * Decorators can execute their behavior either before or after the call to a
   * wrapped object.
   */
  public operation(): string {
    return `ConcreteDecoratorB(${super.operation()})`;
  }
}
```

```ts
import Component from "./Component";
import ConcreteComponent from "./ConcreteComponent";
import ConcreteDecoratorA from "./ConcreteDecoratorA";
import ConcreteDecoratorB from "./ConcreteDecoratorB";
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
function clientCode(component: Component) {
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
