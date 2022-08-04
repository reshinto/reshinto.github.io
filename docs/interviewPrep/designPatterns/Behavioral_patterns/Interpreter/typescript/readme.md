# TypeScript Example

```ts
// defines all the methods needed to perform the different conversions
export default interface AbstractExpression {
  interpret(context: any): number;
}
```

```ts
// contains the information that will be interpreted
export default class Context {
  v: number;

  constructor(value: number) {
    this.v = value;
  }
}
```

```ts
import Context from "./Context";
import AbstractExpression from "./AbstractExpressions";

// provide specific conversions on different types of data
export default class NumberTerminalExpression implements AbstractExpression {
  num: number;

  constructor(num: number) {
    this.num = num;
  }

  public interpret(context: AbstractExpression | Context): number {
    return this.num;
  }
}
```

```ts
import Context from "./Context";
import AbstractExpression from "./AbstractExpressions";

// provide specific conversions on different types of data
export default class VariableTerminalExpression implements AbstractExpression {
  variable: string;

  constructor(variable: string) {
    this.variable = variable;
  }

  public interpret(context: AbstractExpression | Context): number {
    return context[this.variable] || 0;
  }
}
```

```ts
import Context from "./Context";
import AbstractExpression from "./AbstractExpressions";
import TimesNonTerminalExpression from "./TimesNonTerminalExpression";
import VariableTerminalExpression from "./VariableTerminalExpression";
import NumberTerminalExpression from "./NumberTerminalExpression";

type allExpressions =
  | TimesNonTerminalExpression
  | MinusNonTerminalExpression
  | VariableTerminalExpression
  | NumberTerminalExpression;

// provide specific conversions on different types of data
export default class MinusNonTerminalExpression implements AbstractExpression {
  numA: allExpressions;
  numB: allExpressions;

  constructor(numA: allExpressions, numB: allExpressions) {
    this.numA = numA;
    this.numB = numB;
  }

  public interpret(context: AbstractExpression | Context): number {
    return this.numA.interpret(context) - this.numB.interpret(context);
  }
}
```

```ts
import Context from "./Context";
import AbstractExpression from "./AbstractExpressions";
import MinusNonTerminalExpression from "./MinusNonTerminalExpression";
import VariableTerminalExpression from "./VariableTerminalExpression";
import NumberTerminalExpression from "./NumberTerminalExpression";

type allExpressions =
  | TimesNonTerminalExpression
  | MinusNonTerminalExpression
  | VariableTerminalExpression
  | NumberTerminalExpression;

// provide specific conversions on different types of data
export default class TimesNonTerminalExpression implements AbstractExpression {
  numA: allExpressions;
  numB: allExpressions;

  constructor(numA: allExpressions, numB: allExpressions) {
    this.numA = numA;
    this.numB = numB;
  }

  public interpret(context: AbstractExpression | Context): number {
    return this.numA.interpret(context) * this.numB.interpret(context);
  }
}
```

```ts
import Context from "./Context";
import NumberTerminalExpression from "./NumberTerminalExpression";
import VariableTerminalExpression from "./VariableTerminalExpression";
import TimesNonTerminalExpression from "./TimesNonTerminalExpression";
import MinusNonTerminalExpression from "./MinusNonTerminalExpression";

type allExpressions =
  | TimesNonTerminalExpression
  | MinusNonTerminalExpression
  | VariableTerminalExpression
  | NumberTerminalExpression;

class Client {
  context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  parse(expression: string): number {
    const values: string[] = expression.split(" ");
    const queue: allExpressions[] = [];
    let exp: allExpressions;
    let numB: allExpressions;
    let numA: allExpressions;
    for (const value of values) {
      switch (value) {
        case "*":
          numB = queue.pop();
          numA = queue.pop();
          exp = new TimesNonTerminalExpression(numA, numB);
          break;
        case "-":
          numB = queue.pop();
          numA = queue.pop();
          exp = new MinusNonTerminalExpression(numA, numB);
          break;
        default:
          if (isNaN(parseInt(value))) {
            exp = new VariableTerminalExpression(value);
          } else {
            const number = parseInt(value);
            exp = new NumberTerminalExpression(number);
          }
          break;
      }
      queue.push(exp);
    }
    const main: allExpressions = queue.pop();
    return main.interpret(this.context);
  }
}

const ctxt: Context = new Context(45);
const res: number = new Client(ctxt).parse("16 v * 76 q - -");
console.log(res);
```
