# Java Example

- app/Application.java

  ```java
  package refactoring_guru.abstract_factory.example.app;

  import refactoring_guru.abstract_factory.example.buttons.Button;
  import refactoring_guru.abstract_factory.example.checkboxes.Checkbox;
  import refactoring_guru.abstract_factory.example.factories.GUIFactory;

  /**
   * Factory users don't care which concrete factory they use since they work with
   * factories and products through abstract interfaces.
   */
  public class Application {
      private Button button;
      private Checkbox checkbox;

      public Application(GUIFactory factory) {
          button = factory.createButton();
          checkbox = factory.createCheckbox();
      }

      public void paint() {
          button.paint();
          checkbox.paint();
      }
  }
  ```

- buttons

  - buttons/Button.java

    ```java
    package refactoring_guru.abstract_factory.example.buttons;

    /**
     * Abstract Factory assumes that you have several families of products,
    * structured into separate class hierarchies (Button/Checkbox). All products of
    * the same family have the common interface.
    *
    * This is the common interface for buttons family.
    */
    public interface Button {
        void paint();
    }
    ```

  - buttons/MacOSButton.java

    ```java
    package refactoring_guru.abstract_factory.example.buttons;

    /**
     * All products families have the same varieties (MacOS/Windows).
    *
    * This is a MacOS variant of a button.
    */
    public class MacOSButton implements Button {

        @Override
        public void paint() {
            System.out.println("You have created MacOSButton.");
        }
    }
    ```

  - buttons/WindowsButton.java

    ```java
    package refactoring_guru.abstract_factory.example.buttons;

    /**
     * All products families have the same varieties (MacOS/Windows).
    *
    * This is another variant of a button.
    */
    public class WindowsButton implements Button {

        @Override
        public void paint() {
            System.out.println("You have created WindowsButton.");
        }
    }
    ```

- checkboxes

  - checkboxes/Checkbox.java

    ```java
    package refactoring_guru.abstract_factory.example.checkboxes;

    /**
     * Checkboxes is the second product family. It has the same variants as buttons.
    */
    public interface Checkbox {
        void paint();
    }
    ```

  - checkboxes/MacOSCheckbox.java

    ```java
    package refactoring_guru.abstract_factory.example.checkboxes;

    /**
     * All products families have the same varieties (MacOS/Windows).
    *
    * This is a variant of a checkbox.
    */
    public class MacOSCheckbox implements Checkbox {

        @Override
        public void paint() {
            System.out.println("You have created MacOSCheckbox.");
        }
    }
    ```

  - checkboxes/WindowsCheckbox.java

    ```java
    package refactoring_guru.abstract_factory.example.checkboxes;

    /**
     * All products families have the same varieties (MacOS/Windows).
    *
    * This is another variant of a checkbox.
    */
    public class WindowsCheckbox implements Checkbox {

        @Override
        public void paint() {
            System.out.println("You have created WindowsCheckbox.");
        }
    }
    ```

- factories

  - factories/GUIFactory.java

    ```java
    package refactoring_guru.abstract_factory.example.factories;

    import refactoring_guru.abstract_factory.example.buttons.Button;
    import refactoring_guru.abstract_factory.example.checkboxes.Checkbox;

    /**
     * Abstract factory knows about all (abstract) product types.
    */
    public interface GUIFactory {
        Button createButton();
        Checkbox createCheckbox();
    }
    ```

  - factories/MacOSFactory.java

    ```java
    package refactoring_guru.abstract_factory.example.factories;

    import refactoring_guru.abstract_factory.example.buttons.Button;
    import refactoring_guru.abstract_factory.example.buttons.MacOSButton;
    import refactoring_guru.abstract_factory.example.checkboxes.Checkbox;
    import refactoring_guru.abstract_factory.example.checkboxes.MacOSCheckbox;

    /**
     * Each concrete factory extends basic factory and responsible for creating
    * products of a single variety.
    */
    public class MacOSFactory implements GUIFactory {

        @Override
        public Button createButton() {
            return new MacOSButton();
        }

        @Override
        public Checkbox createCheckbox() {
            return new MacOSCheckbox();
        }
    }
    ```

  - factories/WindowsFactory.java

    ```java
    package refactoring_guru.abstract_factory.example.factories;

    import refactoring_guru.abstract_factory.example.buttons.Button;
    import refactoring_guru.abstract_factory.example.buttons.WindowsButton;
    import refactoring_guru.abstract_factory.example.checkboxes.Checkbox;
    import refactoring_guru.abstract_factory.example.checkboxes.WindowsCheckbox;

    /**
     * Each concrete factory extends basic factory and responsible for creating
    * products of a single variety.
    */
    public class WindowsFactory implements GUIFactory {

        @Override
        public Button createButton() {
            return new WindowsButton();
        }

        @Override
        public Checkbox createCheckbox() {
            return new WindowsCheckbox();
        }
    }
    ```

- Demo.java

  ```java
  package refactoring_guru.abstract_factory.example;

  import refactoring_guru.abstract_factory.example.app.Application;
  import refactoring_guru.abstract_factory.example.factories.GUIFactory;
  import refactoring_guru.abstract_factory.example.factories.MacOSFactory;
  import refactoring_guru.abstract_factory.example.factories.WindowsFactory;

  /**
   * Demo class. Everything comes together here.
   */
  public class Demo {

      /**
       * Application picks the factory type and creates it in run time (usually at
       * initialization stage), depending on the configuration or environment
       * variables.
       */
      private static Application configureApplication() {
          Application app;
          GUIFactory factory;
          String osName = System.getProperty("os.name").toLowerCase();
          if (osName.contains("mac")) {
              factory = new MacOSFactory();
              app = new Application(factory);
          } else {
              factory = new WindowsFactory();
              app = new Application(factory);
          }
          return app;
      }

      public static void main(String[] args) {
          Application app = configureApplication();
          app.paint();
      }
  }
  ```

  ```
  You create WindowsButton.
  You created WindowsCheckbox.
  ```
