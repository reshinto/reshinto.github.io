# Behavior Patterns

- related to algorithms and the assignment of responsibilities between objects
  - They can be based on both
    - inheritance and composition
- they are all different, no central theme
- using completely different object oriented mechanisms, so will have some overlap
- generally most of the behavioral design patterns are unique in their approach
- it solves a problem in a particular way
  - Class: Use inheritance to describe algorithms and flow of control
    - Interpreter
    - Template Method
  - Object: Describe how a group of objects cooperate to perform a task that no single object can carry out alone
    - Chain of Responsibility
    - Command
    - Iterator
    - Mediator
    - Memento
    - Observer
    - State
    - Strategy
    - Visitor

### [Chain of Responsibility](./ChainOfResponsibility/readme.md)

- Avoid coupling the sender of a request to its receiver by giving more than 1 object a chance to handle the request
- Chain the receiving objects and pass the request along the chain until an object handles it
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent

### [Command](./Command/readme.md)

- Encapsulate a request as an object,
- thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns can address the issue of objects being able to vary tremendously in size and number
  - Command pattern: yield objects responsible for only implementing a request on anther object or group of object

### [Interpreter](./Interpreter/readme.md)

- Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language
- Deal with relationships between classes & their subclasses (focus on class relationships)
- relationships are established through inheritance, so they are static-fixed at compile time

### [Iterator](./Iterator/readme.md)

- Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- often used with Composite or Visitor

### [Mediator](./Mediator/readme.md)

- Define an object that encapsulates how a set of objects interact
- Mediator promotes loose coupling by keeping objects from referring to each other explicitly,
- and it lets you vary their interaction independently
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent

### [Memento](./Memento/readme.md)

- Without violating encapsulation, capture and externalize an object's internal state so that the object can be restored to this state later
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns will also tell you what not to put in the interfaces
  - Memento pattern: describes how to encapsulate & save the internal state of an object to allow object restoration later
    - must define 2 interfaces:
      - a restricted one that lets clients hold & copy mementos
      - a privileged one that only the original object can use to store & retrieve state in the momento

### [Observer](./Observer/readme.md)

- Define a 1 to many dependency between objects so that when 1 object changes state,
- all its dependents are notified and updated automatically
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent

### [State](./State/readme.md)

- Allow an object to alter its behavior when its internal state changes
- The object will appear to change its class
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns helps you to identify less-obvious abstractions & the objects that can capture them
  - State pattern represents each state of an entity as an object

### [Strategy](./Strategy/readme.md)

- Define a family of algorithms, encapsulate each 1, and make them interchangeable
- Strategy lets the algorithm vary independently from clients that use it
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- Design patterns helps you to identify less-obvious abstractions & the objects that can capture them
  - Strategy pattern describes how to implement interchangeable families of algorithms

### [Template Method](./Template/readme.md)

- Define the skeleton of an algorithm in an operation, deferring some steps to subclasses
- Template method lets subclasses redefine certain steps of an algorithm without changing the algorithm's structure
- Deal with relationships between classes & their subclasses (focus on class relationships)
- relationships are established through inheritance, so they are static-fixed at compile time

### [Visitor](./Visitor/readme.md)

- Represent an operation to be performed on the elements of an object structure
- Visitor lets you define a new operation without changing the classes of the elements on which it operates
- Deal with object relationships, which can be changed at run time and are more dynamic
- Almost all patterns use inheritance to some extent
- often used with Iterator or Composite
- Design patterns can address the issue of objects being able to vary tremendously in size and number
  - Visitor pattern: yield objects responsible for only implementing a request on anther object or group of object
- Design patterns specify relationships between interfaces, by requiring some classes to have similar interfaces or placing constraints on the interfaces of some classes
  - Visitor pattern: visitor interface must reflect all classes of objects that visitors can visit
