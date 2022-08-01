# Example 2

```ts
// Bridge Implementation
// Define an interface for the Implementation

/**
 * The Implementation defines the interface for all implementation classes. It
 * doesn't have to match the Abstraction's interface. In fact, the two
 * interfaces can be entirely different. Typically the Implementation interface
 * provides only primitive operations, while the Abstraction defines higher-
 * level operations based on those primitives.
 */
export default interface ColorInterface {
  log(): string;
}
```

```ts
import ColorInterface from "./ColorInterface";

// Create a Concrete Implementation

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
export default class BlueConcreteImplementation implements ColorInterface {
  log() {
    return "blue";
  }
}
```

```ts
import ColorInterface from "./ColorInterface";

// Create a Concrete Implementation

/**
 * Each Concrete Implementation corresponds to a specific platform and
 * implements the Implementation interface using that platform's API.
 */
export default class RedConcreteImplementation implements ColorInterface {
  log() {
    return "red";
  }
}
```

```ts
// Bridge Abstraction
import ColorInterface from "./ColorInterface";

// Define an abstract class for the Abstraction
/**
 * The Abstraction defines the interface for the "control" part of the two class
 * hierarchies. It maintains a reference to an object of the Implementation
 * hierarchy and delegates all of the real work to this object.
 */
export default abstract class ShapeAbstract {
  color: ColorInterface;

  constructor(color: ColorInterface) {
    this.color = color;
  }

  logMe() {
    console.log(`I am a ${this.color.log()} shape.`);
  }
}
```

```ts
import ShapeAbstract from "./ShapeAbstract";
import ColorInterface from "./ColorInterface";

// You can extend the Abstraction without changing the Implementation classes
export default class TriangleAbstraction extends ShapeAbstract {
  constructor(color: ColorInterface) {
    super(color);
  }
}
```

```ts
import ShapeAbstract from "./ShapeAbstract";
import ColorInterface from "./ColorInterface";

// You can extend the Abstraction without changing the Implementation classes
export default class CircleRefinedAbstraction extends ShapeAbstract {
  constructor(color: ColorInterface) {
    super(color);
  }

  // Create a refined Abstraction that behaves slightly differently
  logMe() {
    console.log(`I am a ${this.color.log()} circle.`);
  }
}
```

```ts
import CircleRefinedAbstraction from "./CircleRefinedAbstraction";
import TriangleAbstraction from "./TriangleAbstraction";
import RedConcreteImplementation from "./RedConcreteImplementation";
import BlueConcreteImplementation from "./BlueConcreteImplementation";

// Bridge pattern is to link the abstraction and implementation which had been separated
// Instantiate the circle with a concrete implementation

/**
 * The client code should be able to work with any pre-configured abstraction-
 * implementation combination.
 */
const circle = new CircleRefinedAbstraction(new RedConcreteImplementation());
const triangle = new TriangleAbstraction(new BlueConcreteImplementation());

circle.logMe(); // Output: I am a red circle.

triangle.logMe(); // Output: I am a blue shape.
```
