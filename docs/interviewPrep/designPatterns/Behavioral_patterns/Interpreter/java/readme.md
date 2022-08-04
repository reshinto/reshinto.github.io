# Java Example

- expressions

  - expressions/AbstractExpressions.java

    ```java
    package refactoring_guru.interpreter.example.expressions;

    public abstract class AbstractExpressions {
        public abstract boolean interpret(Context context) throws Exception;
    }
    ```

  - expressions/AndExpression.java

    ```java
    package refactoring_guru.interpreter.example.expressions;

    public class AndExpression extends AbstractExpressions {
        private final AbstractExpressions first;
        private final AbstractExpressions second;

        public AndExpression(AbstractExpressions first, AbstractExpressions second) {
            this.first = first;
            this.second = second;
        }

        public boolean interpret(Context context) throws Exception {
            return this.first.interpret(context) && this.second.interpret(context);
        }
    }
    ```

  - expressions/Context.java

    ```java
    package refactoring_guru.interpreter.example.expressions;

    import java.util.HashMap;

    public class Context {
        HashMap<String, Boolean> poolVariables = new HashMap<>();

        public boolean lookUp(String name) throws Exception {
            if (!poolVariables.containsKey(name)) {
                throw new Exception("No exist variable: name");
            }

            return this.poolVariables.get(name);
        }

        public void assign(VariableExpression variable, boolean value) {
            this.poolVariables.put(variable.getName(), value);
        }
    }
    ```

  - expressions/OrExpression.java

    ```java
    package refactoring_guru.interpreter.example.expressions;

    public class OrExpression extends AbstractExpressions {
        private final AbstractExpressions first;
        private final AbstractExpressions second;

        public OrExpression(AbstractExpressions first, AbstractExpressions second) {
            this.first = first;
            this.second = second;
        }

        public boolean interpret(Context context) throws Exception {
            return this.first.interpret(context) || this.second.interpret(context);
        }
    }
    ```

  - expressions/VariableExpression.java

    ```java
    package refactoring_guru.interpreter.example.expressions;

    public class VariableExpression extends AbstractExpressions {
        private final String name;

        public VariableExpression(String name) {
            this.name = name;
        }

        public boolean interpret(Context context) throws Exception {
            return context.lookUp(this.name);
        }

        public String getName() {
            return this.name;
        }
    }
    ```

- Demo.java

```java
package refactoring_guru.interpreter.example;

import refactoring_guru.interpreter.example.expressions.AndExpression;
import refactoring_guru.interpreter.example.expressions.Context;
import refactoring_guru.interpreter.example.expressions.OrExpression;
import refactoring_guru.interpreter.example.expressions.VariableExpression;

/**
 * Interpreter Design Pattern
 *
 * Defines a representation for a grammar as well as a mechanism to understand
 * and act upon the grammar.
 */
public class Demo {
    private static void example1() throws Exception {
        var context = new Context();

        var a = new VariableExpression("A");
        var b = new VariableExpression("B");
        var c = new VariableExpression("C");

        // example 1:
        // A ∧ (B ∨ C)
        var example1 = new AndExpression(
                a,
                new OrExpression(b, c)
        );

        context.assign(a, true);
        context.assign(b, true);
        context.assign(c, false);

        var result = example1.interpret(context) ? "true" : "false";

        System.out.println("boolean expression A ∧ (B ∨ C) = " + result + ", with variables A=true, B=true, C=false");
    }

    private static void example2() throws Exception {
        var context = new Context();

        var a = new VariableExpression("A");
        var b = new VariableExpression("B");
        var c = new VariableExpression("C");

        // example 2:
        // B ∨ (A ∧ (B ∨ C))
        var example2 = new OrExpression(
                b,
                new AndExpression(
                        a,
                        new OrExpression(b, c)
                )
        );

        context.assign(a, false);
        context.assign(b, false);
        context.assign(c, true);

        var result2 = example2.interpret(context) ? "true" : "false";

        System.out.println("boolean expression B ∨ (A ∧ (B ∨ C)) = " + result2 + ", with variables A=false, B=false, C=true");
    }

    public static void main(String[] args) throws Exception {
        example1();
        example2();
    }
}
```

```
boolean expression A ∧ (B ∨ C) = true, with variables A=true, B=true, C=false
boolean expression B ∨ (A ∧ (B ∨ C)) = false, with variables A=false, B=false, C=true
```
