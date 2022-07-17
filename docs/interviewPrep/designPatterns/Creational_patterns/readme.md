# Creational Patterns

- deal with creation (construction) of objects
- explicit (calling an constructor) vs implicit (Dependency Injection, reflection, etc.)
- wholesale (single statement) vs piecewise (step by step)
- Ensures that your system is written in terms of interfaces, not implementations
- Class: Defer some part of object creation to subclasses
  - Factory Method
- Object: Defer some part of object creation to another object
  - Abstract Factory
  - Builder
  - Prototype
  - Singleton
- When to use:
  - When the system should be independent of how its objects and products are created
  - A set of related objects is designed to be used together
  - Hiding the implementation of a product and only revealing its interface

### [Abstract Factory](./AbstractFactory/readme.md)

- factory of factories
- Provide an interface for creating families of related or dependent objects without specifying their concrete classes
- As long as your code creates objects via this interface, you don't have to worry about creating the wrong variant of a product which doesn't match the products already created by your app
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- an alternative to Prototype
- Design patterns can address the issue of objects being able to vary tremendously in size and number
  - Abstract Factory: yield objects whose only responsibilities are creating other objects

### [Builder](./Builder/readme.md)

- Separate the construction of a complex object from its representation
- so that the same construction process can create different representations
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns can address the issue of objects being able to vary tremendously in size and number
  - Builder patterns: yield objects whose only responsibilities are creating other objects

### [Factory Method](./Factory/readme.md)

- Define an interface for creating an object, but let subclasses decide which class to instantiate
- Factory method lets a class defer instantiation to subclasses
- Deal with relationships between classes & their subclasses (focus on class relationships)
- relationships are established through inheritance, so they are static-fixed at compile time

### [Prototype](./Prototype/readme.md)

- Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- an alternative to Abstract Factory

### [Singleton](./Singleton/readme.md)

- Ensure a class only has 1 instance, and provide a global point of access to it
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
