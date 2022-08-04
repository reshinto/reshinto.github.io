# Example 2

```python
class ShapeInterface:
    def draw(self): pass


class Circle(ShapeInterface):
    def draw(self):
        print("Circle.draw")


class Square(ShapeInterface):
    def draw(self):
        print("Square.draw")


class ShapeFactory:
    @staticmethod
    def getShape(type):
        if type == 'Cirle':
            return Circle()
        if type == 'Square':
            return Square()
        assert 0, "Could not find shape " + type
```

```python
from Factory import ShapeFactory

F = ShapeFactory()
s = F.getShape("Square")
print(s)
s.draw()
```
