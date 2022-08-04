# Java Example

- editor

  - editor/Editor.java

    ```java
    package refactoring_guru.observer.example.editor;

    import refactoring_guru.observer.example.publisher.EventManager;

    import java.io.File;

    public class Editor {
        public EventManager events;
        private File file;

        public Editor() {
            this.events = new EventManager("open", "save");
        }

        public void openFile(String filePath) {
            this.file = new File(filePath);
            events.notify("open", file);
        }

        public void saveFile() throws Exception {
            if (this.file != null) {
                events.notify("save", file);
            } else {
                throw new Exception("Please open a file first.");
            }
        }
    }
    ```

- listeners

  - listeners/EmailNotificationListener.java

    ```java
    package refactoring_guru.observer.example.listeners;

    import java.io.File;

    public class EmailNotificationListener implements EventListener {
        private String email;

        public EmailNotificationListener(String email) {
            this.email = email;
        }

        @Override
        public void update(String eventType, File file) {
            System.out.println("Email to " + email + ": Someone has performed " + eventType + " operation with the following file: " + file.getName());
        }
    }
    ```

  - listeners/EventListener.java

    ```java
    package refactoring_guru.observer.example.listeners;

    import java.io.File;

    public interface EventListener {
        void update(String eventType, File file);
    }
    ```

  - listeners/LogOpenListener.java

    ```java
    package refactoring_guru.observer.example.listeners;

    import java.io.File;

    public class LogOpenListener implements EventListener {
        private File log;

        public LogOpenListener(String fileName) {
            this.log = new File(fileName);
        }

        @Override
        public void update(String eventType, File file) {
            System.out.println("Save to log " + log + ": Someone has performed " + eventType + " operation with the following file: " + file.getName());
        }
    }
    ```

- publisher

  - publisher/EventManager.java

    ```java
    package refactoring_guru.observer.example.publisher;

    import refactoring_guru.observer.example.listeners.EventListener;

    import java.io.File;
    import java.util.ArrayList;
    import java.util.HashMap;
    import java.util.List;
    import java.util.Map;

    public class EventManager {
        Map<String, List<EventListener>> listeners = new HashMap<>();

        public EventManager(String... operations) {
            for (String operation : operations) {
                this.listeners.put(operation, new ArrayList<>());
            }
        }

        public void subscribe(String eventType, EventListener listener) {
            List<EventListener> users = listeners.get(eventType);
            users.add(listener);
        }

        public void unsubscribe(String eventType, EventListener listener) {
            List<EventListener> users = listeners.get(eventType);
            users.remove(listener);
        }

        public void notify(String eventType, File file) {
            List<EventListener> users = listeners.get(eventType);
            for (EventListener listener : users) {
                listener.update(eventType, file);
            }
        }
    }
    ```

- Demo.java

```java
package refactoring_guru.observer.example;

import refactoring_guru.observer.example.editor.Editor;
import refactoring_guru.observer.example.listeners.EmailNotificationListener;
import refactoring_guru.observer.example.listeners.LogOpenListener;

public class Demo {
    public static void main(String[] args) {
        Editor editor = new Editor();
        editor.events.subscribe("open", new LogOpenListener("/path/to/log/file.txt"));
        editor.events.subscribe("save", new EmailNotificationListener("admin@example.com"));

        try {
            editor.openFile("test.txt");
            editor.saveFile();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

```
Save to log \path\to\log\file.txt: Someone has performed open operation with the following file: test.txt
Email to admin@example.com: Someone has performed save operation with the following file: test.txt
```
