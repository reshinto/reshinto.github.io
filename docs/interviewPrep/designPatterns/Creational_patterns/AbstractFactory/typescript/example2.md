# Example 2

```ts
interface Door {
  getDescription();
}

class WoodenDoor implements Door {
  public getDescription() {
    return "I am a wooden door";
  }
}

class IronDoor implements Door {
  public getDescription() {
    return "I am a iron door";
  }
}
interface DoorFittingExpert {
  getDescription();
}

class Welder implements DoorFittingExpert {
  public getDescription() {
    return "I can only fit iron doors";
  }
}

class Carpenter implements DoorFittingExpert {
  public getDescription() {
    return "I can only fit wooden doors";
  }
}
```

```ts
interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
}

class WoodenDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new WoodenDoor();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

class IronDoorFactory implements DoorFactory {
  public makeDoor(): Door {
    return new IronDoor();
  }

  public makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}
```
