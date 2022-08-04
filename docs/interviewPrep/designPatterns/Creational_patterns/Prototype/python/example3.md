# Example 3

```python
from copy import deepcopy


class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __str__(self):
        print(f"({self.x}, {self.y})")

    def move(self, x, y):
        self.x += x
        self.y += y

    def clone(self, move_x, move_y):
        obj = deepcopy(self)
        obj.move(move_x, move_y)
        return obj
```

```python
from PointPrototypeCanModifyClone import Point


p0 = Point(0, 0)
p0.__str__()

p1 = p0.clone(1, 1)
p1.__str__()
```
