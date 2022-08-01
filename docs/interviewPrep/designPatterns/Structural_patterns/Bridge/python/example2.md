# Example 2

```python
class BlueConcreteImplementation:
    def log(self):
        return "blue"
```

```python
class RedConcreteImplementation:
    def log(self):
        return "red"
```

```python
class ShapeAbstract:
    def __init__(self, color):
        self.color = color

    def log_me(self):
        print(f"I am a {self.color.log()} shape.")
```

```python
from ShapeAbstract import ShapeAbstract


class TriangleAbstraction(ShapeAbstract):
    def __init__(self, color):
        super().__init__(color)
```

```python
from ShapeAbstract import ShapeAbstract


class CircleRefinedAbstraction(ShapeAbstract):
    def __init__(self, color):
        super().__init__(color)

    def log_me(self):
        print(f"I am a {self.color.log()} circle.")
```

```python
from CircleRefinedAbstraction import CircleRefinedAbstraction
from TriangleAbstraction import TriangleAbstraction
from RedConcreteImplementation import RedConcreteImplementation
from BlueConcreteImplementation import BlueConcreteImplementation


if __name__ == "__main__":
    circle = CircleRefinedAbstraction(RedConcreteImplementation())
    triangle = TriangleAbstraction(BlueConcreteImplementation())

    circle.log_me()

    triangle.log_me()
```
