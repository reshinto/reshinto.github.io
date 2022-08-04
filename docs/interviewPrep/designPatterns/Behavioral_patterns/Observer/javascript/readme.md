# JavaScript Example

```javascript
/**
 * The Observer interface declares the update method, used by subjects.
 */
class Observer {
  // Receive update from subject.
  update(subject) {}
}

module.exports = Observer;
```

```javascript
/**
 * The Subject interface declares a set of methods for managing subscribers.
 */
class Subject {
  // Attach an observer to the subject.
  attach(observer) {}

  // Detach an observer from the subject.
  detach(observer) {}

  // Notify all observers about an event.
  notify() {}
}

module.exports = Subject;
```

```javascript
const Subject = require("./Subject");

/**
 * The Subject owns some important state and notifies observers when the state
 * changes.
 */
class ConcreteSubject extends Subject {
  constructor() {
    super();
    /**
     * @type {number} For the sake of simplicity, the Subject's state, essential
     * to all subscribers, is stored in this variable.
     */
    this.state = 0;
    /**
     * @type {Observer[]} List of subscribers. In real life, the list of
     * subscribers can be stored more comprehensively (categorized by event
     * type, etc.).
     */
    this.observers = [];
  }

  /**
   * The subscription management methods.
   */
  attach(observer) {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.log("Subject: Observer has been attached already.");
    }

    console.log("Subject: Attached an observer.");
    this.observers.push(observer);
  }

  detach(observer) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
    console.log("Subject: Detached an observer.");
  }

  /**
   * Trigger an update in each subscriber.
   */
  notify() {
    console.log("Subject: Notifying observers...");
    for (const observer of this.observers) {
      observer.update(this);
    }
  }

  /**
   * Usually, the subscription logic is only a fraction of what a Subject can
   * really do. Subjects commonly hold some important business logic, that
   * triggers a notification method whenever something important is about to
   * happen (or after it).
   */
  someBusinessLogic() {
    console.log("\nSubject: I'm doing something important.");
    this.state = Math.floor(Math.random() * (10 + 1));

    console.log(`Subject: My state has just changed to: ${this.state}`);
    this.notify();
  }
}

module.exports = ConcreteSubject;
```

```javascript
const Observer = require("./Observer");
const ConcreteSubject = require("./ConcreteSubject");

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverA extends Observer {
  update(subject) {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      console.log("ConcreteObserverA: Reacted to the event.");
    }
  }
}

module.exports = ConcreteObserverA;
```

```javascript
const Observer = require("./Observer");
const ConcreteSubject = require("./ConcreteSubject");

/**
 * Concrete Observers react to the updates issued by the Subject they had been
 * attached to.
 */
class ConcreteObserverB extends Observer {
  update(subject) {
    if (
      subject instanceof ConcreteSubject &&
      (subject.state === 0 || subject.state >= 2)
    ) {
      console.log("ConcreteObserverB: Reacted to the event.");
    }
  }
}

module.exports = ConcreteObserverB;
```

```javascript
const ConcreteObserverA = require("./ConcreteObserverA");
const ConcreteObserverB = require("./ConcreteObserverB");
const ConcreteSubject = require("./ConcreteSubject");

/**
 * Observer Design Pattern
 *
 * Intent: Lets you define a subscription mechanism to notify multiple objects
 * about any events that happen to the object they're observing.
 *
 * Note that there's a lot of different terms with similar meaning associated
 * with this pattern. Just remember that the Subject is also called the
 * Publisher and the Observer is often called the Subscriber and vice versa.
 * Also the verbs "observe", "listen" or "track" usually mean the same thing.
 */
const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();
```
