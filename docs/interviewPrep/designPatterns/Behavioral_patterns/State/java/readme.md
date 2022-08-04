# Java Example

- states

  - states/LockedState.java

    ```java
    package refactoring_guru.state.example.states;

    import refactoring_guru.state.example.ui.Player;

    /**
     * Concrete states provide the special implementation for all interface methods.
    */
    public class LockedState extends State {

        LockedState(Player player) {
            super(player);
            player.setPlaying(false);
        }

        @Override
        public String onLock() {
            if (player.isPlaying()) {
                player.changeState(new ReadyState(player));
                return "Stop playing";
            } else {
                return "Locked...";
            }
        }

        @Override
        public String onPlay() {
            player.changeState(new ReadyState(player));
            return "Ready";
        }

        @Override
        public String onNext() {
            return "Locked...";
        }

        @Override
        public String onPrevious() {
            return "Locked...";
        }
    }
    ```

  - states/PlayingState.java

    ```java
    package refactoring_guru.state.example.states;

    import refactoring_guru.state.example.ui.Player;

    public class PlayingState extends State {

        PlayingState(Player player) {
            super(player);
        }

        @Override
        public String onLock() {
            player.changeState(new LockedState(player));
            player.setCurrentTrackAfterStop();
            return "Stop playing";
        }

        @Override
        public String onPlay() {
            player.changeState(new ReadyState(player));
            return "Paused...";
        }

        @Override
        public String onNext() {
            return player.nextTrack();
        }

        @Override
        public String onPrevious() {
            return player.previousTrack();
        }
    }
    ```

  - states/ReadyState.java

    ```java
    package refactoring_guru.state.example.states;

    import refactoring_guru.state.example.ui.Player;

    /**
     * They can also trigger state transitions in the context.
      */
    public class ReadyState extends State {

        public ReadyState(Player player) {
            super(player);
        }

        @Override
        public String onLock() {
            player.changeState(new LockedState(player));
            return "Locked...";
        }

        @Override
        public String onPlay() {
            String action = player.startPlayback();
            player.changeState(new PlayingState(player));
            return action;
        }

        @Override
        public String onNext() {
            return "Locked...";
        }

        @Override
        public String onPrevious() {
            return "Locked...";
        }
    }
    ```

  - states/State.java

    ```java
    package refactoring_guru.state.example.states;

    import refactoring_guru.state.example.ui.Player;

    /**
     * Common interface for all states.
    */
    public abstract class State {
        Player player;

        /**
         * Context passes itself through the state constructor. This may help a
         * state to fetch some useful context data if needed.
         */
        State(Player player) {
            this.player = player;
        }

        public abstract String onLock();
        public abstract String onPlay();
        public abstract String onNext();
        public abstract String onPrevious();
    }
    ```

- ui

  - ui/Player.java

    ```java
    package refactoring_guru.state.example.ui;

    import refactoring_guru.state.example.states.ReadyState;
    import refactoring_guru.state.example.states.State;

    import java.util.ArrayList;
    import java.util.List;

    public class Player {
        private State state;
        private boolean playing = false;
        private List<String> playlist = new ArrayList<>();
        private int currentTrack = 0;

        public Player() {
            this.state = new ReadyState(this);
            setPlaying(true);
            for (int i = 1; i <= 12; i++) {
                playlist.add("Track " + i);
            }
        }

        public void changeState(State state) {
            this.state = state;
        }

        public State getState() {
            return state;
        }

        public void setPlaying(boolean playing) {
            this.playing = playing;
        }

        public boolean isPlaying() {
            return playing;
        }

        public String startPlayback() {
            return "Playing " + playlist.get(currentTrack);
        }

        public String nextTrack() {
            currentTrack++;
            if (currentTrack > playlist.size() - 1) {
                currentTrack = 0;
            }
            return "Playing " + playlist.get(currentTrack);
        }

        public String previousTrack() {
            currentTrack--;
            if (currentTrack < 0) {
                currentTrack = playlist.size() - 1;
            }
            return "Playing " + playlist.get(currentTrack);
        }

        public void setCurrentTrackAfterStop() {
            this.currentTrack = 0;
        }
    }
    ```

  - ui/UI.java

    ```java
    package refactoring_guru.state.example.ui;

    import javax.swing.*;
    import java.awt.*;

    public class UI {
        private Player player;
        private static JTextField textField = new JTextField();

        public UI(Player player) {
            this.player = player;
        }

        public void init() {
            JFrame frame = new JFrame("Test player");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            JPanel context = new JPanel();
            context.setLayout(new BoxLayout(context, BoxLayout.Y_AXIS));
            frame.getContentPane().add(context);
            JPanel buttons = new JPanel(new FlowLayout(FlowLayout.CENTER));
            context.add(textField);
            context.add(buttons);

            // Context delegates handling user's input to a state object. Naturally,
            // the outcome will depend on what state is currently active, since all
            // states can handle the input differently.
            JButton play = new JButton("Play");
            play.addActionListener(e -> textField.setText(player.getState().onPlay()));
            JButton stop = new JButton("Stop");
            stop.addActionListener(e -> textField.setText(player.getState().onLock()));
            JButton next = new JButton("Next");
            next.addActionListener(e -> textField.setText(player.getState().onNext()));
            JButton prev = new JButton("Prev");
            prev.addActionListener(e -> textField.setText(player.getState().onPrevious()));
            frame.setVisible(true);
            frame.setSize(300, 100);
            buttons.add(play);
            buttons.add(stop);
            buttons.add(next);
            buttons.add(prev);
        }
    }
    ```

- Demo.java

```java
package refactoring_guru.state.example;

import refactoring_guru.state.example.ui.Player;
import refactoring_guru.state.example.ui.UI;

/**
 * Demo class. Everything comes together here.
 */
public class Demo {
    public static void main(String[] args) {
        Player player = new Player();
        UI ui = new UI(player);
        ui.init();
    }
}
```
