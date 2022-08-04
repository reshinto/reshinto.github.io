# Python Example

```python
class Context:
    def __init__(self, value):
        self.v = value
```

```python
class MinusNonTerminalExpression:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def interpret(self, context):
        return self.a.interpret(context) - self.b.interpret(context)
```

```python
class NumberTerminalExpression:
    def __init__(self, num):
        self.num = num

    def interpret(self, context):
        return self.num
```

```python
class TimesNonTerminalExpression:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def interpret(self, context):
        return self.a.interpret(context) * self.b.interpret(context)
```

```python
class VariableTerminalExpression:
    def __init__(self, variable):
        self.variable = variable

    def interpret(self, context):
        return context.get(self.variable) or 0
```

```python
from Context import Context
from NumberTerminalExpression import NumberTerminalExpression
from VariableTerminalExpression import VariableTerminalExpression
from TimesNonTerminalExpression import TimesNonTerminalExpression
from MinusNonTerminalExpression import MinusNonTerminalExpression


class Client:
    def __init__(self, context):
        self.context = context

    def parse(self, expression):
        values = expression.split(" ")
        queue = []
        for value in values:
            if value == "*":
                b = queue.pop()
                a = queue.pop()
                exp = TimesNonTerminalExpression(a, b)
            elif value == "-":
                b = queue.pop()
                a = queue.pop()
                exp = MinusNonTerminalExpression(a, b)
            else:
                try:
                    number = int(value)
                    exp = NumberTerminalExpression(number)
                except ValueError:
                    exp = VariableTerminalExpression(value)
            queue.append(exp)
        main = queue.pop()
        return main.interpret(self.context)


if __name__ == "__main__":
    ctxt = Context(45)
    res = Client(ctxt.__dict__).parse("16 v * 76 q - -")
    print(res)
```
