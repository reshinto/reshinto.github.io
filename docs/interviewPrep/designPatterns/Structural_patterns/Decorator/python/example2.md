# Example 2

```python
class WindowInterface:
    def build(self): pass


class AbstractWindowDecorator(WindowInterface):
    """
    Maintains a reference to a window object and define an interface
    that conforms to a window's interface.
    """

    def __init__(self, window):
        self._window = window

    def build(self): pass


class Window(WindowInterface):
    def build(self):
        print("Building window")


class BorderDecorator(AbstractWindowDecorator):
    def add_border(self):
        print("Adding border")

    def build(self):
        self.add_border()
        self._window.build()


class VerticalSBDecorator(AbstractWindowDecorator):
    def add_vertical_scroll_bar(self):
        print("Adding vertical scroll bar")

    def build(self):
        self.add_vertical_scroll_bar()
        self._window.build()


class HorizontalSBDecorator(AbstractWindowDecorator):
    def add_horizontal_scroll_bar(self):
        print("Adding horizontal scroll bar")

    def build(self):
        self.add_horizontal_scroll_bar()
        self._window.build()
```

```python
from Decorator import Window, BorderDecorator, VerticalSBDecorator, HorizontalSBDecorator

# Build a window
w = Window()
w.build()

# Add a border to the window before building a window
wb = BorderDecorator(w)
wb.build()

# Add a vertical scroll, then border before building a window
wbv = VerticalSBDecorator(wb)
wbv.build()

# Add a horizontal scroll, then vertical scroll, then border before building a window
best_window = HorizontalSBDecorator(wbv)
best_window.build()
```
