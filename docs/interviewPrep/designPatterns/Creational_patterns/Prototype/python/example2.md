# Example 2

```python
from copy import deepcopy


class Car:
    def __init__(self):
        self.__wheels = list()
        self.__engine = None
        self.__body = None

    def setBody(self, body):
        self.__body = body

    def attachWheel(self, wheel):
        self.__wheels.append(wheel)

    def setEngine(self, engine):
        self.__engine = engine

    def specification(self):
        print("body: %s" % self.__body.shape)
        print("engine horsepower: %d" % self.__engine.horsepower)
        print("tire size: %d\'" % self.__wheels[0].size)

    def clone(self):
        return deepcopy(self)


# === Car parts ===
class Wheel:
    size = None


class Engine:
    horsepower = None


class Body:
    shape = None


class Director:
    __builder = None

    def setBuilder(self, builder):
        self.__builder = builder

    # The algorithm for assembling a car
    def getCar(self):
        car = Car()

        # First goes the body
        body = self.__builder.getBody()
        car.setBody(body)

        # Then engine
        engine = self.__builder.getEngine()
        car.setEngine(engine)

        # And four wheels
        i = 0
        while i < 4:
            wheel = self.__builder.getWheel()
            car.attachWheel(wheel)
            i += 1

        return car


class BuilderInterface:
    def getWheel(self): pass
    def getEngine(self): pass
    def getBody(self): pass


class JeepBuilder(BuilderInterface):
    def getWheel(self):
        wheel = Wheel()
        wheel.size = 22
        return wheel

    def getEngine(self):
        engine = Engine()
        engine.horsepower = 400
        return engine

    def getBody(self):
        body = Body()
        body.shape = "SUV"
        return body


class NissanBuilder(BuilderInterface):
    def getWheel(self):
        wheel = Wheel()
        wheel.size = 16
        return wheel

    def getEngine(self):
        engine = Engine()
        engine.horsepower = 100
        return engine

    def getBody(self):
        body = Body()
        body.shape = "hatchback"
        return body
```

```python
from CarBuilderAndPrototype import JeepBuilder, Director


d = Director()
d.setBuilder(JeepBuilder())
jeep = d.getCar()  # check if it is a car
print(jeep)

jeep.specification()  # check if it is a jeep

jeep2 = jeep.clone()
print(jeep2)  # check if another similar jeep has been built
```
