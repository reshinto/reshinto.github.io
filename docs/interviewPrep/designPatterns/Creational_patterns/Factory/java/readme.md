# Java Example

- buttons

  - buttons/Button.java

    ```java
    package refactoring_guru.factory_method.example.buttons;

    /**
     * Common interface for all buttons.
    */
    public interface Button {
        void render();
        void onClick();
    }
    ```

  - buttons/HtmlButton.java

    ```java
    package refactoring_guru.factory_method.example.buttons;

    /**
     * HTML button implementation.
    */
    public class HtmlButton implements Button {

        public void render() {
            System.out.println("<button>Test Button</button>");
            onClick();
        }

        public void onClick() {
            System.out.println("Click! Button says - 'Hello World!'");
        }
    }
    ```

  - buttons/WindowsButton.java

    ```java
    package refactoring_guru.factory_method.example.buttons;

    import javax.swing.*;
    import java.awt.*;
    import java.awt.event.ActionEvent;
    import java.awt.event.ActionListener;

    /**
     * Windows button implementation.
    */
    public class WindowsButton implements Button {
        JPanel panel = new JPanel();
        JFrame frame = new JFrame();
        JButton button;

        public void render() {
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            JLabel label = new JLabel("Hello World!");
            label.setOpaque(true);
            label.setBackground(new Color(235, 233, 126));
            label.setFont(new Font("Dialog", Font.BOLD, 44));
            label.setHorizontalAlignment(SwingConstants.CENTER);
            panel.setLayout(new FlowLayout(FlowLayout.CENTER));
            frame.getContentPane().add(panel);
            panel.add(label);
            onClick();
            panel.add(button);

            frame.setSize(320, 200);
            frame.setVisible(true);
            onClick();
        }

        public void onClick() {
            button = new JButton("Exit");
            button.addActionListener(new ActionListener() {
                public void actionPerformed(ActionEvent e) {
                    frame.setVisible(false);
                    System.exit(0);
                }
            });
        }
    }
    ```

- factory

  - factory/Dialog.java

    ```java
    package refactoring_guru.factory_method.example.factory;

    import refactoring_guru.factory_method.example.buttons.Button;

    /**
     * Base factory class. Note that "factory" is merely a role for the class. It
    * should have some core business logic which needs different products to be
    * created.
    */
    public abstract class Dialog {

        public void renderWindow() {
            // ... other code ...

            Button okButton = createButton();
            okButton.render();
        }

        /**
         * Subclasses will override this method in order to create specific button
         * objects.
         */
        public abstract Button createButton();
    }
    ```

  - factory/HtmlDialog.java

    ```java
    package refactoring_guru.factory_method.example.factory;

    import refactoring_guru.factory_method.example.buttons.Button;
    import refactoring_guru.factory_method.example.buttons.HtmlButton;

    /**
     * HTML Dialog will produce HTML buttons.
    */
    public class HtmlDialog extends Dialog {

        @Override
        public Button createButton() {
            return new HtmlButton();
        }
    }
    ```

  - factory/WindowsDialog.java

    ```java
    package refactoring_guru.factory_method.example.factory;

    import refactoring_guru.factory_method.example.buttons.Button;
    import refactoring_guru.factory_method.example.buttons.WindowsButton;

    /**
     * Windows Dialog will produce Windows buttons.
    */
    public class WindowsDialog extends Dialog {

        @Override
        public Button createButton() {
            return new WindowsButton();
        }
    }
    ```

- Demo.java

```java
package refactoring_guru.factory_method.example;

import refactoring_guru.factory_method.example.factory.Dialog;
import refactoring_guru.factory_method.example.factory.HtmlDialog;
import refactoring_guru.factory_method.example.factory.WindowsDialog;

/**
 * Demo class. Everything comes together here.
 */
public class Demo {
    private static Dialog dialog;

    public static void main(String[] args) {
        configure();
        runBusinessLogic();
    }

    /**
     * The concrete factory is usually chosen depending on configuration or
     * environment options.
     */
    static void configure() {
        if (System.getProperty("os.name").equals("Windows 10")) {
            dialog = new WindowsDialog();
        } else {
            dialog = new HtmlDialog();
        }
    }

    /**
     * All of the client code should work with factories and products through
     * abstract interfaces. This way it does not care which factory it works
     * with and what kind of product it returns.
     */
    static void runBusinessLogic() {
        dialog.renderWindow();
    }
}
```

```
<button>Test Button</button>
Click! Button says - 'Hello World!'
```
