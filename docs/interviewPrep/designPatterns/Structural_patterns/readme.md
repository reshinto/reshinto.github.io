# Structural Patterns

- it explains how to assemble objects and classes into larger structures while keeping these structures flexible and efficient
  - To achieve that, both inheritance and composition can be applied
- concerned with the structure (eg class members)
- many patterns are wrappers that mimic the underlying class interface
- stress the importance of good API design
- Class: Use inheritance to compose classes
  - Adapter
- Object: Describe ways to assemble objects
  - Adapter
  - Bridge
  - Composite
  - Decorator
  - Facade
  - Flyweight
  - Proxy

### [Adapter](./Adapter/readme.md)

- Convert the interface of a class into another interface clients expect
- Adapter lets classes work together that couldn't otherwise because of incompatible interfaces
- Deal with relationships between classes & their subclasses (focus on class relationships)
- relationships are established through inheritance, so they are static-fixed at compile time
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent

### [Bridge](./Bridge/readme.md)

- Decouple an abstraction from its implementation so that the two can vary independently
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent

### [Composite](./Composite/readme.md)

- Compose objects into tree structures to represent part-whole hierarchies
- Composite lets clients treat individual objects and compositions of objects uniformly
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- often used with Iterator or Visitor
- have similar designs but different intents with Decorator
- Many objects in a design come from the analysis model, but often end up with classes that have no counterparts in the real world
  - higher-level classes:
    - introduces an abstraction for treating objects uniformly that doesn't have a physical counterpart
    - strict modeling of the real world leads to a system that reflects today's realities but not necessarily tomorrow's
    - abstractions that emerge during design are key to making a design flexible

### [Decorator](./Decorator/readme.md)

- Attach additional responsibilities to an object dynamically
- Decorators provide a flexible alternative to subclassing for extending functionality
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- have similar designs but different intents with Composite
- Design patterns specify relationships between interfaces, by requiring some classes to have similar interfaces or placing constraints on the interfaces of some classes
  - Decorator pattern require the interfaces of Decorator objects to be identical to the decorated objects

### [Facade](./Facade/readme.md)

- Provide a unified interface to a set of interfaces in a subsystem
- Facade defines a higher-level interface that makes the subsystem easier to use
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns can address the issue of objects being able to vary tremendously in size and number
  - Facade pattern: describes how to represent complete subsystems as objects

### [Flyweight](./Flyweight/readme.md)

- Use sharing to support large numbers of fine-grained objects efficiently
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns can address the issue of objects being able to vary tremendously in size and number
  - Flyweight pattern: describes how to support huge numbers of objects at the finest granularities

### [Proxy](./Proxy/readme.md)

- Provide a surrogate or placeholder for another object to control access to it
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns specify relationships between interfaces, by requiring some classes to have similar interfaces or placing constraints on the interfaces of some classes
  - Proxy pattern require the interfaces of Proxy objects to be identical to the proxied objects
