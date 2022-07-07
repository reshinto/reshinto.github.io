/**
 * Template Method Design Pattern
 *
 * Intent: Defines the skeleton of an algorithm in the superclass but lets
 * subclasses override specific steps of the algorithm without changing its
 * structure.
 */

const ConcreteClass1 = require("./ConcreteClass1");
const ConcreteClass2 = require("./ConcreteClass2");

/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCode(abstractClass) {
  // ...
  abstractClass.templateMethod();
  // ...
}

console.log("Same client code can work with different subclasses:");
clientCode(new ConcreteClass1());
console.log("");

console.log("Same client code can work with different subclasses:");
clientCode(new ConcreteClass2());
